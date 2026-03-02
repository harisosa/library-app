import { Button } from "@/components/ui/button";
import React from "react";

export const ReviewError: React.FC<{error : Error, refetch : () => void}> = ({error, refetch}) => {
    return(
              <div className="rounded-xl border bg-background p-4">
                <div className="text-sm font-medium">Gagal memuat review</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {error instanceof Error ? error.message : "Unknown error"}
                </div>
                <div className="mt-3">
                  <Button variant="outline" onClick={() => refetch()}>
                    Coba lagi
                  </Button>
                </div>
              </div>
    )
}