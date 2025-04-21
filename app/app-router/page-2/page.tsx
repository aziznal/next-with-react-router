import { sleep } from "@/app/lib/sleep";
import { NextNav } from "@/components/NextNav";

export const dynamic = "force-dynamic";

export default async function Page() {
  await sleep(3);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <NextNav />

      <span>Page 2</span>
    </div>
  );
}
