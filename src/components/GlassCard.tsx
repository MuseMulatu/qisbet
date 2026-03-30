import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  glowColor?: string;
}

const GlassCard = ({ title, description, className, children, glowColor }: GlassCardProps) => {
  return (
    <div className={cn("p-6 rounded-2xl glass-effect gentle-animation hover:scale-[1.02] group relative overflow-hidden", className)}>
      {/* Optional glow */}
      {glowColor && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 gentle-animation rounded-2xl" style={{
          boxShadow: `inset 0 0 40px color-mix(in srgb, ${glowColor} 10%, transparent)`
        }} />
      )}
      <div className="relative z-10">
        {title && <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>}
        {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
