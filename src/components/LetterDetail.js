// src/components/LetterDetail.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { letters } from '../data';
import './LetterDetail.css';

export default function LetterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const letter = letters.find(l => l.id === parseInt(id, 10));

  if (!letter) return <div className="detail-container">편지를 찾을 수 없습니다.</div>;

  return (
    <div className="detail-container">
        <div className="letter-box">
        <p className="to">to. {letter.to}</p>

        <div className="lined-content">
            {letter.content.split('\n').map((line, idx) => (
            <div className="line" key={idx}>
                <span>{line}</span>
                <div className="line-underline" />
            </div>
            ))}
        </div>

        <p className="from">from. {letter.from}</p>
        </div>


      <button onClick={() => navigate('/list')}>뒤로가기</button>
    </div>
  );
}
