import React from 'react';
import Card from '../UI/Card';
import Button from '../AddUser/Button';
import { useGlobalContext } from '../Context';
import styles from './Modal.module.css';
const Modal = () => {
  const { buttons } = useGlobalContext();
  return (
    <Card className={styles['container']}>
      <div>
        <h4>Invalid Input</h4>
      </div>
      <p>Please enter a valid name and age (non-empty values)</p>
      <Button title={buttons[1].title} />
    </Card>
  );
};

export default Modal;
