import React from 'react';
import { useGlobalContext } from '../Context';
import Card from '../UI/Card';
import styles from './StoredUser.module.css';
const StoredUser = () => {
  const { people, remove } = useGlobalContext();
  return (
    <Card className={styles.container}>
      {people.map((person) => {
        const { id, userName, age } = person;
        return (
          <div
            onClick={() => remove(id)}
            key={id}
            className={styles['inner__container']}
          >
            <div className={styles['inner__items']}>
              <p>
                {userName} ({age}years old)
              </p>
              <button className={styles.btn} type='button'>
                remove
              </button>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default StoredUser;
