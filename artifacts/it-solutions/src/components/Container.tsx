import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

/**
 * Container component: Provides consistent max-width centering + responsive padding
 *
 * Usage:
 * <Container>
 *   <h1>Centered content</h1>
 * </Container>
 *
 * Or with section:
 * <Container as="section" className="py-20 bg-background">
 *   <h1>Centered section</h1>
 * </Container>
 */
export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}
