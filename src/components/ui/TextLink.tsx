import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

/**
 * Inline/standalone text link with an understated underline treatment —
 * no pill, no background hover state. Use for in-copy links and minimal
 * "text CTA" actions (pairs with the Button "text" variant for buttons).
 */
export function TextLink({
  href,
  children,
  className,
  external = false,
}: TextLinkProps): React.ReactElement {
  const sharedClassName = cn(
    "underline underline-offset-4 decoration-(--color-border-strong) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:decoration-(--color-accent) hover:text-(--color-accent)",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={sharedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {children}
    </Link>
  );
}
