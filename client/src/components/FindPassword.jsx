import React from "react";
import "./FindPassword.css";

function FindPassword({ onClose }) {
  // 모달 내용 및 기능 구현

  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {/* 모달 내용 구현 */}
        <h2>Forgot Password?</h2>
        {/* 기타 내용 */}
      </div>
    </div>
  );
}

export default FindPassword;
