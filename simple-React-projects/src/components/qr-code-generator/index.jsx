import { useState } from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  function handleBtnClick() {
    const inputEle = document.getElementById('qrInput');

    setQrCode(inputEle.value);
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input id="qrInput" placeholder="Please enter your value"></input>
        <button onClick={handleBtnClick}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-id" value={qrCode} />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
