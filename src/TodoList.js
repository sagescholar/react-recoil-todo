import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';
import Todo from './Todo';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodoList([...todoList, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;