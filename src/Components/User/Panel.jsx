import { NavLink } from "react-router-dom";
import { sideNav } from "../../constants/data";
import styles from "../../Styles/panel.module.css";
const Panel = () => {
  return (
    <>
      <nav id="panel" className={styles.nav}>
        <ul>
          {sideNav.map((item, index) => (
            <li key={index}>
              <NavLink className="nav-link" to={item.path}>
                <div className={styles.icon}>
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                </div>
                <div className={styles.text}>{item.name}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Panel;
