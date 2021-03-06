// import React from "react";
// import {render} from "react-dom";
//
// import { User } from './components/User';
// import { Main } from './components/Main';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }
//
//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }
//
// render(<App />, window.document.getElementById('app'));

import {createStore,combineReducers,applyMiddleware} from "redux";

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
  switch (action.type){
    case  "ADD" :
    state = {
          ...state,
          result : state.result + action.payload,
          lastValues : [...state.lastValues,action.payload]
       };
    break;
    case "SUBSTRACT":
    state = {
      ...state,
      result : state.result - action.payload,
      lastValues : [...state.lastValues,action.payload]
   };
      break;

  }
  return state
}
const userReducer = (state ={name : "MAX",age : 24},action
 ) => {
  switch (action.type){
    case  "SET_NAME" :
    state = {
          ...state,
        name : action.payload
       };
    break;
    case "SET_AGE":
    state = {
      ...state,
    age : action.payload
   };
      break;

  }
  return state
}
const myLogger = (store) => (next) =>(action) => {
      console.log("That's Loggers---------",action);
      next(action)
}
const store = createStore(combineReducers({mathReducer,userReducer},{},applyMiddleware());
store.subscribe(() =>{

  console.log("the status is updated........",store.getState());
})

store.dispatch({type : "ADD",
payload : 10})
store.dispatch({type : "SUBSTRACT",
payload : 101})
store.dispatch({type : "ADD",
payload : 150})
