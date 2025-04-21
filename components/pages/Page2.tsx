import { ReactRouterNav } from "../ReactRouterNav";
import { createSlowResource } from "../UseSuspenseData";

const resource = createSlowResource();

export function Page2() {
  const data = resource.read();

  return (
    <div>
      <ReactRouterNav />

      <div>Page 2</div>
      <div>{data}</div>
    </div>
  );
}
