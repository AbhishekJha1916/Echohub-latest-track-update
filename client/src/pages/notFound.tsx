import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
            <h2 className="text-3xl font-[Ubuntu] text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link
                to="/"
                className="px-6 py-3 text-white bg-blue-500 rounded-full font-[Ubuntu] hover:bg-blue-600 transition duration-300"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default PageNotFound;
