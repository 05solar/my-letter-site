import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LetterList from './components/LetterList';
import LetterOpen from './components/LetterOpen';
import LetterDetail from './components/LetterDetail';
import Header from './components/Header'; // ⬅️ 추가

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* ⬅️ 모든 페이지 상단에 헤더 삽입 */}
        <Routes>
          <Route path="/" element={<LetterList />} />
          <Route path="/open/:id" element={<LetterOpen />} />
          <Route path="/letter/:id" element={<LetterDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
