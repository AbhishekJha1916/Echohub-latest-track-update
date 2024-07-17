    import React, { useState, FormEvent, useRef } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import axios from 'axios';
    axios.defaults.withCredentials = true;

    // interface FormData {
    //   username: string;
    //   password: string;
    // }

    const LoginPage: React.FC = () => {
        // const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
        const [error, setError] = useState<string>('');
        const emailRef = useRef<HTMLInputElement | null>(null);
        const passwordRef = useRef<HTMLInputElement | null>(null);
        
        const navigate = useNavigate();

        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const email = emailRef.current?.value ;
            const password = passwordRef.current?.value ;
            try {
                const response = await axios.post('http://localhost:8000/user/login', {
                    email ,
                    password
                });
                console.log(response);
                const token = response.data.token;
                localStorage.setItem('token', token); 
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                navigate('/dashboard'); // Navigate to the dashboard or another protected route
            } catch (error) {
                setError('Invalid username or password');
            }
        };

        const googleRedirect = async () =>{
            try {
                window.open("http://localhost:8000/user/google/redirect", "_self")
            } catch (error) {
                console.log(error)
            }
        }

        return (
            <div className="flex h-screen">
                {/* Left Half */}
                <div className="flex flex-col  md:w-[50vw] p-[50px] bg-[#EFF2F6] ">
                    <button className="flex items-center mb-4 text-blue-500">
                        <Link to="/">
                            <span className="material-icons text-[#333] text-4xl">arrow_back</span>
                        </Link>
                    </button>
                    <div className="w-full p-10 flex flex-col justify-center items-center m-auto">
                        <h1 className="text-7xl font-semibold mb-[30px] text-center mt-[-100px] text-[#333] font-[Ubuntu]">Login</h1>
                        <p className="mb-[70px] text-center text-[#333] font-[Ubuntu]">Please login to your account.</p>
                        {error && <p className="mb-4 text-red-500">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    ref={emailRef}
                                    type="text"
                                    name="username"
                                    className="w-[600px] px-4 py-[15px] mb-[20px] rounded-[30px] border-[none] bg-[#d9d9d9ad] font-[Ubuntu]"
                                    placeholder="Username or Email"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    name="password"
                                    // value={formData.password}
                                    // onChange={handleChange}
                                    className="w-[600px] px-4 py-[15px] mb-[20px] rounded-[30px] border-[none] bg-[#d9d9d9ad] font-[Ubuntu]"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex items-center justify-between mb-[30px]">
                                <label className="checkbox style-c flex items-center mr-2 font-[Ubuntu] text-[#333]">
                                    <input type="checkbox" />
                                    <span className="checkbox__checkmark"></span>
                                    <span className="checkbox__body ml-2">Remember me</span>
                                </label>
                                <a href="#" className="text-[#333] font-[Ubuntu]">Forgot Password?</a>
                            </div>
                            <button className="w-[600px] bg-[#fff] py-[15px] text-[#6A94FF] border border-[#6A94FF] rounded-[30px] mb-4 font-[Ubuntu] hover:bg-[#6A94FF] hover:text-white">
                                Login
                            </button>
                        </form>
                        <div className="text-center mb-[20px] font-[Ubuntu]">or</div>
                        
                        <button onClick={googleRedirect} className="w-[600px] bg-[#fff] py-[15px] text-[#6A94FF] border border-[#6A94FF] rounded-[30px] mb-4 font-[Ubuntu] hover:bg-[#6A94FF] hover:text-white">
                            Login with Google
                        </button>
                        <button className="w-[600px] bg-[#fff] py-[15px] text-[#6A94FF] border border-[#6A94FF] rounded-[30px] mb-4 font-[Ubuntu] hover:bg-[#6A94FF] hover:text-white">
                            Login with Mobile Number
                        </button>
                    </div>
                </div>

                {/* Right Half */}
                <div className="relative w-1/2 text-white p-10 flex flex-col justify-center items-center background-image">
                    <h2 className="text-7xl font-semibold mb-[250px] mt-[-245px] font-[Ubuntu]">Welcome Back</h2>
                    <div className="text-center flex flex-col justify-center items-center">
                        <p className="mb-4 font-[Ubuntu] text-2xl">Want to create a new account?</p>
                        <div className="button-container">
                            <Link to="/users/accounts/signup">
                                <button className="btn">
                                    <span className="material-icons">arrow_forward</span>
                                </button>
                            </Link>
                            <p className="signup-text">Sign Up</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default LoginPage;
