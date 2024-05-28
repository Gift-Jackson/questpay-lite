import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../Styles/authform.module.css";
import googleIcon from "../../assets/google_icon.svg";
import FormTitle from "./FormTitle";
import { ThemeContext } from "../../Context/ThemeContextProvider";

const Signup = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const validate = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(070|080|081|090|091|071|091|091|091|071|091)\d{8}$|^\+234\d{10}$/; // E.164 international phone number format

    if (!name) {
      errors.name = "Full name is required";
    }

    if (!email) {
      errors.email = "E-mail is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "E-mail is not valid";
    }

    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!phonePattern.test(phone)) {
      errors.phone = "Phone number is not valid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <a className={styles.brand} href="/">
            <h2>QuestPay</h2>
            <span>lite version</span>
          </a>

          <button className={styles.theme} onClick={toggleTheme}>
            {darkMode ? (
              <span className="material-symbols-outlined theme-icon">
                light_mode
              </span>
            ) : (
              <span className="material-symbols-outlined theme-icon">
                dark_mode
              </span>
            )}
          </button>
        </header>

        <FormTitle
          title="Sign Up"
          subtitle="Create an account with QuestPay..."
        />

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.grp}>
            <label htmlFor="name">
              Fullname <span className={styles.red}>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name..."
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.grp}>
            <label htmlFor="email">
              E-mail Address <span className={styles.red}>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your e-mail address..."
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.grp}>
            <label htmlFor="tel">
              Phone Number <span className={styles.red}>*</span>
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Enter your phone number"
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>
          <div className={styles.grp}>
            <label htmlFor="password">
              Password <span className={styles.red}>*</span>
            </label>
            <div className={styles.relative}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="> 5 characters"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className={styles.pwdToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility" : "visibility_off"}
                </span>
              </div>
            </div>
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>

          <button className={styles.btn} type="submit">
            Submit
          </button>
        </form>

        <p className={styles.or}>- Or -</p>

        <button className={styles.btn_2}>
          <img src={googleIcon} width={35} alt="Google Icon" />
          <span>Sign Up with Google</span>
        </button>

        <p className={styles.info}>
          Already have an account? &nbsp; <Link to="/">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
