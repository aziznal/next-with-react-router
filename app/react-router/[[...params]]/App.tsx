import { BasicLoading } from "@/components/BasicLoading";
import { Page1 } from "@/components/pages/Page1";
import { Page2 } from "@/components/pages/Page2";
import { WelcomePage } from "@/components/pages/WelcomePage";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/react-router"
          element={
            <SuspenseWrapper>
              <WelcomePage />
            </SuspenseWrapper>
          }
        />

        <Route
          path="/react-router/page-1"
          element={
            <SuspenseWrapper>
              <Page1 />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/react-router/page-2"
          element={
            <SuspenseWrapper>
              <Page2 />
            </SuspenseWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const SuspenseWrapper = (props: { children: React.ReactNode }) => {
  return <Suspense fallback={<BasicLoading />}>{props.children}</Suspense>;
};
