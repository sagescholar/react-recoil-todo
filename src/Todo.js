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
    <li className="slds-item">
      <div className="slds-form-element">
        <div className="slds-form-element__control">
          <div className="slds-checkbox">
            <input
              type="checkbox"
              id={`checkbox-${item.id}`}
              checked={item.completed}
              onChange={toggleTodo}
            />
            <label className="slds-checkbox__label" htmlFor={`checkbox-${item.id}`}>
              <span className="slds-checkbox_faux"></span>
              <span className="slds-form-element__label">{item.text}</span>
            </label>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Todo;