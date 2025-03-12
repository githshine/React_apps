import { useState } from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');
  function handleBtnClick() {
    const inputEle = document.getElementById('qrInput');

    // setQrCode(inputEle.value);
    setQrCode(input);

    setInput('');
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          id="qrInput"
          value={input}
          placeholder="Please enter your value"
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <button
          onClick={handleBtnClick}
          disabled={input && input.trim() ? false : true}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-id"
          value={qrCode}
          size={400}
          bgColor="#fff"
          fgColor="green"
        />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
