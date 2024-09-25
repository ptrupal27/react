import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Component1 from './comonent/Component1';
import Company from './comonent/emp.js/com-fun';
import ComponentClass from './comonent/class-component/ComponentClass';
import EventComponent from './event/EventComponent';
import StateHookComponent from './comonent/hook/Statehook';
import Useeffecthook from './comonent/hook/Useeffecthook';






function App() {
  return (
    <>
      {/* // <Component1 /> */}
      {/* // <Company /> */}
      {/* //<ComponentClass /> */}
      {/* <EventComponent /> */}
      {/* <StateHookComponent /> */}
      <Useeffecthook />
    </>
  );
}

export default App;
