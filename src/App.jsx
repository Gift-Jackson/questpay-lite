import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import UserLayout from "./Pages/UserLayout";
import Dashboard from "./Components/User/Dashboard";
import ThemeContextProvider from "./Context/ThemeContextProvider";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="dashboard/" element={<UserLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
};

export default App;
