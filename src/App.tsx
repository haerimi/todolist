import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Clock from './Timer';

function App() {
  let name = "React";

  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );

  // const port = undefined;

  // return(
  //   <div>
  //     {
  //       prot || '3000'
  //     }
  //   </div>
  // )
}

export default App;
