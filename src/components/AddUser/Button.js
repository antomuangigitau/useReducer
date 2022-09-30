import React from 'react';
import styles from './Button.module.css';
const Button = ({ title }) => {
  return (
    <button type='submit' className={styles['button']}>
      {title}
    </button>
  );
};

export default Button;
