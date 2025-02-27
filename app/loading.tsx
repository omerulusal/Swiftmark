import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <FaSpinner className='animate-spin text-blue-500 text-6xl' />
            <span className='ml-4 text-black text-2xl'>Yükleniyor...</span>
        </div>
    );
}

export default Loading;