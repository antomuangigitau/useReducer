import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from './Button';
import { useGlobalContext } from '../Context';
import Modal from '../modal/Modal';

const AddUser = () => {
  const { addPeople, nothingAdded, modalOpen } = useGlobalContext();
  console.log(useGlobalContext());
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const addHandler = (e) => {
    e.preventDefault();
    if (userName && age) {
      const newItem = {
        id: new Date().getTime().toString(),
        userName,
        age,
      };
      addPeople(newItem);
      setUserName('');
      setAge('');
    } else {
      nothingAdded();
    }
  };

  return (
    <Card className={styles.input}>
      {modalOpen && <Modal />}
      <form onSubmit={addHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
