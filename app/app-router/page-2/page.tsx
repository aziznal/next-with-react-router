"use client";

import { NextNav } from "@/components/NextNav";
import { createSlowResource } from "@/components/UseSuspenseData";

const resource = createSlowResource();

export const dynamic = "force-dynamic";

export default function Page() {
  const data = resource.read();

  return (
    <div>
      <NextNav />

      <div>Page 2</div>
      <div>{data}</div>
    </div>
  );
}
