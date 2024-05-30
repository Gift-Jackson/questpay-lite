import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import styles from "../../Styles/heading.module.css";
const Heading = ({title="PageTitle"}) => {
  return (
    <header className={styles.heading}>
      <Link to={-1}>
        <div className={styles.btn}>
          <span className="material-symbols-outlined theme-icon">
            arrow_back
          </span>
        </div>
      </Link>
          <h2>{title}</h2>
    </header>
  );
};

Heading.propTypes = {
    title: PropTypes.string
}

export default Heading;
