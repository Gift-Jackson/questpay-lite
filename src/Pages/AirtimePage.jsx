import AirtimeForm from "../Components/User/AirtimeForm";
import Heading from "../Components/User/Heading";
import styles from "../Styles/serviceform.module.css";

const AirtimePage = () => {
  document.title = "Airtime | QuestPay"
  return (
    <>
      <Heading title="Airtime" />
      <div className={styles.container}>
        <AirtimeForm/>
      </div>
    </>
  );
};

export default AirtimePage;
