import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PageItem = number | "ellipsis";

const buildPageItems = (page: number, totalPages: number): PageItem[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const items: PageItem[] = [1];

  const left = Math.max(2, page - 1);
  const right = Math.min(totalPages - 1, page + 1);

  if (left > 2) items.push("ellipsis");

  for (let i = left; i <= right; i++) items.push(i);

  if (right < totalPages - 1) items.push("ellipsis");

  items.push(totalPages);
  return items;
};

type Props = {
  page: number; 
  totalPages: number;
  onPageChange: (nextPage: number) => void;
  className?: string;
};

export const PaginationBar: React.FC<Props> = ({
  page,
  totalPages,
  onPageChange,
  className,
}) => {
  const items = buildPageItems(page, totalPages);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={!canPrev}
            className={!canPrev ? "pointer-events-none opacity-50" : undefined}
            onClick={(e) => {
              e.preventDefault();
              if (canPrev) onPageChange(page - 1);
            }}
          />
        </PaginationItem>

        {items.map((it, idx) =>
          it === "ellipsis" ? (
            <PaginationItem key={`e-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={it}>
              <PaginationLink
                href="#"
                isActive={it === page}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(it);
                }}
              >
                {it}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={!canNext}
            className={!canNext ? "pointer-events-none opacity-50" : undefined}
            onClick={(e) => {
              e.preventDefault();
              if (canNext) onPageChange(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};