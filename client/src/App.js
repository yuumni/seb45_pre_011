import React from "react";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedUser } from "./features/userSlice";
import TestLogout from "./components/TestLogout";
import Question from "./pages/Question";
import SignUp from "./pages/Signup";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectedUser);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* 미 로그인 상태일 때 */}
    //     <Route
    //       path="/"
    //       element={!user ? <LoginPage /> : <Navigate to="/test-logout" />}
    //     />
    //     {/* 로그인 상태일 때 */}
    //     <Route
    //       path="/test-logout"
    //       element={user ? <TestLogout /> : <Navigate to="/" />}
    //     />
    //   </Routes>
    // </BrowserRouter>
    <SignUp />
  );
}

export default App;
