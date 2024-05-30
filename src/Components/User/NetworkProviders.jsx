import styles from "../../Styles/serviceform.module.css";
import mtn from "../../assets/mtn.svg";
import airtel from "../../assets/airtel.svg";
import glo from "../../assets/glo.svg";
import mobile from "../../assets/9mobile.svg";
import PropTypes from "prop-types";


const NetworkProviders = ({ provider, setProvider }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <p> Select a Service Provider <span className={styles.red}>*</span></p>

          {provider && (
            <p className={styles.green}>
              <i className="fa-solid fa-circle-check"></i>&nbsp;{provider}
            </p>
          )}
        </div>
        <div className={styles.providers}>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="MTN"
            id="mtn"
            checked={provider === "MTN"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="mtn">
            <img src={mtn} height={40} alt="mtn logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="Airtel"
            id="airtel"
            checked={provider === "Airtel"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="airtel">
            <img src={airtel} height={40} alt="airtel logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="GLO"
            id="glo"
            checked={provider === "GLO"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="glo">
            <img src={glo} height={40} alt="glo logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="9mobile"
            id="etisalat"
            checked={provider === "9mobile"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="etisalat">
            <img src={mobile} height={40} alt="9mobile logo" />
          </label>
        </div>
      </div>
    </>
  );
};

NetworkProviders.propTypes = {
  provider: PropTypes.string.isRequired,
  setProvider: PropTypes.func.isRequired
};



export default NetworkProviders;
