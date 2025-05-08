import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import './modal.css';

function ModalTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalMessage = {
    header: 'Customized header',
    content: 'Customized content',
    footer: 'Customized footer',
  };

  function handleClick() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const modalContainer = document.getElementsByClassName('modalContainer')[0];

  return (
    <div className="modalContainer">
      <button onClick={handleClick}>Open Modal Popup</button>
      {/* <Modal message={modalMessage} /> */}

      {/* {isModalOpen &&
        ReactDOM.createPortal(
          <Modal message={modalMessage} handelClose={closeModal} />,
          modalContainer
        )} */}
      {isModalOpen && <Modal message={modalMessage} handelClose={closeModal} />}
    </div>
  );
}

export default ModalTest;
