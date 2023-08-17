import React from "react";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedUser } from "./features/userSlice";
import TestLogout from "./components/TestLogout";
import { Header } from '../src/components/Header';
import SideNav from "../src/components/SideNav";
import './App.css';


function App() {
  const user = useSelector(selectedUser);

  return (
    <>
     
      <Header className='header'/>
      <SideNav className='sidebar'/> 
      
       <BrowserRouter >
       <Routes>
         {/* 미 로그인 상태일 때 */}
         <Route
           path="/"
           element={!user ? <LoginPage /> : <Navigate to="/test-logout" />}
         />
         {/* 로그인 상태일 때 */}
         <Route
           path="/test-logout"
           element={user ? <TestLogout /> : <Navigate to="/" />}
         />
         <Route path=''/>
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;


