import React from "react";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedUser } from "./features/userSlice";
import TestLogout from "./components/TestLogout";
import { Header } from './components/Header';
import SideNav from "./components/SideNav";
import './App.css';
import Questions from "./pages/Questions";
import Question from "./pages/Question";
import SignUp from "./pages/Signup";
import Login from "./components/Login";
import Footer from './components/Footer'

function App() {
  const user = useSelector(selectedUser);

  return (

    <BrowserRouter> 

  

      <Header />
      <Routes>
      
      <Route 
        path='/' 
        element={
        <div className="container">
        <SideNav />
        <Questions />
        </div>
        }
      />
      {/* 미 로그인 상태일 때 */}
      <Route
        path="/Login"
        element={!user ? <LoginPage /> : <Navigate to="/test-logout" />}
      />
      {/* 로그인 상태일 때 */}
      <Route
        path="/test-logout"
        element={user ? <TestLogout /> : <Navigate to="/" />}
      />

      
      </Routes>
      
        

      
     
    </BrowserRouter> 
  );
}

export default App;




       