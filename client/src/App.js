import React from "react";
import LoginPage from "./components/LoginPage";
import { useSelector } from "react-redux";
import { selectedUser } from "./features/userSlice";
import TestLogout from "./components/TestLogout";

function App() {
  const user = useSelector(selectedUser);

  return <>{user ? <TestLogout /> : <LoginPage />}</>;
}

export default App;
