import { cn } from "@/lib/utils/cn";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/** Small uppercase label used above a heading to add editorial metadata/context. */
export function Eyebrow({ children, className }: EyebrowProps): React.ReactElement {
  return <p className={cn("text-eyebrow", className)}>{children}</p>;
}
