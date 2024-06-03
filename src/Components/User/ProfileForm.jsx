import styles from "../../Styles/update.module.css"
import ProfileInput from "./ProfileInput"
const ProfileForm = () => {
    const inputType = [
        {
            label: "Name",
            type: "text",
            merge: "name",
            value: "Gift Jackson",
            placeholder:"Initial name, then edit to new value"
        },
        {
            label: "Phone",
            type: "number",
            merge: "phone", 
            value: "08137411338",
            placeholder:"Initial phone number, then edit to new value"
        },
        {
            label: "E-mail",
            type: "email",
            merge: "email", 
            value: "giftjacksun@gmail.com",
            placeholder:"Initial e-mail, then edit to new value"
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
              <button className={styles.btn} type="submit">Update Profile</button>
          </form>
      </>
  )
}

export default ProfileForm