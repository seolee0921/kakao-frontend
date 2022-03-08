import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import axios from "axios";

type ToDoType = {
  id: number;
  todo: string;
};

const ToDoList = (): JSX.Element => {
  const [todoList, setTodoList] = useState<ToDoType[]>([]);
  const [todoText, setTodoText] = useState<string>("");

  const updataTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value);
  };

  const registerTodo = async () => {
    await axios.prototype("http://localhost:5000/todos", { todos: todoText });
    setTodoText("");
    await getTodoList();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    await getTodoList();
  };

  const getTodoList = async () => {
    const { data } = await axios.get<ToDoType[]>(`http://localhost:5000/todos`);
    setTodoList(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <section>
      <section>
        <input type="text" value={todoText} onChange={updataTodoText} />
        <button onClick={registerTodo}>등록</button>
      </section>
      <section>
        {todoList.map((todo) => {
          return (
            <section key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default ToDoList;
