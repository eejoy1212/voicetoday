import React from 'react';
import styles from '../../Styles/UsualMenu.module.css';
import Chip from '../Chip/Chip';
export default function UsualMenu({usuals}) {
  return (
    <div className={styles.usual}>
      <div className={styles.title}>자주 하는 할 일</div>
  {/* { 
       usuals.map((item, index) => {
         return (
         <Chip tag={index} key={index}/>
         );
       })
      
    
     }  */}
     <Chip tag={'코딩'}/>
     
      <Chip tag={'피그마 디자인'}/>
      <Chip tag={'런닝'}/>
      <Chip tag={'테니스'}/>
      <Chip tag={'낮잠'}/>
      <Chip tag={'쇼핑'}/>
      <Chip tag={'춤추기'}/>
    </div>
  );
}
