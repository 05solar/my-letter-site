// src/components/LetterList.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { letters } from '../data';
import './LetterList.css';

export default function LetterList() {
  const navigate = useNavigate();
  const [readLetters, setReadLetters] = useState([]);

  // 읽은 편지 ID를 localStorage에서 가져옴
  useEffect(() => {
    const stored = localStorage.getItem('readLetters');
    if (stored) {
      setReadLetters(JSON.parse(stored));
    }
  }, []);

  const handleClick = (id) => {
    // localStorage에 읽은 편지 ID 저장
    const updated = Array.from(new Set([...readLetters, id]));
    localStorage.setItem('readLetters', JSON.stringify(updated));
    setReadLetters(updated);

    // open 애니메이션 페이지로 이동
    navigate(`/open/${id}`);
  };

  return (
    <div className="list-container">
      <div className="grid">
        {letters.map(letter => {
          const isRead = readLetters.includes(letter.id);
          return (
            <div
              key={letter.id}
              className="thumb"
              onClick={() => handleClick(letter.id)}
            >
              <img
                src={isRead ? '/envelope-open.png' : '/envelope-closed.png'}
                alt="envelope"
              />
              {!isRead && <span className="badge"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
