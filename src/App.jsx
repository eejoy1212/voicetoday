import "./Styles/App.css";
import AppBar from "./Components/AppBar/AppBar";
import Card from "./Components/Card/Card";
import FloatingBtn from "./Components/FAB/FloatingBtn";
import { useCallback, useState } from "react";
import { TodoModel } from "./Model/Todo";
import FabPopup from "./Components/Popup/FabPopup";
import SideMenu from './Components/SideMenu/SideMenu';
import { SketchPicker } from 'react-color';
export default function App() {
  const [todos, setTodos] = useState([]);
  const [fabPopup, setFabPopup] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const onFABclick = () => {
    setFabPopup(true);
  };
  const onSideMenuClick = () => {
    setSideMenu(!sideMenu);
  };
  const onColorPicker = () => {
    setColorPicker(!colorPicker);
    console.log('colorPicker',colorPicker)
  };
  const onAddTodo = useCallback(
    (todo) => {
      console.log("in function onAddTodo", todo);
      const newTodo = {
        date: new Date(),
        title: todo.title,
        content: todo.content,
        tags: todo.tags,
        completed: todo.completed,
      };
      const newTodoModel = new TodoModel(newTodo);

      setTodos([...todos, newTodoModel]);
      console.log("애드 함수 호출??", todos);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fabPopup]
  );
  const usuals = [
    {
      id: 1,
      title: '일정',
      content: '일정을 추가해보세요',
      tags: ['일정'],
      completed: false,
    },
  ]
  console.log('side',sideMenu)
  return (
    <div className='App' >
      <AppBar onSideMenuClick={onSideMenuClick}  sideMenu={sideMenu} />
      {
        sideMenu && (
    <SideMenu usuals={usuals} onColorPicker={onColorPicker} />
        )
      }
      {fabPopup && (
        <FabPopup
          onAddTodo={onAddTodo}
          todos={todos}
          setTodos={setTodos}
          setFabPopup={setFabPopup}
        />
      )}
      {colorPicker && (
        <SketchPicker />
      )}
      <div className="todoCards">
        {todos.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </div>

      <div className="fabZone">
        <FloatingBtn onFABclick={onFABclick} />
      </div>
    </div>
  );
}
