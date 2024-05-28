import { useState } from "react";
import NetworkProviders from "./NetworkProviders";
import styles from "../../Styles/serviceform.module.css";

const AirtimeForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState("");
  const [errors, setErrors] = useState({ phoneNumber: "", amount: "", provider: "" });

  const validate = () => {
    const errors = {};
    const phonePattern = /^(070|080|081|090|091|071|091|091|091|071|091)\d{8}$|^\+234\d{10}$/;

    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!phonePattern.test(phoneNumber)) {
      errors.phoneNumber = "Phone number is not valid";
    }

    if (!amount) {
      errors.amount = "Amount is required";
    } else if (parseFloat(amount) <= 0) {
      errors.amount = "Amount must be a positive number";
    }

    if (!provider) {
      errors.provider = "Service provider is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NetworkProviders provider={provider} setProvider={setProvider} />
        {errors.provider && <p className={styles.error}>{errors.provider}</p>}

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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber}</p>}
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.amount && <p className={styles.error}>{errors.amount}</p>}
        </div>
        <button type="submit" className={styles.submit_btn}>
          Pay: &#8358; {amount}
        </button>
      </form>
    </>
  );
};

export default AirtimeForm;
