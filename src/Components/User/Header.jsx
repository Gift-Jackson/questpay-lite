import { useContext } from "react";
import styles from "../../Styles/header.module.css";
import { ThemeContext } from "../../Context/ThemeContextProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);
  return (
      <header className={styles.header}>
        <Link className={styles.brand} to="/dashboard">
          <h2>QuestPay</h2>
          {/* <span>lite version</span> */}
        </Link>
        <div className={styles.right}>
          <button onClick={toggleTheme} className={styles.theme}>
            {darkMode ? (
              <span className="material-symbols-outlined theme-icon">
                light_mode
              </span>
            ) : (
              <span className="material-symbols-outlined theme-icon">
                dark_mode
              </span>
            )}
          </button>
          <div className={styles.bell}>
            <div className={styles.indicator}>0</div>
            <i className="fa-regular fa-bell fa-shake"></i>
          </div>
          <div className={styles.profile}>
            <p>Gift Jackson</p>
            <div className={styles.initial}>G</div>
          </div>
        </div>
      </header>
  );
};

export default Header;
