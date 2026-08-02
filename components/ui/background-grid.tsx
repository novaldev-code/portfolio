import { cn } from "@/lib/utils";

/** A faint, full-bleed grid background used to add depth to hero/section backgrounds. */
export function BackgroundGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid mask-fade-bottom",
        className
      )}
    />
  );
}
