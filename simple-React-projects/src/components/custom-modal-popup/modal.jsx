import React from 'react';
import './modal.css';

function Modal({ message, handelClose }) {
  const header = message?.header || 'Default header';
  const content = message?.content || 'Default content';
  const footer = message?.footer || 'Default footer';
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-icon" onClick={handelClose}>
          &times;
        </button>
        <h2>This is a modal popup</h2>
        <header>{header}</header>
        <p>{content}</p>
        <footer>{footer}</footer>
        {/* <button onClick={handelClose}>Close Popup</button> */}
      </div>
    </div>
  );
}

export default Modal;
