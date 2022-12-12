
import './App.css';
import AddExpence from './components/AddExpence';
import { useEffect } from "react";
import ExpenseAccount from './components/ExpenseAccount';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Login from './components/Login';
import Footer from './components/Footer';
import Register from './components/Register';
import Piechart from './components/Piechart';
import { useState } from 'react';

function App() {
  const [data,setdata]=useState("")
  useEffect(() => {
    fetch("/first", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<ExpenseAccount />}/>
          <Route path={'/addexpens'} element={<AddExpence />}/>
          <Route path={'/userlogin'} element={<Login />}/>
          <Route path={'/register'} element={<Register />}/>
          <Route path={'/charts'} element={<Piechart data={data} />}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
