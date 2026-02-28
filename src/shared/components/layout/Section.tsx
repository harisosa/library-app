import { PropsWithChildren } from "react";
import { Container } from "@/shared/components/layout/Container";
import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id: string;
  title?: string;
  className?: string;
  contentClassName?: string;
}>;

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className,
  contentClassName,
}) => {
  return (
    <section
      id={id}
      className={
        className}
    >
      <Container>
        <div className={cn(
          "flex flex-col gap-6 lg:gap-10"
          ,contentClassName
        )}>
          {title && (<h2 className="text-display-xs lg:text-display-lg font-bold text-neutral-950">{title}</h2>)}
          {children}
          </div>
      </Container>
    </section>
  );
};

