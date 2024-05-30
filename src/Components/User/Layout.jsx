import PropTypes from "prop-types";
import Panel from "./Panel";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <main>
          <section>{children}</section>
        </main>
        <Panel />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
