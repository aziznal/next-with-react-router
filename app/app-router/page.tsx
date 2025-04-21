import { NextNav } from "@/components/NextNav";
import { sleep } from "../lib/sleep";

export const dynamic = "force-dynamic";

export default async function WelcomePage() {
  await sleep(3);

  return (
    <div>
      <NextNav />

      <span>Welcome Page</span>
    </div>
  );
}
