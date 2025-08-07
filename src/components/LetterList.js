// src/components/LetterList.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { letters } from '../data';
import './LetterList.css';

export default function LetterList() {
  const navigate = useNavigate();
  const [readLetters, setReadLetters] = useState([]);

  // 📌 읽은 편지 ID를 localStorage에서 가져옴
  useEffect(() => {
    const stored = localStorage.getItem('readLetters');
    if (stored) {
      setReadLetters(JSON.parse(stored));
    }
  }, []);

  // 📌 클릭 시 편지 읽음 처리 + 페이지 이동
  const handleClick = (id) => {
    const updated = Array.from(new Set([...readLetters, id]));
    localStorage.setItem('readLetters', JSON.stringify(updated));
    setReadLetters(updated);
    navigate(`/open/${id}`);
  };

  return (
    <div className="list-container">
      <div className="grid">
        {letters.map(letter => {
          const isRead = readLetters.includes(letter.id);
          const imgSrc = `${process.env.PUBLIC_URL}/${letter.thumbnail}`; // ✅ 썸네일 사용

          return (
            <div
              key={letter.id}
              className="thumb"
              onClick={() => handleClick(letter.id)}
            >
              <img src={imgSrc} alt={`편지 ${letter.id}`} />
              {!isRead && <span className="badge"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
