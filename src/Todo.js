import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

function Todo({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleTodo = () => {
    const newList = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(newList);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleTodo}
      />
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.text}
      </span>
    </li>
  );
}

export default Todo;