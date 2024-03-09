import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./images/logo.png";
import PinModal from "./PinModal.js";

const Register = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');

    const navigate = useNavigate();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/Login');
    }
    //Validates every input feild using regex  expressions 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (!validatePassword(password)) {
            alert('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        openModal(); // Open the modal
    };
    /*Starts with one or more characters that are not whitespace or '@'.
    Followed by '@'.
    Followed by one or more characters that are not whitespace or '@'.
    Followed by '.'.
    Followed by one or more characters that are not whitespace or '@'.
    Ends. */

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    /*
    Contains at least one digit.
    Contains at least one lowercase letter.
    Contains at least one uppercase letter.
    Has a length of 8 characters or more.
    */

    const validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return regex.test(password);
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-15 w-20"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign Up to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                            First Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="first_name"
                                name="first_name"
                                type="email"
                                required
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last_name"
                                name="last_name"
                                type="email"
                                required
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="confirm_password"
                                name="confirm_password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            style={{ backgroundColor: "rgba(44, 39, 154, 0.902)" }}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500" style={{ color: "rgba(44, 39, 154, 0.902)" }}>
                    Already a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={handleLogin} style={{ color: "rgba(44, 39, 154, 0.902)" }}>
                        Login Here
                    </a>
                </p>
            </div>
            <PinModal isOpen={modalIsOpen} onClose={closeModal} />
        </div>
    );
};

export default Register;
