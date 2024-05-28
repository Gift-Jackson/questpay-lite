import Providers from "./Providers";
import styles from '../../Styles/serviceform.module.css'
const AirtimeForm = () => {
  return (
    <>
      <form>
        <Providers />
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <p>
              Phone Number <span className={styles.red}>*</span>
            </p>
          </div>
          <input
            type="tel"
            name="tel"
            className={styles.input}
            placeholder="Enter recipient phone number..."
          />
          <br />
          <div className={styles.btn}>
            <i className="fa-regular fa-user"></i> &nbsp; Use my number
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.top}>
            <p>
              Enter amount <span className={styles.red}>*</span>
            </p>
            <p>
              Balance: <b>&#8358; 0.00</b>
            </p>
          </div>
          <input
            type="number"
            name="amount"
            className={styles.input}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className={styles.submit_btn}>
          Pay: &#8358; 0.00
        </button>
      </form>
    </>
  );
};

export default AirtimeForm;
