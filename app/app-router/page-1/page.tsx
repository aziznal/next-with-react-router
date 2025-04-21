"use client";

import { NextNav } from "@/components/NextNav";
import { createSlowResource } from "@/components/UseSuspenseData";

const resource = createSlowResource();

export default function Page() {
  const data = resource.read();

  return (
    <div>
      <NextNav />

      <div>Page 1</div>
      <div>{data}</div>
    </div>
  );
}
