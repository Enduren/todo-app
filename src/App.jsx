import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <>
        <Header />
        <Tabs />
        <TodoList />
        <TodoInput />
      </>
    </>
  );
}

export default App;
