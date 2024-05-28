import PropTypes from 'prop-types'
import styles from "../../Styles/authform.module.css";
const FormTitle = ({title="Title", subtitle="Some cool subtitle..."}) => {
  return (
      <>
          <div className={styles.title}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
      </div>
      </>
  )
}

FormTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default FormTitle