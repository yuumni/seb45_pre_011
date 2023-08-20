import React, { useState } from "react";
import axios from "axios";
import "./ResetPassword.css";

export const ResetPassword = ({ nickname, email }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatching, setIsMatching] = useState(true);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsMatching(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsMatching(e.target.value === password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isMatching) {
        // 서버로 새로운 비밀번호 송신
        const response = await axios.post("/api/resetPassword", {
          nickname,
          email,
          newPassword: password,
        });

        if (response.data.success) {
          setIsPasswordChanged(true);
        } else {
          console.error("Password change failed.");
        }
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  if (isPasswordChanged) {
    return <p>비밀번호가 성공적으로 변경되었습니다.</p>;
  }

  return (
    <div className="forgot-password-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>New Password</label>
          <input
            placeholder="새로운 비밀번호를 입력하세요"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            placeholder="새로운 비밀번호를 한 번 더 입력하세요"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!isMatching && <p>새로운 비밀번호가 일치하지 않습니다</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
