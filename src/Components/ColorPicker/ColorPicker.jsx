import React from 'react';
import styles from '../../Styles/ColorPicker.module.css';

export default function ColorPicker({ selectedColor, setShow }) {
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div
      className={styles.roundPicker}
      style={{ backgroundColor: selectedColor }}
      onClick={handleClick}
    ></div>
  );
}
