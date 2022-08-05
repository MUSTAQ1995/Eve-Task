import React from 'react';
import Box from "../../assets/pngs/box.png";
import styles from "./SignUp.module.scss";

function SignUp() {
  return (
    <div className={styles.container} >
        <div className={styles.description} >
            <span>Look good without leaving your house.</span>
            <p>Upbox is the easiest way to look our best without having to hunt for the perfect makeup combination.
                Our stylists curate the latest trends and send them directly to your door every month.
            </p>
            <div className={styles.sign_up}>
                <p>SIGN UP {">"}</p>
            </div>
        </div>
        <div className={styles.product} >
          <img src={Box} alt="Box"  className={styles.box} />
        </div>
    </div>
  );
};

export default SignUp;