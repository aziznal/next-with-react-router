import Link from "next/link";

export const NextNav = () => {
  return (
    <div className="text-sm flex gap-2 mb-4">
      <Link href="/app-router">Home</Link>

      <Link href="/app-router/page-1">Page 1</Link>

      <Link href="/app-router/page-2">Page 2</Link>
    </div>
  );
};
