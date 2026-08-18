import { cn } from "@/lib/utils"

export const SectionLabel = ({ number, label }: { number: string; label: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="border-2 border-foreground bg-violet px-2 py-1 font-mono text-xs font-bold text-primary-foreground">
      {number}
    </span>
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      {label}
    </span>
  </div>
)

export const HalftoneEdge = ({
  position,
}: {
  position: "top" | "bottom" | "left" | "right";
}) => {
  const styles: React.CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    zIndex: 10,
  };

  if (position === "top") {
    Object.assign(styles, {
      top: 0,
      left: 0,
      right: 0,
      height: "40px",
      background: "linear-gradient(to bottom, var(--foreground) 0%, transparent 100%)",
      opacity: 0.06,
      maskImage: "radial-gradient(circle at 50% 0%, black 30%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(circle at 50% 0%, black 30%, transparent 70%)",
    });
  } else if (position === "bottom") {
    Object.assign(styles, {
      bottom: 0,
      left: 0,
      right: 0,
      height: "40px",
      background: "linear-gradient(to top, var(--foreground) 0%, transparent 100%)",
      opacity: 0.06,
      maskImage: "radial-gradient(circle at 50% 100%, black 30%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(circle at 50% 100%, black 30%, transparent 70%)",
    });
  } else if (position === "left") {
    Object.assign(styles, {
      top: 0,
      left: 0,
      bottom: 0,
      width: "40px",
      background: "linear-gradient(to right, var(--foreground) 0%, transparent 100%)",
      opacity: 0.06,
      maskImage: "radial-gradient(circle at 0% 50%, black 30%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(circle at 0% 50%, black 30%, transparent 70%)",
    });
  } else {
    Object.assign(styles, {
      top: 0,
      right: 0,
      bottom: 0,
      width: "40px",
      background: "linear-gradient(to left, var(--foreground) 0%, transparent 100%)",
      opacity: 0.06,
      maskImage: "radial-gradient(circle at 100% 50%, black 30%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(circle at 100% 50%, black 30%, transparent 70%)",
    });
  }

  return <div style={styles} />;
};

export const InkSplatter = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "pointer-events-none absolute h-48 w-48",
      "bg-violet",
      "[clip-path:polygon(50%_0%,54%_12%,62%_5%,64%_18%,74%_10%,72%_24%,88%_18%,80%_31%,100%_30%,86%_40%,96%_50%,82%_55%,94%_68%,77%_66%,84%_82%,69%_73%,65%_94%,55%_79%,47%_100%,42%_81%,30%_91%,32%_73%,16%_82%,24%_65%,4%_67%,18%_54%,0%_46%,16%_38%,5%_28%,22%_30%,15%_14%,32%_22%,35%_5%,45%_14%)]",
      className
    )}
  />
);

export const SpeedLines = ({ angle, color }: { angle: number; color?: string }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.03,
      background: `repeating-linear-gradient(${angle}deg, transparent, transparent 5px, ${color || "var(--foreground)"} 5px, ${color || "var(--foreground)"} 5.5px)`,
    }}
  />
);

export const ActionBurst = ({ className }: { className?: string }) => (
  <div className={cn("relative", className)}>
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
      <polygon
        points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
        fill="currentColor"
        className="text-violet"
        opacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);
