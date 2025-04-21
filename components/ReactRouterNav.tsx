import { Link } from "react-router";

export const ReactRouterNav = () => {
  return (
    <div className="text-sm flex gap-2 mb-4">
      <Link
        to={{
          pathname: "/",
        }}
      >
        Home
      </Link>

      <Link
        to={{
          pathname: "/page-1",
        }}
      >
        Page 1
      </Link>

      <Link
        to={{
          pathname: "/page-2",
        }}
      >
        Page 2
      </Link>
    </div>
  );
};
