import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Checkmark } from 'react-checkmark';
import { useNavigate } from 'react-router-dom';



const CaptureImageRegister = () => {
  const webcamRef = useRef(null);
  const [capture, setCapture] = useState(true);
  const [showVerification, setShowVerification] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const delay = 2000; // 2 seconds delay
  
    const capturePhoto = () => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log('Photo captured successfully:', imageSrc);
        setTimeout(() => {
          setCapture(false); // Turn off capture after 2 seconds
          setShowVerification(true); // Show verification component after turning off capture
        }, 1000);
      }
      
    };
  
    const timerId = setTimeout(capturePhoto, delay);
  
    return () => clearTimeout(timerId); // Cleanup function
  }, []);

  useEffect(() => {
    if (showVerification) {
      // Redirect to the dashboard page after verification is done
      setTimeout(() => {
        navigate('/Login');
      }, 3000); // Redirect after 3 seconds
    }
  }, [showVerification, navigate]);
  
  return (
    <div className="capture-image">
      {capture && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            width: 100,
            height: 80,
            facingMode: 'user',
          }}
        />
      )}
      <div className='verification-continer' style={{margin:"30px"}}>
        {showVerification && <Checkmark size='150px' color="#4F46E5" onClose={() => setShowVerification(false)} />}
        {showVerification && <h1 style={{ marginTop:"10px",color: '#4F46E5', textAlign: 'center', fontWeight: 'bold' }}>Image Captured Successfully</h1>}      </div>
    </div>
  );
};

export default CaptureImageRegister;
