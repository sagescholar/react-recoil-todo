import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="slds-container_center slds-container_medium">
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;