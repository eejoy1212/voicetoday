import React, { useCallback, useState } from 'react';
import styles from '../../Styles/FabPopup.module.css';
import Chip from '../Chip/Chip';
import { CirclePicker } from 'react-color';
export default function FabPopup({ onAddTodo, setFabPopup }) {
  const [todo, setTodo] = useState({
    title: '',
    content: '',
    tags: [],
    completed: false,
  });
  const [tag, setTag] = useState('');

  const handleAdd = () => {
    onAddTodo(todo);
    setFabPopup(false);
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();
    if (tag === '') return;
    if (todo.tags.find((t) => t === tag)) {
      setTag('');
      return;
    }
    setTodo({
      ...todo,
      tags: [...todo.tags, tag],
    });
    setTag('');
  };

  const handleTodoText = (e) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className='popup'>
      <div className={styles.title}>할일 추가</div>
      <div className={styles.contents}>
        <input
          type='text'
          placeholder='할일을 입력하세요.'
          onChange={handleTodoText}
        />
        <form onSubmit={handleTagSubmit}>
          <input type='text' value={tag} onChange={handleTagChange} />
        </form>
        <div>
          {todo.tags.map((tag) => (
            <Chip key={tag} tag={tag} />
          ))}
        </div>

        <div className={styles.applyBtnZone}>
          <button onClick={handleAdd}>확인</button>
        </div>
        <CirclePicker />
      </div>
    </div>
  );
}
