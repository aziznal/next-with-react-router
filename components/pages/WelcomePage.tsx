import { ReactRouterNav } from "../ReactRouterNav";
import { createSlowResource } from "../UseSuspenseData";

const resource = createSlowResource();

export function WelcomePage() {
  const data = resource.read();

  return (
    <div>
      <ReactRouterNav />

      <div>Welcome Page</div>
      <div>{data}</div>
    </div>
  );
}
