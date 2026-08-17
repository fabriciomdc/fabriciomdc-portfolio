import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xs border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-violet text-primary-foreground border-foreground shadow-[3px_3px_0_0_var(--foreground)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--foreground)]",
        outline:
          "border-foreground bg-background text-foreground hover:bg-foreground hover:text-background shadow-[3px_3px_0_0_var(--foreground)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--foreground)]",
        secondary:
          "bg-secondary text-secondary-foreground border-foreground/20 hover:bg-accent shadow-[3px_3px_0_0_var(--foreground)]/30 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--foreground)]/30",
        ghost: "hover:bg-foreground/5 hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive border-destructive/30 hover:bg-destructive/20 shadow-[3px_3px_0_0_var(--destructive)]/20 hover:translate-x-[2px] hover:translate-y-[2px]",
        link: "text-violet underline-offset-4 hover:underline",
        technical:
          "bg-secondary text-muted-foreground border-border hover:border-blue hover:text-blue",
        double:
          "bg-background text-foreground border-[3px] border-foreground shadow-[inset_0_0_0_2px_var(--background),inset_0_0_0_4px_var(--foreground),3px_3px_0_0_var(--foreground)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[inset_0_0_0_2px_var(--background),inset_0_0_0_4px_var(--foreground),1px_1px_0_0_var(--foreground)]",
      },
      size: {
        default: "h-10 gap-2 px-4 py-2 text-sm",
        xs: "h-6 gap-1 rounded-xs px-2 text-xs",
        sm: "h-8 gap-1.5 rounded-xs px-3 text-xs",
        lg: "h-12 gap-2.5 px-6 text-base",
        icon: "size-10",
        "icon-xs": "size-6 rounded-xs",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
