import { Link } from "react-router-dom";
import styles from "../../Styles/headermodal.module.css";
const HeaderModal = () => {
  return (
    <>
      <div className={styles.container}>
        <ul>
          <li>
            <Link to="/profile">
              <i className="fa-regular fa-user" aria-hidden="true"></i>&nbsp;
              Profile
            </Link>
          </li>
          <li>
            <Link className={styles.logout}>
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                aria-hidden="true"
              ></i>
              &nbsp; Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderModal;
