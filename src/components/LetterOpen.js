// src/components/LetterOpen.js
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './LetterOpen.css';

export default function LetterOpen() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 읽은 편지 저장
    const stored = localStorage.getItem('readLetters');
    const parsed = stored ? JSON.parse(stored) : [];

    if (!parsed.includes(Number(id))) {
      parsed.push(Number(id));
      localStorage.setItem('readLetters', JSON.stringify(parsed));
    }

    // GIF 재생 후 자동 이동
    const timer = setTimeout(() => {
      navigate(`/letter/${id}`);
    }, 2000);  // GIF 재생 시간에 맞게 조정 (예: 2초)

    return () => clearTimeout(timer);
  }, [id, navigate]);

  return (
    <div className="open-container">
      <img
        src="/envelope-open.gif"   // ← 🔄 GIF 이미지로 교체
        alt="opening envelope"
        className="open-gif"
      />
    </div>
  );
}
