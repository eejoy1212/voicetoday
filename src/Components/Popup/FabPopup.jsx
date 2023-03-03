import React, { useCallback, useState } from "react";
import { TodoModel } from '../../Model/Todo';
import styles from "../../Styles/FabPopup.module.css";
import Chip from '../Chip/Chip';
export default function FabPopup({onAddTodo,setFabPopup }) {
  const [todo, setTodo] = useState({title:'',content:'',tags:[],completed:false})

  return (
    <div className="popup">
      <div className={styles.title}>할일 추가</div>
      <div className={styles.contents}>
        <input type="text" placeholder='할일을 입력하세요.'  onChange = {(e)=>{
          
          
          console.log('typing',e.target.value)
          setTodo({...todo,tags:['코딩','리액트'],title:e.target.value})
          }}/>
        <input type="text" placeholder='(태그내용 입력하고 엔터치면 등록되게)'/>
        
        <div className={styles.applyBtnZone}> <button onClick={()=>{onAddTodo(todo); setFabPopup(false)}}>확인</button></div>
        
      </div>
    </div>
  );
}
