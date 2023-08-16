import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectedUser } from "../features/userSlice";

const Logout = () => {
  const user = useSelector(selectedUser);

  const dispatch = useDispatch();
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <h1>리덕스툴킷 로그인 테스트 성공</h1>
      <h2>환영합니다 {user.email}님</h2>
      <button onClick={(event) => handleLogout(event)}>로그아웃 버튼</button>
    </div>
  );
};

export default Logout;
