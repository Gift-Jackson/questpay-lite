import styles from "../../Styles/update.module.css";
import PropTypes from "prop-types";
const ProfileInput = ({ label, type,value, merge, placeholder }) => {
  return (
    <>
      <div className={styles.grp}>
        <label htmlFor={merge}>{label} <span className={styles.red}>*</span> </label>
        <input type={type} id={merge} value={value} placeholder={placeholder} autoComplete="off" />
      </div>
    </>
  );
};

ProfileInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  merge: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default ProfileInput;
