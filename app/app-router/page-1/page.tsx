import { sleep } from "@/app/lib/sleep";
import { NextNav } from "@/components/NextNav";

export const dynamic = "force-dynamic";

export default async function Page() {
  await sleep(3);

  return (
    <div>
      <NextNav />

      <span>Page 1</span>
    </div>
  );
}
