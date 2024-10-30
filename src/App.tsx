import React from 'react';
import logo from './logo.svg';
import './App.css';

{/* 주석문을 작성합니다. 
  작성자: phr
  작성일: 2024-10-30
  내용: 기능에 대한 내용*/}

function App() {
  let name = "React";

  return (
    <div className="container">
      <h1 className='test'>Hello, {
          name === "React" ? (<h1>YES</h1>): null
        }!!</h1>
      <p>반갑습니다.</p>
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
