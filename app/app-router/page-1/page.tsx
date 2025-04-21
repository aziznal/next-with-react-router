import { NextNav } from "@/components/NextNav";
import { sleep } from "@/lib/sleep";

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
