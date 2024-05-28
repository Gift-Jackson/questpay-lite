import { useState } from "react";
import CableProviders from "./CableProviders";
import Select from "./Select";
import styles from "../../Styles/cable.module.css";

const CableForm = () => {
  const [smartcard, setSmartcard] = useState("");
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState("");
  const [cablePlan, setCablePlan] = useState("");
  const [errors, setErrors] = useState({
    smartcard: "",
    amount: "",
    provider: "",
    cablePlan: "",
  });

  const validate = () => {
    const errors = {};

    if (!smartcard) {
      errors.smartcard = "Smartcard/Decoder number is required";
    } else if (!/^\d+$/.test(smartcard)) {
      errors.smartcard = "Smartcard/Decoder number must be numeric";
    }

    if (!amount) {
      errors.amount = "Amount is required";
    } else if (parseFloat(amount) <= 0) {
      errors.amount = "Amount must be a positive number";
    }

    if (!provider) {
      errors.provider = "Service provider is required";
    }

    if (!cablePlan) {
      errors.cablePlan = "Cable plan is required";
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
        <CableProviders provider={provider} setProvider={setProvider} />
        {errors.provider && <p className={styles.error}>{errors.provider}</p>}

        <Select
          title="Select Cable Plan"
          name="cablePlan"
          value={cablePlan}
          onChange={(e) => setCablePlan(e.target.value)}
        />
        {errors.cablePlan && <p className={styles.error}>{errors.cablePlan}</p>}

        <div className={styles.wrapper}>
          <div className={styles.top}>
            <p>
              Smartcard/Decoder Number <span className={styles.red}>*</span>
            </p>
          </div>
          <input
            type="text"
            name="smartcard"
            className={styles.input}
            placeholder="Enter smartcard/ decoder number..."
            value={smartcard}
            onChange={(e) => setSmartcard(e.target.value)}
          />
          {errors.smartcard && (
            <p className={styles.error}>{errors.smartcard}</p>
          )}
        </div>

        <div className={styles.wrapper}>
          <div className={styles.top}>
            <p>
              Amount <span className={styles.red}>*</span>
            </p>
            <p>
              Balance: <b>&#8358; 0.00</b>
            </p>
          </div>
          <input
            type="number"
            name="amount"
            className={styles.input}
            placeholder="0.00"
            readOnly
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

export default CableForm;
