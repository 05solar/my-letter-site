import React from 'react';
import './FrameWrapper.css';

export default function FrameWrapper({ children }) {
  return (
    <div className="outer-frame">
      <div className="frame-container">
        <div className="frame-header">
          <span className="frame-title">인터넷 편지</span>
            <div className="frame-buttons">
            <div className="btn minimize"></div>
            <div className="btn maximize"></div>
            <div className="btn close"></div>
            </div>
        </div>
        <div className="mint-divider"></div>

        <div className="frame-body">
          {children}
        </div>
      </div>
    </div>
  );
}
