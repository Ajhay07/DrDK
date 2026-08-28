import { Container } from "@/components/ui/Container";
import { credentials } from "@/config/credentials";

/**
 * A compact professional record — small, precise, dense type deliberately
 * contrasting with the oversized display type in the sections around it.
 * A ledger, not a badge wall or an equal-column feature grid.
 */
export function CredentialsTrust(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide" className="py-16 md:py-24">
        <div className="flex flex-col gap-2 border-b border-(--color-border) pb-6 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="text-eyebrow">05 &mdash; Professional Record</span>
          <span className="text-eyebrow">Chennai · Vijaya Hospitals</span>
        </div>

        <h2 className="text-display mt-10 max-w-2xl text-(--color-ink) md:mt-14">
          Experience shaped by surgery.
        </h2>

        <dl className="mt-14 md:mt-20">
          {credentials.map((credential, index) => (
            <div
              key={credential.label}
              className="grid grid-cols-12 items-baseline gap-4 border-b border-(--color-border) py-5"
            >
              <span aria-hidden="true" className="text-small col-span-2 tabular-nums text-(--color-ink-faint) sm:col-span-1">
                0{index + 1}
              </span>
              <dt className="text-h3 col-span-10 text-(--color-ink) sm:col-span-3">{credential.label}</dt>
              <dd className="text-body col-span-12 mt-2 text-(--color-ink-muted) sm:col-span-8 sm:mt-0">
                {credential.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
