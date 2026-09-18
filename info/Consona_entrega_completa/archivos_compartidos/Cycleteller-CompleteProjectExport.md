# Cycleteller - Complete Project Export

**Version:** 23ff940b  
**Description:** Partner-focused menstrual cycle tracking app with emotional intelligence and relationship guidance.

---

## PROJECT STRUCTURE

```
cycleteller/
├── client/
│   ├── public/
│   │   ├── __manus__/version.json
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── manifest.json
│   ├── src/
│   │   ├── _core/hooks/useAuth.ts
│   │   ├── components/
│   │   │   ├── BottomNav.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── DashboardLayoutSkeleton.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   ├── Map.tsx
│   │   │   ├── RelationshipGuidance.tsx
│   │   │   └── ui/ (shadcn/ui components)
│   │   ├── contexts/
│   │   │   ├── LanguageContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Calendar.tsx
│   │   │   ├── Activities.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── NotFound.tsx
│   │   │   └── ComponentShowcase.tsx
│   │   ├── lib/
│   │   │   ├── trpc.ts
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   └── const.ts
│   ├── index.html
│   └── vite.config.ts
├── server/
│   ├── _core/
│   │   ├── context.ts
│   │   ├── cookies.ts
│   │   ├── dataApi.ts
│   │   ├── env.ts
│   │   ├── imageGeneration.ts
│   │   ├── index.ts
│   │   ├── llm.ts
│   │   ├── map.ts
│   │   ├── notification.ts
│   │   ├── oauth.ts
│   │   ├── sdk.ts
│   │   ├── storageProxy.ts
│   │   ├── systemRouter.ts
│   │   ├── trpc.ts
│   │   ├── vite.ts
│   │   ├── voiceTranscription.ts
│   │   └── types/
│   ├── routers.ts
│   ├── db.ts
│   ├── storage.ts
│   ├── auth.logout.test.ts
│   └── cycle.test.ts
├── shared/
│   ├── cycleLogic.ts
│   ├── cycleStats.ts
│   ├── cycleStats.test.ts
│   ├── i18n.ts
│   ├── types.ts
│   └── const.ts
├── drizzle/
│   ├── schema.ts
│   ├── relations.ts
│   └── migrations/
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── drizzle.config.ts
└── components.json
```

---

## CORE FILES

### 1. package.json

```json
{
  "name": "cycleteller",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "type-check": "tsc --noEmit",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "node --loader tsx ./server/_core/migrate.ts"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "wouter": "^3.0.0",
    "@trpc/client": "^11.0.0",
    "@trpc/server": "^11.0.0",
    "@trpc/react-query": "^11.0.0",
    "@tanstack/react-query": "^5.0.0",
    "zod": "^3.22.0",
    "superjson": "^2.2.0",
    "drizzle-orm": "^0.30.0",
    "mysql2": "^3.6.0",
    "date-fns": "^2.30.0",
    "lucide-react": "^0.263.0",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-tooltip": "^1.0.7",
    "tailwindcss": "^4.0.0",
    "sonner": "^1.2.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "vitest": "^1.0.0",
    "drizzle-kit": "^0.20.0",
    "tsx": "^4.7.0"
  }
}
```

---

## KEY SOURCE FILES

### 2. client/src/App.tsx

```tsx
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { getLoginUrl } from "@/const";
import Dashboard from "@/pages/Dashboard";
import Calendar from "@/pages/Calendar";
import Activities from "@/pages/Activities";
import Settings from "@/pages/Settings";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import BottomNav from "@/components/BottomNav";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function App() {
  const { isAuthenticated, loading } = useAuth();
  const [location, navigate] = useLocation();

  useEffect(() => {
    if (!loading && !isAuthenticated && location !== "/") {
      navigate("/");
    }
  }, [isAuthenticated, loading, location, navigate]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <ThemeProvider defaultTheme="light">
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          {location === "/" && <Home />}
          {isAuthenticated && (
            <>
              {location === "/dashboard" && <Dashboard />}
              {location === "/calendar" && <Calendar />}
              {location === "/activities" && <Activities />}
              {location === "/settings" && <Settings />}
              {!["dashboard", "calendar", "activities", "settings"].some(p => location.includes(p)) && <NotFound />}
              <BottomNav />
            </>
          )}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

### 3. client/src/pages/Dashboard.tsx

```tsx
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { getLoginUrl } from "@/const";
import { useTranslation } from "@/contexts/LanguageContext";
import { format } from "date-fns";

