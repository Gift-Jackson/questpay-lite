import PropTypes from "prop-types";
import styles from "../../Styles/cable.module.css";
import dstv from "../../assets/DSTV.svg";
import gotv from "../../assets/GOtv.svg";
import startimes from "../../assets/startimes.png";
import startimes_on from "../../assets/startimes-on.png";

const CableProviders = ({ provider, setProvider }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <p>
            Select a Service Provider <span className={styles.red}>*</span>
          </p>
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
            value="DSTV"
            id="dstv"
            checked={provider === "DSTV"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="dstv">
            <img src={dstv} height={40} alt="dstv logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="GOTV"
            id="gotv"
            checked={provider === "GOTV"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="gotv">
            <img src={gotv} height={40} alt="gotv logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="Startimes"
            id="startimes"
            checked={provider === "Startimes"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="startimes">
            <img src={startimes} height={40} alt="startimes logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="Startimes On"
            id="startimes_on"
            checked={provider === "Startimes On"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="startimes_on">
            <img src={startimes_on} height={40} alt="startimes_on logo" />
          </label>
        </div>
      </div>
    </>
  );
};

CableProviders.propTypes = {
  provider: PropTypes.string.isRequired,
  setProvider: PropTypes.func.isRequired,
};

export default CableProviders;
