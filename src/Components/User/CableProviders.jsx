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
        </div>
        <div className={styles.providers}>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="dstv"
            id="dstv"
            checked={provider === "dstv"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="dstv">
            <img src={dstv} height={40} alt="dstv logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="gotv"
            id="gotv"
            checked={provider === "gotv"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="gotv">
            <img src={gotv} height={40} alt="gotv logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="startimes"
            id="startimes"
            checked={provider === "startimes"}
            onChange={(e) => setProvider(e.target.value)}
          />
          <label htmlFor="startimes">
            <img src={startimes} height={40} alt="startimes logo" />
          </label>
          <input
            type="radio"
            name="provider"
            className={styles.chk}
            value="startimes_on"
            id="startimes_on"
            checked={provider === "startimes_on"}
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