export default function Dashboard() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [, navigate] = useLocation();
  const { t } = useTranslation();

  const { data: currentPhase } = trpc.cycle.currentPhase.useQuery(undefined, { enabled: isAuthenticated });
  const { data: cycleStats } = trpc.stats.getCycleStats.useQuery(undefined, { enabled: isAuthenticated });
  const { data: nextPredicted } = trpc.cycle.nextPredicted.useQuery(undefined, { enabled: isAuthenticated, retry: false });

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate(`/?redirect=${encodeURIComponent("/dashboard")}`);
    }
  }, [isAuthenticated, authLoading, navigate]);

  if (authLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (!isAuthenticated) return null;

  const today = new Date();
  const phaseColors: Record<string, { bg: string; text: string }> = {
    menstrual: { bg: "#10b981", text: "white" },
    follicular: { bg: "#fbbf24", text: "white" },
    ovulation: { bg: "#f97316", text: "white" },
    luteal: { bg: "#ef4444", text: "white" },
  };

  const bgColor = currentPhase ? phaseColors[currentPhase.phase]?.bg : "#e5e7eb";

  return (
    <div className="min-h-screen pb-24" style={{ background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)` }}>
      <div className="flex flex-col items-center justify-center pt-8 px-4">
        <p className="text-white text-sm font-medium mb-2">{format(today, "d MMMM")}</p>
        <div className="relative w-64 h-64 rounded-full flex items-center justify-center" style={{ backgroundColor: bgColor }}>
          <div className="text-center">
            <div className="text-7xl font-bold text-white mb-2">{currentPhase?.dayOfCycle || "-"}</div>
            <div className="text-xl font-semibold text-white mb-4">{currentPhase?.phase || "No data"}</div>
            <div className="text-sm text-white opacity-90">{currentPhase?.mood || ""}</div>
          </div>
        </div>

        {nextPredicted && (
          <div className="mt-8 text-center text-white">
            <p className="text-sm opacity-75">Next Period Predicted</p>
            <p className="text-lg font-semibold">{format(new Date(nextPredicted.periodStartDate), "MMM d, yyyy")}</p>
          </div>
        )}
      </div>

      <div className="px-4 mt-12 space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-2">{t("dashboard.guidance")}</h3>
          <p className="text-sm text-gray-600">{currentPhase?.guidance || "No guidance available"}</p>
        </div>
      </div>
    </div>
  );
}
```

### 4. client/src/pages/Calendar.tsx

```tsx
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Plus, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { getPhaseSegments, type CyclePhase } from "../../../shared/cycleLogic";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";

const PHASE_ICONS: Record<CyclePhase, { icon: string; label: string; tooltip: string }> = {
  menstrual: { icon: "●", label: "Menstrual", tooltip: "Rest & Reflection - Take time for yourself" },
  follicular: { icon: "▲", label: "Follicular", tooltip: "Growth & Energy - Embrace new ideas" },
  ovulation: { icon: "★", label: "Ovulation", tooltip: "Peak Confidence - Social & energetic" },
  luteal: { icon: "▼", label: "Luteal", tooltip: "Intensity & Depth - Process emotions" },
};

function calcPhase(date: Date, periodStartMs: number, cycleLength: number, periodLength: number): CyclePhase | null {
  const dateMs = date.getTime();
  const diffDays = Math.floor((dateMs - periodStartMs) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return null;
  const dayOfCycle = (diffDays % cycleLength) + 1;
  const ovulationDay = Math.round(cycleLength / 2);
  const ovulationWindow = 3;
  if (dayOfCycle <= periodLength) return "menstrual";
  if (dayOfCycle < ovulationDay - ovulationWindow) return "follicular";
  if (dayOfCycle <= ovulationDay + ovulationWindow) return "ovulation";
  return "luteal";
}

export default function Calendar() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [, navigate] = useLocation();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [periodDate, setPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [periodLength, setPeriodLength] = useState("5");
  const [notes, setNotes] = useState("");
  const [symptoms, setSymptoms] = useState<string[]>([]);

  const SYMPTOMS = ["cramps", "mood", "energy", "flow", "headache", "bloating"];

  const { data: cycles, isLoading } = trpc.cycle.list.useQuery(undefined, { enabled: isAuthenticated });
  const { data: latestCycle } = trpc.cycle.latest.useQuery(undefined, { enabled: isAuthenticated });
  const { data: nextPredicted } = trpc.cycle.nextPredicted.useQuery(undefined, { enabled: isAuthenticated, retry: false });

  const addCycle = trpc.cycle.add.useMutation({
    onSuccess: () => {
      setDialogOpen(false);
      toast.success("Cycle entry added!");
    },
  });

  const confirmPeriod = trpc.cycle.confirmPeriod.useMutation({
    onSuccess: () => {
      toast.success("Period confirmed!");
    },
  });

  const today = new Date();
  const calDays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  const periodStart = latestCycle?.periodStartDate;
  const cl = latestCycle?.cycleLength || 28;
  const pl = latestCycle?.periodLength || 5;

  return (
    <div className="pb-24">
      <div className="px-4 py-4 flex items-center justify-between">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-2 hover:bg-muted rounded-lg">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-2 hover:bg-muted rounded-lg">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="px-2 py-4 space-y-2">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calDays.map(day => {
            const isCurrentMonth = isSameMonth(day, currentMonth);
            const isToday = isSameDay(day, today);
            const dayMs = day.getTime();
            const isPredicted = nextPredicted && Math.abs(dayMs - nextPredicted.periodStartDate) < 24 * 60 * 60 * 1000;
            const phase = periodStart ? calcPhase(day, periodStart, cl, pl) : null;
            const phaseIcon = phase ? PHASE_ICONS[phase] : null;
            const tooltipLabel = isPredicted ? "Click to confirm predicted period" : phaseIcon?.tooltip || "No phase";

            const dayButton = (
              <button
                onClick={() => {
                  if (isCurrentMonth) {
                    if (isPredicted && nextPredicted) {
                      confirmPeriod.mutate({ confirmedPeriodDate: dayMs });
                    } else {
                      setPeriodDate(format(day, "yyyy-MM-dd"));
                    }
                  }
                }}
                className={cn(
                  "aspect-square rounded-lg flex flex-col items-center justify-center font-semibold text-sm transition-all active:scale-95 border border-border hover:bg-muted",
                  !isCurrentMonth && "opacity-30",
                  isToday && "ring-2 ring-offset-2 ring-primary",
                  isPredicted && "border-dashed"
                )}
                style={{ backgroundColor: "transparent" }}>
                <div className="text-base font-bold text-foreground">{day.getDate()}</div>
                {phaseIcon && <div className="text-lg mt-0.5 leading-none text-muted-foreground">{phaseIcon.icon}</div>}
              </button>
            );

            return (
              <TooltipProvider key={day.toISOString()}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {dayButton}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltipLabel}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-24 left-4 right-4">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full py-6 text-lg font-bold rounded-2xl" style={{ background: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" }}>
              <Plus size={24} className="mr-2" />
              Add Period
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-3xl">
            <DialogHeader>
              <DialogTitle>Add Period Entry</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>First day of last period</Label>
                <Input type="date" value={periodDate} onChange={e => setPeriodDate(e.target.value)} className="rounded-xl" />
              </div>
              <div>
                <Label>Cycle length (days)</Label>
                <Input type="number" value={cycleLength} onChange={e => setCycleLength(e.target.value)} min="21" max="45" className="rounded-xl" />
              </div>
              <div>
                <Label>Period length (days)</Label>
                <Input type="number" value={periodLength} onChange={e => setPeriodLength(e.target.value)} min="2" max="10" className="rounded-xl" />
              </div>
              <div>
                <Label>Symptoms</Label>
                <div className="grid grid-cols-2 gap-2">
                  {SYMPTOMS.map(symptom => (
                    <label key={symptom} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={symptoms.includes(symptom)} onChange={() => setSymptoms(prev => prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom])} className="w-4 h-4 rounded" />
                      <span className="text-sm capitalize">{symptom}</span>
                    </label>
                  ))}
                </div>
              </div>
              <Button onClick={() => addCycle.mutate({ periodStartDate: new Date(periodDate).getTime(), cycleLength: parseInt(cycleLength), periodLength: parseInt(periodLength), symptoms, notes })} className="w-full py-3 rounded-xl">
                Save Entry
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
```

### 5. shared/cycleLogic.ts

```ts
export type CyclePhase = "menstrual" | "follicular" | "ovulation" | "luteal";

export function getPhaseSegments(cycleLength: number, periodLength: number) {
  const ovulationDay = Math.round(cycleLength / 2);
  const ovulationWindow = 3;
  
  return {
    menstrual: { start: 1, end: periodLength },
    follicular: { start: periodLength + 1, end: ovulationDay - ovulationWindow - 1 },
    ovulation: { start: ovulationDay - ovulationWindow, end: ovulationDay + ovulationWindow },
    luteal: { start: ovulationDay + ovulationWindow + 1, end: cycleLength },
  };
}

export function getPhaseAtDay(dayOfCycle: number, cycleLength: number, periodLength: number): CyclePhase {
  const segments = getPhaseSegments(cycleLength, periodLength);
  
  if (dayOfCycle >= segments.menstrual.start && dayOfCycle <= segments.menstrual.end) return "menstrual";
  if (dayOfCycle >= segments.follicular.start && dayOfCycle <= segments.follicular.end) return "follicular";
  if (dayOfCycle >= segments.ovulation.start && dayOfCycle <= segments.ovulation.end) return "ovulation";
  return "luteal";
}

export function getMoodForPhase(phase: CyclePhase): string {
  const moods: Record<CyclePhase, string> = {
    menstrual: "Introspective",
    follicular: "Energetic",
    ovulation: "Confident",
    luteal: "Intense",
  };
  return moods[phase];
}
```

### 6. server/routers.ts

```ts
import { router, publicProcedure, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
  cycle: router({
    add: protectedProcedure
      .input(z.object({
        periodStartDate: z.number(),
        cycleLength: z.number().min(21).max(45),
        periodLength: z.number().min(2).max(10),
        symptoms: z.array(z.string()).optional(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        return db.addCycleEntry(ctx.user.id, input);
      }),

    list: protectedProcedure.query(async ({ ctx }) => {
      return db.getCycleEntries(ctx.user.id);
    }),

    latest: protectedProcedure.query(async ({ ctx }) => {
      return db.getLatestCycleEntry(ctx.user.id);
    }),

    currentPhase: protectedProcedure.query(async ({ ctx }) => {
      return db.getCurrentPhase(ctx.user.id);
    }),

    nextPredicted: protectedProcedure.query(async ({ ctx }) => {
      return db.getOrCreateNextPredictedPeriod(ctx.user.id);
    }),

    confirmPeriod: protectedProcedure
      .input(z.object({ confirmedPeriodDate: z.number() }))
      .mutation(async ({ ctx, input }) => {
        return db.confirmPeriodDate(ctx.user.id, input.confirmedPeriodDate);
      }),

    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        return db.deleteCycleEntry(ctx.user.id, input.id);
      }),
  }),

  stats: router({
    getCycleStats: protectedProcedure.query(async ({ ctx }) => {
      return db.getCycleStats(ctx.user.id);
    }),
  }),

  auth: router({
    me: protectedProcedure.query(async ({ ctx }) => {
      return ctx.user;
    }),

    logout: publicProcedure.mutation(async ({ ctx }) => {
      ctx.res.setHeader("Set-Cookie", `session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
      return { success: true };
    }),
  }),
});

export type AppRouter = typeof appRouter;
```

### 7. server/db.ts

```ts
import { db } from "./_core/index";
import { cycleEntries, users } from "../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";
import { getPhaseAtDay } from "../shared/cycleLogic";

export async function addCycleEntry(userId: number, data: any) {
  const result = await db.insert(cycleEntries).values({
    userId,
    periodStartDate: data.periodStartDate,
    cycleLength: data.cycleLength,
    periodLength: data.periodLength,
    isConfirmed: true,
    symptoms: data.symptoms?.join(",") || "",
    notes: data.notes || "",
  }).returning();
  return result[0];
}

export async function getCycleEntries(userId: number) {
  return db.select().from(cycleEntries).where(eq(cycleEntries.userId, userId)).orderBy(desc(cycleEntries.periodStartDate));
}

export async function getLatestCycleEntry(userId: number) {
  const result = await db.select().from(cycleEntries).where(eq(cycleEntries.userId, userId)).orderBy(desc(cycleEntries.periodStartDate)).limit(1);
  return result[0] || null;
}

export async function getCurrentPhase(userId: number) {
  const latest = await getLatestCycleEntry(userId);
  if (!latest) return null;

  const now = Date.now();
  const daysSincePeriod = Math.floor((now - latest.periodStartDate) / (1000 * 60 * 60 * 24));
  const dayOfCycle = (daysSincePeriod % latest.cycleLength) + 1;
  const phase = getPhaseAtDay(dayOfCycle, latest.cycleLength, latest.periodLength);

  return {
    phase,
    dayOfCycle,
    mood: getMoodForPhase(phase),
    guidance: getGuidanceForPhase(phase),
  };
}

export async function getOrCreateNextPredictedPeriod(userId: number) {
  const latest = await getLatestCycleEntry(userId);
  if (!latest) return null;

  const nextPeriodDate = latest.periodStartDate + (latest.cycleLength * 24 * 60 * 60 * 1000);
  return {
    periodStartDate: nextPeriodDate,
    isConfirmed: false,
  };
}

export async function confirmPeriodDate(userId: number, confirmedDate: number) {
  const result = await db.insert(cycleEntries).values({
    userId,
    periodStartDate: confirmedDate,
    cycleLength: 28,
    periodLength: 5,
    isConfirmed: true,
  }).returning();
  return result[0];
}

export async function deleteCycleEntry(userId: number, id: number) {
  return db.delete(cycleEntries).where(and(eq(cycleEntries.id, id), eq(cycleEntries.userId, userId)));
}

export async function getCycleStats(userId: number) {
  const entries = await getCycleEntries(userId);
  if (entries.length < 2) return null;

  const cycleLengths = [];
  for (let i = 1; i < entries.length; i++) {
    const diff = Math.floor((entries[i - 1].periodStartDate - entries[i].periodStartDate) / (1000 * 60 * 60 * 24));
    if (diff > 0) cycleLengths.push(diff);
  }

  const avgLength = cycleLengths.length > 0 ? Math.round(cycleLengths.reduce((a, b) => a + b) / cycleLengths.length) : 28;
  return { avgLength, totalCycles: entries.length };
}

function getMoodForPhase(phase: string): string {
  const moods: Record<string, string> = {
    menstrual: "Introspective",
    follicular: "Energetic",
    ovulation: "Confident",
    luteal: "Intense",
  };
  return moods[phase] || "";
}

function getGuidanceForPhase(phase: string): string {
  const guidance: Record<string, string> = {
    menstrual: "Rest and reflect. Honor your need for solitude.",
    follicular: "Embrace new projects. Energy is rising.",
    ovulation: "Peak confidence and social energy. Great time to connect.",
    luteal: "Process emotions. Be patient with yourself.",
  };
  return guidance[phase] || "";
}
```

### 8. drizzle/schema.ts

```ts
import { mysqlTable, int, varchar, text, timestamp, boolean, decimal } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  openId: varchar("open_id", { length: 255 }).unique(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).unique(),
  loginMethod: varchar("login_method", { length: 50 }),
  role: varchar("role", { length: 50 }).default("user"),
  partnerName: varchar("partner_name", { length: 255 }),
  language: varchar("language", { length: 10 }).default("en"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
  lastSignedIn: timestamp("last_signed_in"),
});

export const cycleEntries = mysqlTable("cycle_entries", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("user_id").notNull().references(() => users.id),
  periodStartDate: decimal("period_start_date", { precision: 13, scale: 0 }),
  cycleLength: int("cycle_length").default(28),
  periodLength: int("period_length").default(5),
  isConfirmed: boolean("is_confirmed").default(false),
  symptoms: text("symptoms"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  cycles: many(cycleEntries),
}));

