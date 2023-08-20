import React, { useEffect, useRef, useState } from "react";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedUser } from "./features/userSlice";
import TestLogout from "./components/TestLogout";
import { Header } from './components/Header';
import {SideNav_Main} from "./components/SideNav";
import './App.css';
import Questions from "./pages/Questions";
import Question from "./pages/Question";
import SignUp from "./pages/Signup";
import Login from "./components/Login";
import Footer from './components/Footer';
import PostEditor from "./components/PostEditor";

function App() {
  const user = useSelector(selectedUser);

  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container-wrapper">
              <div className="container">
                <SideNav_Main />
                <Questions />
              </div>
              <Footer />
            </div>
          }
        />
        {/* 미 로그인 상태일 때 */}
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/test-logout" />}
        />
        {/* 로그인 상태일 때 */}
        <Route
          path="/test-logout"
          element={user ? <TestLogout /> : <Navigate to="/" />}
        />
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/editer" element={<PostEditor/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;




       