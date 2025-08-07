// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LetterList from './components/LetterList';
import LetterOpen from './components/LetterOpen';
import LetterDetail from './components/LetterDetail';
import FrameWrapper from './components/FrameWrapper';
import MainPage from './components/MainPage'; // ✅ 추가




export default function App() {
  return (
    <Router basename="/my-letter-site">
      <FrameWrapper>
        <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* ✅ 변경 */}
          <Route path="/list" element={<LetterList />} /> {/* ✅ 편지 리스트는 /list로 이동 */}
          <Route path="/open/:id" element={<LetterOpen />} />
          <Route path="/letter/:id" element={<LetterDetail />} />
        </Routes>
        </div>
      </FrameWrapper>
    </Router>
  );
}
