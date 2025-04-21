import { getDataFromServerAction } from "@/lib/example-server-actions";
import { useState, useEffect } from "react";
import { ReactRouterNav } from "../ReactRouterNav";
import { createSlowResource } from "../UseSuspenseData";

const resource = createSlowResource();

export function Page1() {
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
      <ReactRouterNav />

      <div>Page 1</div>
      <div>{data}</div>
      <div>{serverActionData}</div>
    </div>
  );
}
