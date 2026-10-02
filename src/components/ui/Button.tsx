import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const baseStyles =
  "inline-flex items-center justify-center font-[family-name:var(--font-inter)] transition-all duration-300 no-underline relative overflow-hidden";

const variantStyles = {
  primary:
    "bg-[#1F2937] text-white hover:text-[#D4AF37] border border-[#374151] hover:border-[#D4AF37]",
  secondary:
    "bg-[#FEFDFB] text-[#374151] hover:text-[#DC2626] border border-[#D1D5DB] hover:border-[#D4AF37]",
  outline:
    "bg-transparent text-[#DC2626] border border-[#DC2626] hover:border-[#D4AF37] hover:text-[#D4AF37]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external = false,
  onClick,
}: ButtonProps) {
  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    "group beam-btn",
    className
  );

  const content = (
    <>
      {/* Beam effect layer */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span
          className="absolute inset-0 animate-[spin_3s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, transparent 30%, #D4AF37 45%, #DC2626 55%, transparent 70%, transparent 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      </span>
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
