import styles from "../../Styles/profile.module.css"
import avatar from "../../assets/avatar-1.avif"
const ProfileCard = () => {
  return (
      <>
          <div className={styles.profile}>
              <div className={styles.content}>
                  <img src={ avatar} height={80} alt="Profile Image" />
                  <div className={styles.body}>
                      <h3>Gift Jackson</h3>
                      <p>08137411338</p>
                  </div>
              </div>

              <input type="file" name="" id="image" />
              <label htmlFor="image" className={styles.btn}>
                      <i className="fa-solid fa-camera"></i>&nbsp; Upload Photo
              </label>
          </div>
      </>
  )
}

export default ProfileCard