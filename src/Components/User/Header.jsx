import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContextProvider";
import HeaderModal from "./HeaderModal";
import styles from "../../Styles/header.module.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  const { toggleTheme, darkMode } = useContext(ThemeContext);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShow(false);
    }
  };
  const closeModal = () => {
    setShow(prev => !prev)
  }

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
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
            <div className={styles.indicator}>7</div>
            <i className="fa-regular fa-bell fa-shake"></i>
          </div>
          <div
            className={styles.profile}
            onClick={closeModal}
          >
            <p>Gift Jackson</p>
            <div className={styles.initial}>G</div>
          </div>
        </div>

        {show && <div ref={modalRef} className={styles.modal}><HeaderModal/></div>}
      </header>
    </>
  );
};

export default Header;
