import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import UserLayout from "./Pages/UserLayout";
import Dashboard from "./Components/User/Dashboard";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import ServicePage from "./Pages/ServicePage";
import AirtimePage from "./Pages/AirtimePage";
import DataPage from "./Pages/DataPage";
import CablePage from "./Pages/CablePage";
import NotFound from "./Pages/NotFound";
import PowerPage from "./Pages/PowerPage";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="dashboard/" element={<UserLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="services" element={<ServicePage />} />
            <Route path="airtime" element={<AirtimePage />} />
            <Route path="data" element={<DataPage />} />
            <Route path="cable" element={<CablePage />} />
            <Route path="electricity" element={<PowerPage />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
          
        </Routes>
      </ThemeContextProvider>
    </>
  );
};

export default App;
