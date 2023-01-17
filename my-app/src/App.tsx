import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "./state"
import { RootState } from "./state/reducers"

const App = () => {
  const state = useSelector((state: RootState) => state.post)
  const dispatch = useDispatch();
  const { getAll } = bindActionCreators(actions, dispatch)
  useEffect(() => {
    getAll()
  },[])

  console.log(state)
  return <div>App</div>;
};

export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

function App() {

  const state = useSelector((state: RootState) => state.bank)
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;

*/