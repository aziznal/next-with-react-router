"use client";

import { NextNav } from "@/components/NextNav";
import { createSlowResource } from "@/components/UseSuspenseData";
import { getDataFromServerAction } from "@/lib/example-server-actions";
import { useEffect, useState } from "react";

const resource = createSlowResource();

export const dynamic = "force-dynamic";

export default function Page() {
  const data = resource.read();

  const [serverActionData, setServerActionData] = useState<any>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const fetched = await getDataFromServerAction();
      setServerActionData(fetched);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NextNav />

      <div>Page 1</div>
      <div>{data}</div>
      <div>{serverActionData}</div>
    </div>
  );
}
