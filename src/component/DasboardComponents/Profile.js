import React, { useEffect } from 'react'
import "./Profile.css";
import Sidebar from './Sidebar'
import Header from './Header';
import user from "../images/user.jpeg";




const Profile = ({ blur, setBlur }) => {
    useEffect(() => {
        const container = document.querySelector('.profile-container');
        if (container) {
            container.style.filter = blur ? 'blur(8px)' : 'none';
        }
    }, [blur]);
    return (
        <div className='dashboard'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='header'>
                <Header blur={blur} setBlur={setBlur} />
            </div>
            <div className='profile-container'>
                <div className='profile-card'>
                    <h1 className='profile-title'>Edit Profile</h1>
                    <div className='user'>
                        <div className='user-image'>
                            <img src={user} />
                        </div>
                        <div className='user-details'>
                            <form>
                                <div className='feild-row'>
                                    <div className='input-feild'>
                                        <label>Your Name:</label>
                                        <input placeholder="Manav Modi" />
                                    </div>
                                    <div className='input-feild'>
                                        <label>User Name:</label>
                                        <input placeholder='Manav123' />
                                    </div>
                                </div>

                                <div className='feild-row'>
                                    <div className='input-feild'>
                                        <label>Email</label>
                                        <input placeholder='manav.modi@somaiya.edu' />
                                    </div>
                                    <div className='input-feild'>
                                        <label>Password</label>
                                        <input placeholder='**********' type='password' />
                                    </div>
                                </div>

                                <div className='feild-row'>
                                    <div className='input-feild'>
                                        <label>Date of Birth</label>
                                        <input placeholder='20th March 2000' />
                                    </div>
                                    <div className='input-feild'>
                                        <label>Permanent Address</label>
                                        <input placeholder='K J Somaiya College Of Engineering' />
                                    </div>
                                </div>
                                <div className='feild-row'>
                                    <div className='input-feild'>
                                        <label>Postal Code</label>
                                        <input placeholder='400 001' />
                                    </div>
                                    <div className='input-feild'>
                                        <label>Country</label>
                                        <input placeholder='INDIA' />
                                    </div>
                                </div>

                                <button className='save'>Save</button>

                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile
