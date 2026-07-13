"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CircleCheckIcon,
  ClockIcon,
  ListTodoIcon,
  MailIcon,
  PlayIcon,
  RotateCcwIcon,
  UsersIcon,
  WebhookIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RelayState = "idle" | "active" | "complete";

type RelayNode = {
  step: number;
  index: string;
  title: string;
  detail: string;
  x: number;
  y: number;
  width: number;
  height: number;
  icon: LucideIcon;
  branch?: boolean;
};

const relayNodes: RelayNode[] = [
  {
    step: 1,
    index: "01",
    title: "Business event",
    detail: "signal received",
    x: 32,
    y: 217,
    width: 178,
    height: 86,
    icon: WebhookIcon,
  },
  {
    step: 2,
    index: "02",
    title: "Automation layer",
    detail: "context resolved",
    x: 305,
    y: 207,
    width: 205,
    height: 106,
    icon: WorkflowIcon,
  },
  {
    step: 3,
    index: "03",
    title: "Required email",
    detail: "prepared and sent",
    x: 620,
    y: 20,
    width: 200,
    height: 84,
    icon: MailIcon,
    branch: true,
  },
  {
    step: 4,
    index: "04",
    title: "Operational task",
    detail: "created with context",
    x: 620,
    y: 142,
    width: 200,
    height: 84,
    icon: ListTodoIcon,
    branch: true,
  },
  {
    step: 5,
    index: "05",
    title: "Provider follow-up",
    detail: "coordination continues",
    x: 620,
    y: 294,
    width: 200,
    height: 84,
    icon: ClockIcon,
    branch: true,
  },
  {
    step: 6,
    index: "06",
    title: "Internal handoff",
    detail: "owner informed",
    x: 620,
    y: 416,
    width: 200,
    height: 84,
    icon: UsersIcon,
    branch: true,
  },
  {
    step: 7,
    index: "07",
    title: "Clear next action",
    detail: "ready for judgment",
    x: 904,
    y: 207,
    width: 184,
    height: 106,
    icon: CircleCheckIcon,
  },
];

const routes = [
  {
    step: 2,
    path: "M210 260 C248 260 267 260 305 260",
  },
  {
    step: 3,
    path: "M510 247 C562 247 558 62 620 62",
  },
  {
    step: 4,
    path: "M510 254 C565 254 565 184 620 184",
  },
  {
    step: 5,
    path: "M510 266 C565 266 565 336 620 336",
  },
  {
    step: 6,
    path: "M510 273 C562 273 558 458 620 458",
  },
  {
    step: 7,
    path: "M510 260 C650 260 765 260 904 260",
  },
];

const statusMessages = [
  "Ready for a business event.",
  "Business event received.",
  "Context resolved by the automation layer.",
  "Required message prepared.",
  "Operational task created with context.",
  "Provider follow-up scheduled.",
  "Internal handoff prepared.",
  "A clear next action is ready.",
  "Workflow complete. Clear next action delivered.",
];

function getRelayState(phase: number, step: number): RelayState {
  if (phase < step) return "idle";
  if (phase === step) return "active";
  return "complete";
}

function RelayRoute({
  path,
  state,
  reduceMotion,
}: {
  path: string;
  state: RelayState;
  reduceMotion: boolean;
}) {
  return (
    <>
      <path
        d={path}
        className="fill-none stroke-border stroke-[1.5]"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        d={path}
        initial={false}
        animate={{
          pathLength: state === "idle" ? 0 : 1,
          opacity: state === "idle" ? 0 : 1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.52,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "fill-none stroke-[2.5]",
          state === "active" ? "stroke-primary" : "stroke-foreground/45",
        )}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
      />
    </>
  );
}

function RelayNodeShape({
  node,
  state,
  reduceMotion,
}: {
  node: RelayNode;
  state: RelayState;
  reduceMotion: boolean;
}) {
  const centerY = node.y + node.height / 2;
  const Icon = node.icon;

  return (
    <motion.g
      initial={false}
      animate={{ opacity: state === "idle" ? 0.72 : 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.24 }}
    >
      <rect
        x={node.x}
        y={node.y}
        width={node.width}
        height={node.height}
        rx="12"
        className={cn(
          "stroke-[1.5] transition-colors",
          state === "active"
            ? "fill-accent stroke-primary"
            : state === "complete"
              ? "fill-surface stroke-foreground/45"
              : "fill-surface stroke-border",
        )}
        vectorEffect="non-scaling-stroke"
      />
      {node.step > 1 ? (
        <circle
          cx={node.x}
          cy={centerY}
          r="5"
          className={state === "active" ? "fill-primary" : "fill-border"}
        />
      ) : null}
      {node.step < 7 ? (
        <circle
          cx={node.x + node.width}
          cy={centerY}
          r="5"
          className={state === "active" ? "fill-primary" : "fill-border"}
        />
      ) : null}
      <text
        x={node.x + node.width - 16}
        y={node.y + 20}
        textAnchor="end"
        className="fill-muted-foreground font-mono text-[11px] font-medium"
      >
        {node.index}
      </text>
      <Icon
        x={node.x + 16}
        y={centerY - 13}
        width="22"
        height="22"
        strokeWidth="1.7"
        className={cn(
          state === "active"
            ? "text-primary"
            : state === "complete"
              ? "text-foreground"
              : "text-muted-foreground",
        )}
      />
      <text
        x={node.x + 48}
        y={centerY + 4}
        className="fill-foreground text-[15px] font-semibold"
      >
        {node.title}
      </text>
      <text
        x={node.x + 16}
        y={centerY + 28}
        className="fill-muted-foreground text-[11px]"
      >
        {node.detail}
      </text>
    </motion.g>
  );
}

export function AutomationRelay() {
  const [phase, setPhase] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [completionMessage, setCompletionMessage] = useState(statusMessages[8]);
  const timersRef = useRef<number[]>([]);
  const runNumberRef = useRef(0);
  const isRunningRef = useRef(false);
  const shouldReduceMotion = Boolean(useReducedMotion());

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current.length = 0;
  }, []);

  const completeWorkflow = useCallback(() => {
    clearTimers();
    setPhase(8);
    setIsRunning(false);
    isRunningRef.current = false;

    const replayNumber = runNumberRef.current - 1;
    const message =
      replayNumber > 0
        ? `Replay ${replayNumber} complete. Clear next action delivered.`
        : statusMessages[8];

    setCompletionMessage(message);
    setAnnouncement(message);
  }, [clearTimers]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches && isRunningRef.current) {
        completeWorkflow();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [completeWorkflow]);

  const runWorkflow = () => {
    if (isRunningRef.current) return;

    clearTimers();
    runNumberRef.current += 1;
    setAnnouncement("Illustrative workflow started.");

    if (shouldReduceMotion) {
      completeWorkflow();
      return;
    }

    setPhase(1);
    setIsRunning(true);
    isRunningRef.current = true;

    for (let nextPhase = 2; nextPhase <= 8; nextPhase += 1) {
      const timer = window.setTimeout(() => {
        if (nextPhase === 8) {
          completeWorkflow();
          return;
        }

        setPhase(nextPhase);
      }, (nextPhase - 1) * 540);

      timersRef.current.push(timer);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <figure className="mt-10">
        <div className="overflow-hidden rounded-xl border bg-surface/50 p-5 sm:p-7 lg:p-9">
          <div className="mb-6 flex flex-col gap-5 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Signal relay / illustrative run
              </p>
              <p
                className="mt-2 text-sm font-medium text-foreground"
                aria-hidden="true"
              >
                {phase === 8 ? completionMessage : statusMessages[phase]}
              </p>
            </div>

            <Button
              type="button"
              size="lg"
              className="h-11 min-w-40 px-5 aria-disabled:pointer-events-none aria-disabled:opacity-50"
              onClick={runWorkflow}
              aria-disabled={isRunning}
              aria-controls="signal-relay-diagram"
            >
              {phase === 8 ? (
                <RotateCcwIcon className="size-4" />
              ) : (
                <PlayIcon className="size-4" />
              )}
              {isRunning
                ? "Workflow running"
                : phase === 8
                  ? "Run again"
                  : "Run workflow"}
            </Button>
          </div>

          <div
            id="signal-relay-diagram"
            role="region"
            aria-label="Illustrative automation workflow"
          >
            <ol className="sr-only">
              {relayNodes.map((node) => (
                <li key={node.step}>
                  {node.index}. {node.title}: {node.detail}
                </li>
              ))}
            </ol>

            <svg
              viewBox="0 0 1120 520"
              className="hidden h-auto w-full md:block"
              aria-hidden="true"
            >
              {routes.map((route) => (
                <RelayRoute
                  key={route.step}
                  path={route.path}
                  state={getRelayState(phase, route.step)}
                  reduceMotion={shouldReduceMotion}
                />
              ))}
              {relayNodes.map((node) => (
                <RelayNodeShape
                  key={node.step}
                  node={node}
                  state={getRelayState(phase, node.step)}
                  reduceMotion={shouldReduceMotion}
                />
              ))}
            </svg>

            <ol className="space-y-3 md:hidden" aria-hidden="true">
              {relayNodes.map((node) => {
                const state = getRelayState(phase, node.step);
                const Icon = node.icon;

                return (
                  <motion.li
                    key={node.step}
                    initial={false}
                    animate={{ opacity: state === "idle" ? 0.72 : 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
                    className={cn(
                      "flex min-h-20 items-center gap-4 rounded-lg border bg-surface px-4 py-3",
                      node.branch && "ml-6",
                      state === "active"
                        ? "border-primary bg-accent"
                        : state === "complete"
                          ? "border-foreground/45"
                          : "border-border",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-xs font-semibold text-muted-foreground",
                        state === "active" && "text-primary",
                      )}
                    >
                      {node.index}
                    </span>
                    <Icon
                      className={cn(
                        "size-5 shrink-0 text-muted-foreground",
                        state === "active" && "text-primary",
                        state === "complete" && "text-foreground",
                      )}
                      strokeWidth={1.7}
                    />
                    <span>
                      <span className="block font-semibold text-foreground">
                        {node.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {node.detail}
                      </span>
                    </span>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>

        <figcaption className="mt-4 max-w-4xl text-sm leading-6 text-muted-foreground">
          Original illustration of the workflow pattern. It does not reproduce
          Ventura Travel&apos;s internal interface, topology, customer data, or
          metrics.
        </figcaption>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>
      </figure>
    </MotionConfig>
  );
}
