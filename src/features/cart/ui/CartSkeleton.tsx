import { Skeleton } from "@/components/ui/skeleton";

export const CartSkeleton: React.FC = () => {
  return (
    <div className="flex gap-10">

      <div className="flex-1 space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4 py-6 border-b">
            <Skeleton className="h-23 w-18 rounded-md" />

            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
      </div>

      <div className="w-90 space-y-4 border rounded-xl p-6">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  );
};