import React, { FormEvent, useRef, useState , ChangeEvent} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const SignupPage: React.FC = () => {
    const firstNameRef = useRef<HTMLInputElement | null>(null)
    const lastNameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const dayRef = useRef<HTMLSelectElement | null>(null)
    const monthRef = useRef<HTMLSelectElement | null>(null)
    const yearRef = useRef<HTMLSelectElement | null>(null)
    const navigate = useNavigate()

    const [selectedGender, setSelectedGender] = useState('');
    const genderRef = useRef<HTMLInputElement | null>(null)


    const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedGender(event.target.value);
        genderRef.current = event.target; // Set the ref to the selected input
      };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const firstName = firstNameRef.current?.value
        const lastName = lastNameRef.current?.value
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        const gender = genderRef.current?.value;
        await Axios.post('http://localhost:8000/user/Signup', {
            firstName,
            lastName,
            email,
            password,
            gender,
        })
            .then((response) => {
                console.log(response);
                navigate('/users/accounts/login')
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
                                        ref={firstNameRef}
                                    />
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]"
                                        placeholder="Last Name"
                                        ref={lastNameRef}
                                    />
                                </div>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]"
                                    placeholder="Email"
                                    ref={emailRef}
                                />
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]"
                                    placeholder="Password"
                                    ref={passwordRef}
                                />
                                <p className="text-[#8B8B8B] font-[Ubuntu]">Date of Birth</p>
                                <div className="flex gap-4">
                                    <select
                                        className="w-1/3 px-4 py-3 rounded-full border-none text-[#8B8B8B] bg-gray-200 font-[Ubuntu]"
                                        ref={dayRef}
                                        value={dayRef.current?.value}
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
                                        value={monthRef.current?.value}
                                        ref={monthRef}
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
                                        value={yearRef.current?.value}
                                        ref={yearRef}
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
                                            checked={selectedGender === 'male'}
                                            onChange={handleGenderChange}
                                            ref={selectedGender === 'male' ? genderRef : null}
                                        />
                                        <span className="font-[Ubuntu]">Male</span>
                                    </label>
                                    <label className="flex items-center gap-2 w-auto px-4 py-3 rounded-full border-none bg-gray-200 font-[Ubuntu]">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            className="form-radio text-blue-600"
                                            checked={selectedGender === 'female'}
                                            onChange={handleGenderChange}
                                            ref={selectedGender === 'female' ? genderRef : null}
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
