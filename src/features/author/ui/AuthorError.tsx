
import { Button } from '@/components/ui/button'
import { Section } from '@/shared/components/layout'

type AuthorsErrorProps = {
  onRetry?: () => void
}

export const AuthorsError = ({ onRetry }: AuthorsErrorProps) => {
  return (
    <Section id="popular-author-error" title="Popular Authors">
      <div className="rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <div className="text-sm font-medium text-neutral-900">
          Failed to load authors
        </div>
        <div className="mt-1 text-sm text-neutral-600">
          Please try again.
        </div>

        {onRetry ? (
          <div className="mt-4">
            <Button type="button" onClick={onRetry}>
              Retry
            </Button>
          </div>
        ) : null}
      </div>
    </Section>
  )
}