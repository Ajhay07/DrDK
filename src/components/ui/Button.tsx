import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "text";

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonAsButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  href: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseClass =
  "text-button inline-flex items-center justify-center gap-2 rounded-(--radius-sm) px-6 py-3 transition-colors duration-(--duration-fast) ease-(--ease-editorial) disabled:opacity-40 disabled:pointer-events-none";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-(--color-accent) text-(--color-accent-ink) hover:bg-(--color-accent-strong) active:bg-(--color-accent-strong)",
  secondary:
    "border border-(--color-border-strong) text-(--color-ink) hover:border-(--color-accent) hover:text-(--color-accent) active:bg-(--color-bg-secondary)",
  text: "px-0 py-0 text-(--color-ink) underline underline-offset-4 decoration-(--color-border-strong) hover:decoration-(--color-accent) hover:text-(--color-accent)",
};

/**
 * The three CTA weights the design system allows: primary (filled), secondary
 * (outlined), text (minimal). No border-radius above --radius-sm, no shadows,
 * no bounce — hover/active only shift color. See DESIGN_SYSTEM.md "Button System".
 */
export function Button(props: ButtonProps): React.ReactElement {
  const { children, variant = "primary", className } = props;
  const classes = cn(baseClass, variantClass[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} onClick={props.onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButtonProps;
  void _href;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
