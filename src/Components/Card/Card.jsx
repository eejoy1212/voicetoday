import React from 'react';
import '../../Styles/App.css';
import { RxSpeakerLoud } from 'react-icons/rx';
import styles from '../../Styles/Card.module.css';
import Chip from '../Chip/Chip';
export default function Card({ todo }) {
  return (
    <div className={styles.card}>
      <div className={styles.dateZone}>
        <div className='year' style={{ color: 'white' }}>
          2023
        </div>
        <div
          className='salsh'
          style={{ color: 'white', margin: '0', padding: '0' }}
        >
          /
        </div>
        <div className='month' style={{ color: 'white' }}>
          02
        </div>
        <div
          className='salsh'
          style={{ color: 'white', margin: '0', padding: '0' }}
        >
          /
        </div>
        <div className='day' style={{ color: 'white' }}>
          16
        </div>
        <button type='button' className={styles.speakerZone}>
          <RxSpeakerLoud size={'16px'} />
        </button>
      </div>
      <div className={styles.chkZone}>
        <input type='checkbox' id='checkbox' />
        <label className={styles.titleZone} htmlFor={'checkbox'}>
          {todo.title}
        </label>
      </div>
      <div className={styles.chipsZone}>
        {todo.tags.map((tag) => (
          <Chip name={tag.name} color={tag.color} /> //key 추가하기
        ))}
      </div>
    </div>
  );
}
