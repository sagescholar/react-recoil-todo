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
    <div className="slds-p-around_medium">
      <h1 className="slds-text-heading_large slds-m-bottom_medium">Todo List</h1>
      <div className="slds-form-element slds-m-bottom_medium">
        <div className="slds-form-element__control">
          <input
            className="slds-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
          />
        </div>
      </div>
      <button className="slds-button slds-button_brand" onClick={addTodo}>
        Add Todo
      </button>
      <ul className="slds-has-dividers_around-space slds-m-top_medium">
        {todoList.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;