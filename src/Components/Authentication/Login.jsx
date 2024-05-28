import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../Styles/authform.module.css";
import googleIcon from "../../assets/google_icon.svg";
import FormTitle from "./FormTitle";
import { ThemeContext } from "../../Context/ThemeContextProvider";

const Login = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "E-mail is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "E-mail is not valid";
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
          title="Sign In"
          subtitle="Welcome back, let's sign you in..."
        />

        <form onSubmit={handleSubmit} className={styles.form}>
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
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>
          <div className={styles.fpwd}>
            <Link to="/forgot-password">Forgotten password?</Link>
          </div>

          <button className={styles.btn} type="submit">
            Submit
          </button>
        </form>

        <p className={styles.or}>- Or -</p>

        <button className={styles.btn_2}>
          <img src={googleIcon} width={35} alt="Google Icon" />
          <span>Continue with Google</span>
        </button>

        <p className={styles.info}>
          Create new account? &nbsp; <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
