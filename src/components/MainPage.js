// src/pages/MainPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const goToLetterList = () => {
    navigate('/list'); // 편지 리스트 페이지
  };

  return (
    <div className="main-container">
      {showPopup && (
        <div className="popup-window">
          {/* ✅ 프레임 스타일 헤더 */}
          <div className="frame-header">
            <span className="frame-title">인터넷 편지</span>
            <div className="frame-buttons">

              <div className="btn close" onClick={handleClosePopup}></div>
            </div>
          </div>

          <div className="mint-divider"></div>

          {/* ✅ 본문 내용 */}
          <div className="popup-body">
            확인하지 못한 인터넷 편지가 <br />6통 존재합니다
          </div>
        </div>
      )}

      {!showPopup && (
        <div className="envelope-icon" onClick={goToLetterList}>
          <img
            src={`${process.env.PUBLIC_URL}/envelope-6.png`}
            alt="편지 아이콘"
          />
        </div>
      )}
    </div>
  );
}
