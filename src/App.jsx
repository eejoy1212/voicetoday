import "./Styles/App.css";
import AppBar from "./Components/AppBar/AppBar";
import Card from "./Components/Card/Card";
import FloatingBtn from "./Components/FAB/FloatingBtn";
import { useCallback, useState } from "react";
import { TodoModel } from "./Model/Todo";
import FabPopup from './Components/Popup/FabPopup';
export default function App() {


  const [todos, setTodos] = useState([]);
  const [fabPopup, setFabPopup] = useState(false);
  const onFABclick = () => {
    setFabPopup(true);
  };
  const onAddTodo = useCallback(
    (todo) => {
     
      // if (!fabPopup) {
         console.log('in function onAddTodo',todo)
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
      // }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fabPopup]
  );
  return (
    <div className="App">
      
      <AppBar />
      {fabPopup && <FabPopup onAddTodo={onAddTodo} todos={todos} setTodos={setTodos}setFabPopup={setFabPopup} />}
     <div className="todoCards">{todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}</div>
      

      <div className="fabZone">
        <FloatingBtn onFABclick={onFABclick} />
      </div>
    </div>
  );
}
