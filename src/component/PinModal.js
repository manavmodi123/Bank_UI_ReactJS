
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPinInput from 'react-pin-input';
import { useNavigate } from 'react-router-dom';

const PinModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');

  const handlePinChange = (value) => {
    setPin(value);
  };

  const handleSubmit = () => {
    console.log('PIN submitted:', pin);
    // Save the PIN or perform any other actions
    onClose();
    // navigate('/Login');
    navigate('/capture-image-register');
    
    

  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {}}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      contentLabel="Enter PIN"
      style={{
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          position: 'relative',
          top: 'auto',
          left: 'auto',
          right: 'auto',
          bottom: 'auto',
          margin: 'auto',
          width: '350px',
          height: '230px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          border: 'none',
          backgroundColor: '#ffffff',
        },
      }}
    >
      <h2 style={{ alignItems: 'center', margin: '20px', display: 'flex', justifyContent: 'center' }}>Generate PIN</h2>
      <ReactPinInput
        length={4}
        focus
        secret
        onChange={handlePinChange}
        inputStyle={{
          marginLeft: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          padding: '8px',
        }}
        type="numeric"
      />
      <button
        style={{  backgroundColor: 'rgba(44, 39, 154, 0.902)', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' , display: 'flex', justifyContent: 'center' , alignItems: 'center',marginLeft:"100px",marginTop:"30px"}}
        onClick={handleSubmit}
      >
        Create
      </button>
    </Modal>
  );
};

export default PinModal;
