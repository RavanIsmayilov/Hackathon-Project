import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const QRCodeComponent = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    const url = 'https://vercel.com/api/registration/login-with-github?mode=login&next=http%3A%2F%2Flocalhost%3A56463https://myapp.vercel.app'; // Replace with your deployed URL
    QRCode.toDataURL(url)
      .then((dataUrl) => {
        setQrCodeUrl(dataUrl);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>QR Code for My App</h1>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
};

export default QRCodeComponent;
