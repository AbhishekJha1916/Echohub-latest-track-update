import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const SignupPage: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/auth/signup', {
            firstName,
            lastName,
            email,
            password,
            gender,
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex h-screen">
            {/* Left Half */}
            <div className="w-1/2 text-white p-10 flex flex-col justify-center items-center background-image">
                <button className="flex items-center mt-0 ml-0 m-auto text-blue-500">
                    <Link to="/">
                        <span className="material-icons text-[#fff] text-4xl">arrow_back</span>
                    </Link>
                </button>
                <h2 className="text-7xl font-semibold font-[Ubuntu] pt-[50px]">Welcome to Family</h2>
                <div className="flex flex-col items-center justify-center h-[80vh]">
                    <div className="text-center flex flex-col justify-center items-center">
                        <p className="mb-4 font-[Ubuntu] text-2xl">Already have an account?</p>
                        <div className="button-container">
                            <Link to="/users/accounts/login">
                                <button className="btn">
                                    <span className="material-icons">arrow_back</span>
                                </button>
                            </Link>
                            <p className="signup-text">Login</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Half */}
            <div className="flex flex-col w-[50vw] p-[50px] bg-[#EFF2F6]">
                <div className="w-full p-10 flex flex-col justify-center items-center m-auto">
                    <h1 className="text-7xl font-semibold mb-[30px] text-center mt-[-0px] text-[#333] font-[Ubuntu]">Sign Up</h1>
                    <p className="mb-[40px] text-center text-[#333] font-[Ubuntu]">
                        Let’s get started.<br />
                        Want to be a part of something new?
                    </p>
                    <div className="max-w-lg mx-auto p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4 mb-4">
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]"
                                        placeholder="First Name"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]"
                                        placeholder="Last Name"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                                    />
                                </div>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]"
                                    placeholder="Email"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]"
                                    placeholder="Password"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                                <p className="text-[#8B8B8B] font-[Ubuntu]">Date of Birth</p>
                                <div className="flex gap-4">
                                    <select
                                        className="w-1/3 px-4 py-3 rounded-full border-none text-[#8B8B8B] bg-gray-200 font-[Ubuntu]"
                                        value={day}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setDay(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Day
                                        </option>
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        className="w-1/3 px-4 py-3 rounded-full border-none text-[#8B8B8B] bg-gray-200 font-[Ubuntu]"
                                        value={month}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Month
                                        </option>
                                        {[
                                            'January', 'February', 'March', 'April', 'May', 'June',
                                            'July', 'August', 'September', 'October', 'November', 'December',
                                        ].map((month, i) => (
                                            <option key={i} value={i + 1}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        className="w-1/3 px-4 py-3 rounded-full border-none text-[#8B8B8B] bg-gray-200 font-[Ubuntu]"
                                        value={year}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Year
                                        </option>
                                        {Array.from({ length: 125 }, (_, i) => (
                                            <option key={i} value={1900 + i}>
                                                {1900 + i}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <p className="text-[#8B8B8B] font-[Ubuntu]">Gender</p>
                                <div className="flex justify-center items-center gap-4">
                                    <label className="flex items-center gap-2 w-auto px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            className="form-radio text-blue-600"
                                            onChange={() => setGender('Male')}
                                        />
                                        <span className="font-[Ubuntu]">Male</span>
                                    </label>
                                    <label className="flex items-center gap-2 w-auto px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            className="form-radio text-blue-600"
                                            onChange={() => setGender('Female')}
                                        />
                                        <span className="font-[Ubuntu]">Female</span>
                                    </label>
                                </div>
                            </div>
                            <button className="w-full mt-[20px] bg-white py-3 text-blue-500 border border-blue-500 rounded-full font-[Ubuntu] hover:bg-blue-500 hover:text-white transition duration-300">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
