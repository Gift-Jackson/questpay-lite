import { useState } from "react";
import styles from "../../Styles/power.module.css";
import Select from "./Select";

const PowerForm = () => {
  const [meterType, setMeterType] = useState("prepaid");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [powerProvider, setPowerProvider] = useState("");
  const [errors, setErrors] = useState({ meterNumber: "", amount: "", powerProvider: "" });

  const validate = () => {
    const errors = {};

    if (!meterNumber) {
      errors.meterNumber = "Meter number is required";
    } else if (!/^\d+$/.test(meterNumber)) {
      errors.meterNumber = "Meter number must be numeric";
    }

    if (!amount) {
      errors.amount = "Amount is required";
    } else if (parseFloat(amount) <= 0) {
      errors.amount = "Amount must be a positive number";
    }

    if (!powerProvider) {
      errors.powerProvider = "Power provider is required";
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
        <div className={styles.type}>
          <input
            type="radio"
            name="meter_type"
            className={styles.chk}
            id="prepaid"
            value="prepaid"
            checked={meterType === "prepaid"}
            onChange={(e) => setMeterType(e.target.value)}
          />
          <label htmlFor="prepaid" className={styles.label}>
            Prepaid
          </label>
          <input
            type="radio"
            name="meter_type"
            id="postpaid"
            className={styles.chk}
            value="postpaid"
            checked={meterType === "postpaid"}
            onChange={(e) => setMeterType(e.target.value)}
          />
          <label htmlFor="postpaid" className={styles.label}>
            Postpaid
          </label>
        </div>

        <Select
          title="Select Power Provider"
          name="powerProvider"
          value={powerProvider}
          onChange={(e) => setPowerProvider(e.target.value)}
          options={[
            { value: "provider1", label: "Provider 1" },
            { value: "provider2", label: "Provider 2" },
          ]}
        />
        {errors.powerProvider && <p className={styles.error}>{errors.powerProvider}</p>}

        <div className={styles.wrapper}>
          <div className={styles.top}>
            <p>
              Meter Number <span className={styles.red}>*</span>
            </p>
          </div>
          <input
            type="text"
            name="meter_number"
            className={styles.input}
            placeholder="Enter meter number..."
            value={meterNumber}
            onChange={(e) => setMeterNumber(e.target.value)}
          />
          {errors.meterNumber && <p className={styles.error}>{errors.meterNumber}</p>}
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

export default PowerForm;
