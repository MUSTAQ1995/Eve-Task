import React from 'react';
import TopBar from "../../assets/pngs/topbar-desktop.png";
import Logo from "../../assets/svgs/logo.svg"
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container} >
      <div className={styles.top_bar} >
        <img src={TopBar} alt={TopBar} />
      </div>
      <div className={styles.nav_bar} >
        <div className={styles.logo} >
          <img src={Logo} alt={Logo} />
        </div>
        <div className={styles.navbar_menu} >
          <div className={styles.menu_details}>
            <h5>THIS MONTH</h5>
            <h5>SKIN</h5>
            <h5>HAIR</h5>
            <h5>BATH</h5>
            <h5>SALE</h5>
          </div>
          <div className={styles.log_in} >
            <h5>LOG IN &gt; </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header