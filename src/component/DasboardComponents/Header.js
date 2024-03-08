import React, { useRef, useState, useEffect } from 'react';
import "./Header.css";
import Webcam from 'react-webcam';
import user from "../images/user.jpeg";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import ReactPinInput from 'react-pin-input';

const Header = ({ blur, setBlur }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [camera, setCamera] = useState(() => {
        // Retrieve camera state from localStorage or default to true
        return localStorage.getItem('camera') === 'false' ? false : true;
    });
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const [pin, setPin] = useState('');

    useEffect(() => {
        if (!camera) {
            setBlur(false); // If camera is turned off, remove blur effect
        }
    }, [camera, setBlur]);

    const handleSubmit = () => {
        console.log('PIN submitted:', pin);
        console.log("camera", camera);
        setCamera(prevCamera => {
            const newCameraState = !prevCamera;
            localStorage.setItem('camera', newCameraState); // Store camera state in localStorage
            return newCameraState;
        });
        console.log("camera", camera);
        handleCloseModal();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            captureScreenshot();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const captureScreenshot = () => {
        if (camera && webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc);
        }
    };

    const handleProfile = (e) => {
        e.preventDefault();
        navigate('/profile');
    };
    const handleHome = (e) => {
        e.preventDefault();

        navigate('/dashboard');
    };

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };


    const handlePinChange = (value) => {
        setPin(value);
    };

    return (
        <div className='header-container'>
            <h2 className='header-title' onClick={handleHome}>Transactions</h2>
            {camera && <div className="capture-image">
                <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                        width: 80,
                        height: 80,
                        facingMode: 'user',
                    }}
                    ref={webcamRef}
                    style={{ borderRadius: "50%", marginTop: "-10px" }}
                />
            </div>}
            <div className="wrapper">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type='text' placeholder='Search for some' />
                <i className="fa-solid fa-gear"></i>
                <i className="fa-solid fa-users" onClick={handleOpenModal} style={{ backgroundColor: camera ? "rgb(239, 239, 239)" : "rgba(44, 39, 154, 0.902)", color: camera ? "#666" : "#ede9e9" }}></i>
                <img src={user} alt='User Image' onClick={handleProfile} />
            </div>
            {modalIsOpen && <Modal
                isOpen={handleOpenModal}
                onRequestClose={() => { }}
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
                <h2 style={{ alignItems: 'center', margin: '20px', display: 'flex', justifyContent: 'center' }}>Enter PIN</h2>
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
                    style={{ backgroundColor: 'rgba(44, 39, 154, 0.902)', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: "100px", marginTop: "30px" }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </Modal>}

        </div>


    );
}

export default Header;
