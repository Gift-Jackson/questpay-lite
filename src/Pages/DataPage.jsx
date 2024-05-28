import DataForm from "../Components/User/DataForm"
import Heading from "../Components/User/Heading"
import styles from "../Styles/serviceform.module.css";
const DataPage = () => {
  return (
      <>
          <Heading title="Data Plans" />
          <div className={styles.container}>
              <DataForm/>
      </div>
      </>
  )
}

export default DataPage