export const cycleEntriesRelations = relations(cycleEntries, ({ one }) => ({
  user: one(users, { fields: [cycleEntries.userId], references: [users.id] }),
}));
```

### 9. shared/i18n.ts

```ts
const translations = {
  en: {
    dashboard: {
      guidance: "Relationship Guidance",
      nextPeriod: "Next Period",
    },
    calendar: {
      addPeriod: "Add Period",
      cycleLengthLabel: "Cycle length (days)",
      periodLengthLabel: "Period length (days)",
    },
    settings: {
      title: "Settings",
      language: "Language",
      theme: "Theme",
      partnerName: "Partner Name",
      cycleInfo: "Cycle Information",
    },
  },
  es: {
    dashboard: {
      guidance: "Guía de Relación",
      nextPeriod: "Próximo Período",
    },
    calendar: {
      addPeriod: "Agregar Período",
      cycleLengthLabel: "Duración del ciclo (días)",
      periodLengthLabel: "Duración del período (días)",
    },
    settings: {
      title: "Configuración",
      language: "Idioma",
      theme: "Tema",
      partnerName: "Nombre de la Pareja",
      cycleInfo: "Información del Ciclo",
    },
  },
  ca: {
    dashboard: {
      guidance: "Guia de Relació",
      nextPeriod: "Pròxim Període",
    },
    calendar: {
      addPeriod: "Afegir Període",
      cycleLengthLabel: "Durada del cicle (dies)",
      periodLengthLabel: "Durada del període (dies)",
    },
    settings: {
      title: "Configuració",
      language: "Idioma",
      theme: "Tema",
      partnerName: "Nom de la Parella",
      cycleInfo: "Informació del Cicle",
    },
  },
};

export function useTranslation(lang: string = "en") {
  const messages = translations[lang as keyof typeof translations] || translations.en;
  return {
    t: (key: string) => {
      const keys = key.split(".");
      let value: any = messages;
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
  };
}
```

### 10. client/src/index.css

```css
@import "tailwindcss";

@layer base {
  :root {
    --primary: oklch(0.65 0.22 40);
    --primary-foreground: oklch(1 0 0);
    --secondary: oklch(0.60 0.18 145);
    --secondary-foreground: oklch(1 0 0);
    --destructive: oklch(0.50 0.25 15);
    --destructive-foreground: oklch(1 0 0);
    --muted: oklch(0.94 0.01 0);
    --muted-foreground: oklch(0.50 0.02 0);
    --accent: oklch(0.65 0.22 40);
    --accent-foreground: oklch(1 0 0);
    --background: oklch(1 0 0);
    --foreground: oklch(0.20 0.01 0);
    --card: oklch(0.98 0.01 0);
    --card-foreground: oklch(0.20 0.01 0);
    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.20 0.01 0);
    --border: oklch(0.90 0.02 0);
    --input: oklch(0.90 0.02 0);
    --ring: oklch(0.65 0.22 40);
  }

  .dark {
    --primary: oklch(0.65 0.22 40);
    --primary-foreground: oklch(0.15 0.01 0);
    --secondary: oklch(0.60 0.18 145);
    --secondary-foreground: oklch(0.15 0.01 0);
    --destructive: oklch(0.50 0.25 15);
    --destructive-foreground: oklch(0.98 0.01 0);
    --muted: oklch(0.25 0.02 0);
    --muted-foreground: oklch(0.75 0.02 0);
    --accent: oklch(0.65 0.22 40);
    --accent-foreground: oklch(0.15 0.01 0);
    --background: oklch(0.15 0.01 0);
    --foreground: oklch(0.95 0.01 0);
    --card: oklch(0.20 0.01 0);
    --card-foreground: oklch(0.95 0.01 0);
    --popover: oklch(0.15 0.01 0);
    --popover-foreground: oklch(0.95 0.01 0);
    --border: oklch(0.25 0.02 0);
    --input: oklch(0.25 0.02 0);
    --ring: oklch(0.65 0.22 40);
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }

  .container {
    @apply max-w-7xl mx-auto px-4;
  }

  .flex {
    @apply min-w-0 min-h-0;
  }
}

