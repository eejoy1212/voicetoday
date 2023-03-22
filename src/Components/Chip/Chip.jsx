import React from 'react';

export default function Chip(props) {
  const { name, color } = props;
  //tag를 model로 받기(색상)
  return (
    <button className='chip' style={{ backgroundColor: color }}>
      # {name}
    </button>
  );
}
