import { createPortal } from 'react-dom';
import styles from './modalAge.module.scss';
import { useState, useEffect } from 'react';

export default function ModalAge() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('modal');
    const initialValue = JSON.parse(saved);
    if(initialValue == null || initialValue === true) {
      setIsOpen(true);
      localStorage.setItem('modal', true)
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('modal', false)
  }
  
  return createPortal(
   <div className={isOpen ? styles.modalAge : styles.close}  >
    <h2 className={styles.title}>You are 18 years old?</h2>
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClose}>Yes</button>
      <button className={styles.button} onClick={handleClose}>No</button>
    </div>
    
   </div>,
    document.getElementById('root')
  )
}