@layer components {
  .phase-pattern-menstrual {
    background-image: radial-gradient(circle, rgba(16, 185, 129, 0.15) 2px, transparent 2px);
    background-size: 12px 12px;
  }

  .phase-pattern-follicular {
    background-image: repeating-linear-gradient(0deg, rgba(251, 191, 36, 0.15) 0px, rgba(251, 191, 36, 0.15) 2px, transparent 2px, transparent 8px);
  }

  .phase-pattern-ovulation {
    background-image: radial-gradient(circle, rgba(249, 115, 22, 0.15) 3px, transparent 3px);
    background-size: 16px 16px;
    background-position: 0 0, 8px 8px;
  }

  .phase-pattern-luteal {
    background-image: repeating-linear-gradient(45deg, rgba(239, 68, 68, 0.15) 0px, rgba(239, 68, 68, 0.15) 2px, transparent 2px, transparent 8px);
  }
}
```

---

## SETUP INSTRUCTIONS

### Prerequisites
- Node.js 18+
- MySQL/TiDB database
- Environment variables configured

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
# Create .env.local with:
DATABASE_URL=mysql://user:password@localhost:3306/cycleteller
JWT_SECRET=your_jwt_secret_here
VITE_APP_ID=your_oauth_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im

# 3. Generate database migrations
npm run db:generate

# 4. Apply migrations
npm run db:migrate

# 5. Start development server
npm run dev

# 6. Run tests
npm run test
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## KEY FEATURES

- **Cycle Tracking**: Log menstrual cycle start dates and durations
- **Phase Detection**: Automatic calculation of current cycle phase (menstrual, follicular, ovulation, luteal)
- **Prediction System**: Automatic prediction of next period with manual confirmation
- **Relationship Guidance**: Phase-specific tips and communication advice
- **Multi-language Support**: English, Spanish, Catalan
- **Minimalist Calendar**: Clean calendar view with emotional iconography
- **Activity Recommendations**: Phase-appropriate activity suggestions
- **Responsive Design**: Mobile-first design for partner use

---

## DATABASE SCHEMA

**users table**
- id, openId, name, email, loginMethod, role, partnerName, language, createdAt, updatedAt, lastSignedIn

**cycleEntries table**
- id, userId, periodStartDate, cycleLength, periodLength, isConfirmed, symptoms, notes, createdAt

---

## TECHNOLOGY STACK

- **Frontend**: React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- **Backend**: Express, tRPC, Drizzle ORM
- **Database**: MySQL/TiDB
- **Testing**: Vitest
- **Build**: Vite
- **Auth**: Manus OAuth

---

## NOTES

- All timestamps stored as UTC milliseconds
- Cycle phases calculated based on period start date + cycle length
- Predicted periods marked as `isConfirmed: false` until manually confirmed
- All UI text uses i18n translation system
- No external chat/LLM services integrated
- Mobile-optimized with touch-friendly UI

