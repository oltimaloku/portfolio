import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
};

export default function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div className={clsx("mx-auto px-6", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
