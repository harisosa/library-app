import * as React from "react"

import { Section } from "@/shared/components/layout"


export const RecommendationError: React.FC = () => {
    return (
        <Section id="recommendation" title="Recommendation">
            <div className="text-sm text-destructive">Failed to load recommendations.</div>
        </Section>
    )
}