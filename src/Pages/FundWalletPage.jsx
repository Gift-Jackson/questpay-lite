import { useState } from "react";
import Heading from "../Components/User/Heading";
import styles from "../Styles/fund.module.css";
const FundWalletPage = () => {
  const [isAcctNum] = useState(false);
  return (
    <>
      <Heading title="Fund Wallet" />
      <div className={styles.container}>
        {!isAcctNum ? (
          <div className={styles.wrapper}>
            <div className={styles.top}>New user?</div>
            <button className={styles.btn}>Generate Account Number</button>
          </div>
        ) : (
          <>
            <div className={styles.wrapper}>
              <div className={styles.top}>Monie Point</div>
              <div className={styles.acct}>
                <input type="text" value={8137411338} readOnly />
                <button>
                  Copy &nbsp; <i className="fa-regular fa-clone"></i>
                </button>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.top}>Monie Point</div>
              <div className={styles.acct}>
                <input type="text" value={8137411338} readOnly />
                <button>
                  Copy &nbsp; <i className="fa-regular fa-clone"></i>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FundWalletPage;
