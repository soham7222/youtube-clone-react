import { Routes, Route } from "react-router-dom"
import { Layout } from './Layout';
import "./App.css"
import { Dashboard } from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { GolablContext, LoginState } from "../src/context/context"
import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
      <GolablContext.Provider value={{
        login,
        setLogin
      }}>
        <Routes>
          <Route path="/" Component={Layout}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </GolablContext.Provider>
    </div >
  );
}

export default App;
