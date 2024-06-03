import { Link } from "react-router-dom";
import styles from "../../Styles/settings.module.css";
const SettingsOption = () => {
  const profileSettings = [
    {
      label: "Update Profile",
      path: "/update-profile",
    },
    {
      label: "Update Password",
      path: "/update-password",
    },
    {
      label: "Change PIN",
      path: "/change-pin",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Account Settings</p>
        <ul className={styles.lists}>
          {profileSettings.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className={styles.item}>
                <p>{item.label}</p>
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.btns}>
          <button className={styles.btn_1}>
            <i
              className="fa-solid fa-arrow-right-from-bracket"
              aria-hidden="true"
            ></i>
            &nbsp; Logout
          </button>
          <button className={styles.btn_2}>
            <i className="fa-solid fa-trash" aria-hidden="true"></i>
            &nbsp; Delete Account
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsOption;
