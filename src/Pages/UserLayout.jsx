import { Outlet } from "react-router-dom";
import Header from "../Components/User/Header";
import Panel from "../Components/User/Panel";

const UserLayout = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <main>
          <section>
            <Outlet />
          </section>
        </main>
        <Panel/>
      </div>
    </>
  );
};

export default UserLayout;
