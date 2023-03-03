import React from 'react';
import { MdAddTask } from 'react-icons/md';
export default function FloatingBtn({onFABclick}) {
  return (
    <button type='button' className='fab' onClick={onFABclick}>
     <MdAddTask size={"24px"}/> 할일 추가
    </button>
  );
}
