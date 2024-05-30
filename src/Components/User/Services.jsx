import { Link } from "react-router-dom";
import styles from "../../Styles/services.module.css";
import { services } from "../../constants/data";
const Services = () => {
  const quickServices = services.slice(0, 6);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <p>Services</p>

          <Link to="/services">
            <p>
              See all <i className="fa-solid fa-angle-down"></i>
            </p>
          </Link>
        </div>

        <ul className={styles.list}>
          {quickServices.map((item, index) => {
            return (
              <Link className={styles.box} to={item.path} key={index}>
                <li className={styles.card}>
                  <div className={styles.icon}>
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>{item.name}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Services;
