import React, { useCallback, useState } from 'react';
import styles from '../../Styles/FabPopup.module.css';
import Chip from '../Chip/Chip';
import { TagModel } from '../../Model/Tage';
import ColorPicker from '../ColorPicker/ColorPicker';
import Dictaphone from '../Function/Voice';
import ColorPickerModal from '../ColorPicker/ColorPickerModal';
import { BsMicFill } from 'react-icons/bs';

export default function FabPopup(props) {
  const { onAddTodo, setFabPopup } = props;
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState({
    title: '',
    content: '',
    tags: [],
    completed: false,
  });
  const [tag, setTag] = useState('');
  const [color, setColor] = useState('#fff');
  const [speech, setSpeech] = useState('');

  const handleColor = (color) => {
    if (!color) return;
    setColor(color.hex);
    setShow(false);
  };

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
    const newTag = new TagModel({ name: tag, color: color });
    setTodo((prev) => ({ ...prev, tags: [...prev.tags, newTag] }));
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
        <div className={styles.toRow}>
          <input
            type='text'
            placeholder='할일을 입력하세요.'
            onChange={handleTodoText}
          />
          <Dictaphone setSpeech={setSpeech} />
        </div>

        <form onSubmit={handleTagSubmit}>
          <div className={styles.toRow}>
            <input type='text' value={tag} onChange={handleTagChange} />
            <div>
              <ColorPicker selectedColor={color} setShow={setShow} />
              {show && <ColorPickerModal handleColor={handleColor} />}
            </div>
          </div>
        </form>
        <div>
          {todo.tags.map((tag) => (
            <Chip key={tag.id} name={tag.name} color={tag.color} />
          ))}
        </div>

        <div className={styles.applyBtnZone}>
          <button onClick={handleAdd}>확인</button>
        </div>
      </div>
    </div>
  );
}
