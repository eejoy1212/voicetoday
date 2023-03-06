import React from 'react';

export default function Chip({ tag }) {
  //tag를 model로 받기(색상)
  return <button className='chip'># {tag}</button>;
}
