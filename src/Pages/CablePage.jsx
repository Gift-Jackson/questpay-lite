import CableForm from "../Components/User/CableForm"
import Heading from "../Components/User/Heading"
import styles from '../Styles/cable.module.css'
const CablePage = () => {
    document.title = "QuestPay | Cable Subscription"
  return (
      <>
          <Heading title="Cable TV" />
          <div className={styles.container}>
              <CableForm/>
          </div>
      </>
  )
}

export default CablePage