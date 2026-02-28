import { PropsWithChildren } from "react";
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
      className={
        className}
    >
      <Container>
        <div className={contentClassName}>{children}</div>
      </Container>
    </section>
  );
};

