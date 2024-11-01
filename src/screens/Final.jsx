import { SaveWeddingdata } from '@/states/action-creators/handledatasave';
import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';

const CreateKankotri = () => {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState('');
  const [qrVisible, setQrVisible] = useState(false);
  const qrRef = useRef();
  // const formdata = new FormData();

  // formdata.append('weddingDetails',sessionStorage.getItem('weddingDetails'))
  // formdata.append('events',sessionStorage.getItem('events'))
  // formdata.append('map_url',sessionStorage.getItem('locationUrl'))
  // formdata.append('photo',sessionStorage.getItem('imagep'))
  // formdata.append('modelId',sessionStorage.getItem('modelId'))

  // for (const pair of formdata.entries()) {
  //   console.log(`${pair[0]}: ${pair[1]}`);

  

  const handleClick = async() => {

    setLoading(true);
    const data = JSON.parse(sessionStorage.getItem('data'));
    console.log(data)
    const modelId = sessionStorage.getItem('modelId');
    const resp = await SaveWeddingdata({data,modelId})
    console.log('data saved successfully', resp)

    
    setTimeout(() => {
      const uniqueLink = resp.link; // Replace with your logic to generate a unique link
      setLink(uniqueLink);
      setQrVisible(true);
      setLoading(false);
    }, 2000); // Simulating loading time of 2 seconds
  };

  const downloadQRCode = () => {
    const svgElement = qrRef.current.querySelector("svg");
    
    // Get the SVG data as a string
    const svgData = new XMLSerializer().serializeToString(svgElement);
    
    // Create a Blob from the SVG string
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
  
    // Create a new image
    const img = new Image();
    img.onload = () => {
      // Create a canvas and draw the image on it
      const canvas = document.createElement("canvas");
      canvas.width = 256; // Set width based on your QR code size
      canvas.height = 256; // Set height based on your QR code size
  
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0);
  
      // Convert canvas to PNG and trigger download
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "kankotri-link.png"; // Filename for the download
      link.click();
  
      // Clean up
      URL.revokeObjectURL(url);
    };
    
    // Set the source of the image to the Blob URL
    img.src = url;
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleClick}
        className="px-6 py-3 mb-4 text-white bg-blue-500 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95"
      >
        {loading ? "Creating..." : "Create Your Kankotri"}
      </button>
      
      {loading && (
        <div className="loader animate-spin border-t-2 border-blue-500 rounded-full h-12 w-12 mb-4"></div>
      )}

      {link && (
        <div className="text-center">
          <p className="mb-2">Your Kankotri Link:</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            {link}
          </a>
          {qrVisible && (
            <div className="mt-4" ref={qrRef}>
              <QRCode value={link} size={256} />
              <button
                onClick={downloadQRCode}
                className="mt-2 text-white bg-blue-500 rounded py-2 px-4 hover:bg-blue-600"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateKankotri;
