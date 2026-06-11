import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  from?: string;
  via?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  as: Component = "span",
  from = "from-qubai-400",
  via = "via-purple-300",
  to = "to-cyan-400",
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        via,
        to,
        className
      )}
    >
      {children}
    </Component>
  );
}