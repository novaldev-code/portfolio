import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TechBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground/80",
        className
      )}
    >
      {label}
    </Badge>
  );
}
