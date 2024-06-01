import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Dashboard from "./Pages/Dashboard";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import ServicePage from "./Pages/ServicePage";
import AirtimePage from "./Pages/AirtimePage";
import DataPage from "./Pages/DataPage";
import CablePage from "./Pages/CablePage";
import NotFound from "./Pages/NotFound";
import PowerPage from "./Pages/PowerPage";
import FundWalletPage from "./Pages/FundWalletPage";
import ProfilePage from "./Pages/ProfilePage";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/airtime" element={<AirtimePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/cable" element={<CablePage />} />
          <Route path="/electricity" element={<PowerPage />} />
          <Route path="/wallet" element={<FundWalletPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContextProvider>
    </>
  );
};

export default App;
