"use server";

import { sleep } from "./sleep";

export async function getDataFromServerAction() {
  await sleep(2);

  return "Server action loaded";
}
