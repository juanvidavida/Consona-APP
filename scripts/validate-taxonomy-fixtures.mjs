import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDirectory, '..')
const taxonomyDirectory = path.join(repositoryRoot, 'docs', 'taxonomy')
const schemaPath = path.join(taxonomyDirectory, 'consona-local-taxonomy-v1.0.0.schema.json')
const fixturesDirectory = path.join(taxonomyDirectory, 'fixtures')

const schema = JSON.parse(await readFile(schemaPath, 'utf8'))

function requiredScopeFor(categoryId) {
  for (const rule of schema.allOf) {
    const expectedCategory = rule.if?.properties?.category_id?.const
    if (expectedCategory === categoryId) {
      return rule.then?.properties?.consent_scope?.const
    }
  }

  return undefined
}

function validateFixture(value) {
  const errors = []
  const allowedProperties = new Set(Object.keys(schema.properties))
  const requiredProperties = schema.required
  const categoryIds = new Set(schema.$defs.category_id.enum)
  const allowedSources = new Set(schema.$defs.source.enum)
  const consentScopes = new Set(schema.$defs.consent_scope.enum)
  const intensities = new Set(schema.$defs.intensity.enum)

  if (value === null || Array.isArray(value) || typeof value !== 'object') {
    return ['must be a JSON object']
  }

  for (const property of requiredProperties) {
    if (!(property in value)) {
      errors.push(`missing required property: ${property}`)
    }
  }

  for (const property of Object.keys(value)) {
    if (!allowedProperties.has(property)) {
      errors.push(`additional or prohibited property: ${property}`)
    }
  }

  if (value.schema_version !== schema.properties.schema_version.const) {
    errors.push(`schema_version must equal ${schema.properties.schema_version.const}`)
  }

  if (!categoryIds.has(value.category_id)) {
    errors.push(`unknown category_id: ${value.category_id}`)
  }

  if (!allowedSources.has(value.source)) {
    errors.push(`unknown source: ${value.source}`)
  }

  if (value.source === 'partner_observation') {
    errors.push('partner_observation is reserved and has no valid consent scope in v1')
  }

  if (!consentScopes.has(value.consent_scope)) {
    errors.push(`unknown consent_scope: ${value.consent_scope}`)
  }

  if (!intensities.has(value.intensity)) {
    errors.push(`invalid intensity: ${value.intensity}`)
  }

  const expectedScope = requiredScopeFor(value.category_id)
  if (expectedScope && value.consent_scope !== expectedScope) {
    errors.push(`consent_scope must equal ${expectedScope} for ${value.category_id}`)
  }

  return errors
}

async function fixtureFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => path.join(directory, entry.name))
    .sort()
}

async function validateDirectory(directory, expectedValidity) {
  const files = await fixtureFiles(directory)
  const outcomes = []

  for (const file of files) {
    const content = await readFile(file, 'utf8')
    const errors = validateFixture(JSON.parse(content))
    const valid = errors.length === 0
    const relativePath = path.relative(repositoryRoot, file)

    if (valid !== expectedValidity) {
      outcomes.push({
        ok: false,
        message: `${relativePath}: expected ${expectedValidity ? 'valid' : 'invalid'} but received ${valid ? 'valid' : `invalid (${errors.join('; ')})`}`,
      })
    } else {
      outcomes.push({
        ok: true,
        message: `${relativePath}: ${valid ? 'accepted' : `rejected (${errors.join('; ')})`}`,
      })
    }
  }

  return outcomes
}

const validOutcomes = await validateDirectory(path.join(fixturesDirectory, 'valid'), true)
const invalidOutcomes = await validateDirectory(path.join(fixturesDirectory, 'invalid'), false)
const outcomes = [...validOutcomes, ...invalidOutcomes]

for (const outcome of outcomes) {
  console.log(`${outcome.ok ? 'PASS' : 'FAIL'} ${outcome.message}`)
}

const failures = outcomes.filter((outcome) => !outcome.ok)
if (failures.length > 0) {
  process.exitCode = 1
} else {
  console.log(`Validated ${outcomes.length} synthetic taxonomy fixtures without network, storage, or personal data.`)
}
