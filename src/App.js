import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Company from './props/com-fun';
import ComponentClass from './comonent/class-component/ComponentClass';
import EventComponent from './event/EventComponent';
import StateHookComponent from './hook/Statehook';
import Useeffecthook from './hook/Useeffecthook';
import Component1 from './comonent/function_component/Component1';
import Userefhook from './hook/userefhook';
import ListAndKeysComponent from './list_and_keys/ListAndKeysComponent';
import Form from './form/Form';
import SimpleFormValidation from './form/SimpleFormValidation';
import StyleComponent from './style/StyleComponent';
import LiftingStateParent from './lifting-stateup/perent'







function App() {
  return (
    <>
      {/* <Component1 /> */}
      {/* // <Company /> */}
      {/* //<ComponentClass /> */}
      {/* <EventComponent /> */}
      {/* <StateHookComponent /> */}
      {/* <Useeffecthook /> */}
      {/* <Userefhook /> */}
      {/* <ListAndKeysComponent /> */}
      {/* <Form /> */}
      {/* <SimpleFormValidation /> */}
      {/* <StyleComponent />  */}
      {/* <handleClick /> */}
      <LiftingStateParent />
    </>
  );
}

export default App;
