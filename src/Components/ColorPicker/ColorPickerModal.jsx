import React from 'react';
import { CirclePicker, HuePicker } from 'react-color';
import styles from '../../Styles/ColorPicker.module.css';

export default function ColorPickerModal({ handleColor }) {
  return (
    <div>
      <CirclePicker
        className={styles.colorModal}
        onChange={handleColor}
        colors={[
          '#ffff004d',
          '#ff8a004d',
          '#9747ff4d',
          '#18f12d4d',
          '#0de0fd4d',
          '#00ff944d',
          '#C4D3E9',
          '#E9C4D4',
          '#C4E9D5',
          '#D0E9C4',
        ]}
      />
    </div>
  );
}
