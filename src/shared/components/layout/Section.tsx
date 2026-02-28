import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/shared/components/layout/Container";

type SectionProps = PropsWithChildren<{
  className?: string;
  contentClassName?: string;
}>;

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  contentClassName,
}) => {
  return (
    <section
      className={cn(
        `
        pt-6
        sm:pt-6
        md:pt-8
        lg:pt-12
        xl:pt-12
        2xl:pt-16
        `,
        className
      )}
    >
      <Container>
        <div className={contentClassName}>{children}</div>
      </Container>
    </section>
  );
};

