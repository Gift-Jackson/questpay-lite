import PropTypes from "prop-types";
import styles from "../../Styles/select.module.css";

const Select = ({ title, name, value, onChange, options = [] }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <p>
            {title} <span className={styles.red}>*</span>
          </p>
        </div>
        <select
          name={name}
          className={styles.select}
          value={value}
          onChange={onChange}
        >
          <option value="">- Select type -</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

Select.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

Select.defaultProps = {
  title: "Select title",
  options: [],
};

export default Select;
