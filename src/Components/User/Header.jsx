import { useContext } from "react";
import styles from "../../Styles/header.module.css";
import { ThemeContext } from "../../Context/ThemeContextProvider";

const Header = () => {
    const {toggleTheme, darkMode} = useContext(ThemeContext)
  return (
    <main>
        <header className={styles.header}>
            <a className={styles.brand} href="/">
              <h2>QuestPay</h2>
              {/* <span>lite version</span> */}
            </a>
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
                <div className={styles.indicator}>12</div>
                <i className="fa-regular fa-bell fa-shake"></i>
              </div>
              <div className={styles.profile}>
                <p>Gift Jackson</p>
                <div className={styles.initial}>G</div>
              </div>
            </div>
        </header>
    </main>
  );
};

export default Header;
