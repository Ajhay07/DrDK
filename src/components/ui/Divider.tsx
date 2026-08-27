import { cn } from "@/lib/utils/cn";

interface DividerProps {
  className?: string;
}

/** Hairline rule for editorial separation. Prefer this over shadows/cards. */
export function Divider({ className }: DividerProps): React.ReactElement {
  return <hr className={cn("border-t border-(--color-border)", className)} />;
}
