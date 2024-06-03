import styles from "../../Styles/update.module.css"
import ProfileInput from "./ProfileInput"
const PasswordForm = () => {
    const inputType = [
        {
            label: "Old Password",
            type: "password",
            merge: "pwd",
            placeholder:"Enter old password"
        },
        {
            label: "New Password",
            type: "password",
            merge: "new-pwd", 
            placeholder:"Enter new password"
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
              <button className={styles.btn} type="submit">Update Password</button>
          </form>
      </>
  )
}

export default PasswordForm