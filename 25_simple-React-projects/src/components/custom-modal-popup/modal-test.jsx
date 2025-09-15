import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import './modal.css';
import data from '../accordion/data';
import GridLetter from './letter-grid';

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

  // function GridofLetters() {
  //   // const letCoordinates = [];
  //   // useEffect(() => {
  //   //   async function fetchGoogleDoc(url) {
  //   //     console.log('URL:', url);
  //   //     fetch(url)
  //   //       .then((res) => res.text())
  //   //       .then((html) => {
  //   //         const parser = new DOMParser();
  //   //         const doc = parser.parseFromString(html, 'text/html');
  //   //         const tables = doc.querySelectorAll('table');

  //   //         tables.forEach((table) => {
  //   //           const rows = table.querySelectorAll('tr');
  //   //           rows.forEach((row) => {
  //   //             const cells = row.querySelectorAll('td');
  //   //             const rowData = Array.from(cells).map((cell) =>
  //   //               cell.textContent.trim()
  //   //             );
  //   //             console.log('RowData:', rowData);
  //   //             letCoordinates.push(rowData);
  //   //             console.log('letCoordinates:', letCoordinates);

  //   //             return letCoordinates;
  //   //           });
  //   //         });
  //   //       });
  //   //   }

  //   //   setTableContent(fetchGoogleDoc(url));
  //   // }, [url]);

  //   useEffect(() => {
  //     async function fetchGoogleDoc(url) {
  //       const res = await fetch(url);
  //       const html = await res.text();
  //       const parser = new DOMParser();
  //       const doc = parser.parseFromString(html, 'text/html');
  //       const tables = doc.querySelectorAll('table');

  //       const letCoordinates = [];

  //       tables.forEach((table) => {
  //         const rows = table.querySelectorAll('tr');
  //         rows.forEach((row) => {
  //           const cells = row.querySelectorAll('td');
  //           const rowData = Array.from(cells).map((cell) =>
  //             cell.textContent.trim()
  //           );
  //           letCoordinates.push(rowData);
  //         });
  //       });

  //       console.log('letCoordinates:', letCoordinates);
  //       return letCoordinates.slice(1);
  //     }

  //     async function loadData() {
  //       const result = await fetchGoogleDoc(url);
  //       setTableContent(result); // ✅ Now you're setting actual data
  //     }

  //     if (!url || typeof url !== 'string' || url.trim() === '') {
  //       console.log('Invalid or Empty URL. Skipping fetch.');
  //       return;
  //     } else {
  //       loadData();
  //     }
  //   }, [url]);

  //   // return content;
  //   renderLetters();
  // }

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
      <br></br>
      <GridLetter />
    </div>
  );
}

export default ModalTest;
