import React from 'react';
import Logo from '../../assets/Logo.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}> 
      <div className={styles["footer-container"]}>
        <div className={styles["logo-container"]}>
          <img src={Logo} alt="Logo" className={styles.logo} /> 
          <p className={styles.title}>Recipe</p>
        </div>
        <div>
          <p className={styles.route}>Route</p> 
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Ola Allam™. All Rights Reserved.</p>
      </div>
    </div>
  );
}
