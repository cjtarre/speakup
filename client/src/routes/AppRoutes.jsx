import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import PracticePage from "../pages/PracticePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import TeleprompterPage from "../pages/TeleprompterPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/teleprompter" element={<TeleprompterPage />} />
    </Routes>
  );
}

export default AppRoutes;