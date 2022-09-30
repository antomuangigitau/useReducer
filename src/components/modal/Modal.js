import React from 'react';
import Card from '../UI/Card';
import Button from '../AddUser/Button';
import styles from './Modal.module.css';
const Modal = () => {
  return (
    <Card className={styles['container']}>
      <div>
        <h4>Invalid Input</h4>
      </div>
      <p>Please enter a valid name and age (non-empty values)</p>
      <Button>Okay</Button>
    </Card>
  );
};

export default Modal;
