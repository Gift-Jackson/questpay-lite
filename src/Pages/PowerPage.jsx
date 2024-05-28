import Heading from "../Components/User/Heading";
import PowerForm from "../Components/User/PowerForm";
import styles from '../Styles/power.module.css'
const PowerPage = () => {
  return (
    <>
          <Heading title="Electricity" />
          <div className={styles.container}>
              <PowerForm/>
          </div>
    </>
  );
};

export default PowerPage;
