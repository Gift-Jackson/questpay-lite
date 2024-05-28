import styles from "../../Styles/serviceform.module.css";
import mtn from "../../assets/mtn.svg";
import airtel from "../../assets/airtel.svg";
import glo from "../../assets/glo.svg";
import mobile from "../../assets/9mobile.svg";
const Providers = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <p> Select a Service Provider</p>
        </div>
        <div className={styles.providers}>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="mtn"
          />
          <label htmlFor="mtn">
            <img src={mtn} height={40} alt="mtn logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="airtel"
          />
          <label htmlFor="airtel">
            <img src={airtel} height={40} alt="airtel logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="glo"
          />
          <label htmlFor="glo">
            <img src={glo} height={40} alt="glo logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="9mobile"
          />
          <label htmlFor="9moblie">
            <img src={mobile} height={40} alt="9mobile logo" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Providers;
