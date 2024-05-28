import { Link, useNavigate } from "react-router-dom";
import styles from "../../Styles/authform.module.css";
import googleIcon from "../../assets/google_icon.svg";
import FormTitle from "./FormTitle";
const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard")
  };
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <a className={styles.brand} href="/">
            <h2>QuestPay</h2>
            <span>lite version</span>
          </a>

          <button className={styles.theme}>
            <span className="material-symbols-outlined theme-icon">
              dark_mode
            </span>
          </button>
        </header>

        <FormTitle
          title="Sign In"
          subtitle="Welcome back, let's sign you back in..."
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
            />
          </div>
          <div className={styles.grp}>
            <label htmlFor="password">
              Password <span className={styles.red}>*</span>
            </label>
            <div className={styles.relative}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="> 5 characters"
                autoComplete="off"
              />
              <div className={styles.pwdToggle}>
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              </div>
            </div>
          </div>
          <div className={styles.fpwd}>
            <Link>forgotten password?</Link>
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
