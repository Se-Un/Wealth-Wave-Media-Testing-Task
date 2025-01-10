import { createPortal } from 'react-dom';
import styles from './cookie.module.scss';
import { useState, useEffect } from 'react';

export default function ModalCookie() {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cookie');
    const initialValue = JSON.parse(saved);
    if(initialValue == null || initialValue === true) {
      setIsModal(true);
      localStorage.setItem('cookie', true)
    }
  }, [isModal]);

  const handleClose = () => {
    setIsModal(false);
    localStorage.setItem('cookie', false)
  }

  return createPortal(
    <div className={isModal ? styles.modal : styles.closed}>
      <h2 className={styles.title}>Cookie preferences</h2>
      <p className={styles.text}>Discard all In order to properly provide services, as well as for statistical and advertising purposes, the website uses information stored on users' end devices (cookies). If you have allowed cookies to be stored in your browser settings, they will be stored on your end device. You can specify the conditions for storing or accessing cookies in your browser.</p>
      <p className={styles.text}>Cookie Settings are available on every page of our website, where the user can at any time view the list of other companies that use cookies on this website and change their settings for these files. Detailed information about how we use your personal data and your rights can be found in our Privacy Policy.
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleClose}>Accept</button>
        <button className={styles.button} onClick={handleClose}>Decline</button>
      </div>
    </div>,
    document.getElementById('root')
  )
}