import { Page1 } from "@/components/pages/Page1";
import { Page2 } from "@/components/pages/Page2";
import { WelcomePage } from "@/components/pages/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-router" element={<WelcomePage />} />
        <Route path="/react-router/page-1" element={<Page1 />} />
        <Route path="/react-router/page-2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
