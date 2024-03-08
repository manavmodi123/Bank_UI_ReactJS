import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Login from './component/Login';
import CaptureImage from './component/CaptureImage';
import Dashboard from './Dashboard.js';
import Profile from './component/DasboardComponents/Profile.js';
import Register from './component/Register.js';
import PinModal from './component/PinModal.js';
import CaptureImageRegister from './component/CaptureImageRegister.js';

function App() {

  const [blur,setBlur] = useState(false);
  return (
    <div className="App">
      <Routes>
        
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path='/profile' element={<Profile blur = {blur} />} />
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard blur = {blur} setBlur = {setBlur} />} />
        <Route path="/capture-image-login" element={<CaptureImage />} />
        <Route path="/capture-image-register" element={<CaptureImageRegister />} />
      </Routes>
    </div>
  );
}

export default App;
