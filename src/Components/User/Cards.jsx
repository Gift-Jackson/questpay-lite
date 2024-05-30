import PropTypes from "prop-types";
import styles from "../../Styles/cards.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Cards = ({ toggleBalance, showBalance }) => {
  const [closeBox, setCloseBox] = useState(false);
  const navigate = useNavigate()
  const goToFundWalletPage = () => {
    navigate("/fund_wallet")
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.top}>
            <p>Total Balance</p>

            <div className={styles.close} onClick={toggleBalance}>
              {showBalance ? (
                <span className="material-symbols-outlined">visibility</span>
              ) : (
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              )}
            </div>
          </div>

          <div>
            {showBalance ? (
              <h2>
                0.00 <span className={styles.currency}>NGN</span>
              </h2>
            ) : (
              <h2>*******</h2>
            )}
          </div>
          <div className={styles.btns}>
            <button className={styles.btn_1} onClick={goToFundWalletPage}>
              Fund Wallet &nbsp; <i className="fa-regular fa-plus"></i>
            </button>
            <button className={styles.btn_2}>
              Withdraw &nbsp; <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>

        {!closeBox && (
          <div className={styles.card}>
            <div className={styles.top}>
              <p>Referral(s)</p>

              <div
                className={styles.close}
                onClick={() => setCloseBox((prev) => !prev)}
              >
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <div>
              <h2>0</h2>
            </div>
            <div className={styles.btns}>
              <button className={styles.btn_2}>
                View Referral &nbsp;
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <button className={styles.btn_2}>
                Copy link &nbsp; <i className="fa-regular fa-clone"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Cards.propTypes = {
  toggleBalance: PropTypes.func,
  showBalance: PropTypes.bool,
};

export default Cards;
