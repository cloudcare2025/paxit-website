import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-gradient-to-r from-paxit-blue to-paxit-blue-dark text-white shadow-lg shadow-paxit-blue/25 hover:shadow-xl hover:shadow-paxit-blue/30 hover:brightness-110 active:scale-[0.98]",
  secondary:
    "border border-paxit-blue/30 text-paxit-blue hover:bg-paxit-blue hover:text-white hover:border-paxit-blue hover:shadow-lg hover:shadow-paxit-blue/20 active:scale-[0.98]",
  ghost:
    "text-slate-400 hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "px-5 py-2.5 text-[13px] gap-1.5",
  md: "px-6 py-2.5 text-[14px] gap-2",
  lg: "px-8 py-3.5 text-[15px] gap-2",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
