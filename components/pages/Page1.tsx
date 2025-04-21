import { ReactRouterNav } from "../ReactRouterNav";
import { createSlowResource } from "../UseSuspenseData";

const resource = createSlowResource();

export function Page1() {
  const data = resource.read();

  return (
    <div>
      <ReactRouterNav />

      <div>Page 1</div>
      <div>{data}</div>
    </div>
  );
}

