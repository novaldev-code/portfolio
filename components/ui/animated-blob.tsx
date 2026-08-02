import { cn } from "@/lib/utils";

interface AnimatedBlobProps {
  className?: string;
  color?: "primary" | "secondary" | "accent";
  delay?: string;
}

const colorMap = {
  primary: "bg-primary/40",
  secondary: "bg-secondary/40",
  accent: "bg-accent/40",
};

/** A soft, floating, blurred gradient blob used for ambient hero/background motion. */
export function AnimatedBlob({
  className,
  color = "primary",
  delay = "0s",
}: AnimatedBlobProps) {
  return (
    <div
      aria-hidden
      style={{ animationDelay: delay }}
      className={cn(
        "absolute h-72 w-72 rounded-full blur-3xl animate-blob",
        colorMap[color],
        className
      )}
    />
  );
}
