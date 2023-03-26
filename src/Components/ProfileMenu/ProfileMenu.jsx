import React from 'react';
import styles from '../../Styles/ProfileMenu.module.css';
export default function ProfileMenu(props) {
  return (
    <div className={styles.profileMenu}>
    <div className={styles.avatar}></div>
    <div className={styles.info}>
      <div className={styles.name}>이원희</div>
      <div className={styles.content}>상태메시지입니다^^,상태메시지입니다^^,상태메시지입니다^^,상태메시지입니다^^,상태메시지입니다^^</div>
      </div>
    </div>
  );
}
