import { SuccessComponent } from "@/features/checkout/components/Success";
import React, { Suspense } from "react";

const Page = async () => {

  return (
    <Suspense>
      <SuccessComponent />
    </Suspense>
  );
};

export default Page;