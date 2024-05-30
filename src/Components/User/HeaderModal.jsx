import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../../Styles/headermodal.module.css'
const HeaderModal = () => {
    const [show, setShow] = useState(false);
  return (
      <>
          <div className={styles.container}>
              <ul>
                  <li>
                      <Link>
                          <i className="fa-regular fa-user" aria-hidden="true"></i> Profile
                      </Link>
                  </li>
                  <li>
                      <Link className={styles.logout}>
                          <i className="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i> Logout
                      </Link>
                  </li>
              </ul>
      </div>
      </>
  )
}

export default HeaderModal