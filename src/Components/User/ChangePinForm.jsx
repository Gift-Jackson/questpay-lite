import styles from "../../Styles/update.module.css"
import ProfileInput from "./ProfileInput"
const ChangePinForm = () => {
    const inputType = [
        {
            label: "Old Transaction Pin",
            type: "password",
            merge: "pwd",
            placeholder:"Enter old pin"
        },
        {
            label: "New Transaction Pin",
            type: "password",
            merge: "new-pwd", 
            placeholder:"Enter new pin"
        },
       
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
              {inputType.map((input, index) => (
                  <ProfileInput key={index} {...input} />
              ))}
              <button className={styles.btn} type="submit">Update Pin</button>
          </form>
      </>
  )
}

export default ChangePinForm