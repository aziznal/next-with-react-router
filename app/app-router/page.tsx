import { NextNav } from "@/components/NextNav";
import { sleep } from "../lib/sleep";

export const dynamic = "force-dynamic";

export default async function WelcomePage() {
  await sleep(3);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <NextNav />

      <span>Welcome Page</span>
    </div>
  );
}
