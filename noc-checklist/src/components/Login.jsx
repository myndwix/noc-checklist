import React from 'react';
import {Route, Link} from 'react-router-dom';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const Login = () => {
    return (
        <>
            <div className='flex w-full h-screen' >
                
                <div className='flex items-center justify-center w-full p-10 opacity-90'>
                            <div className='flex flex-col w-1/4 h-2/3 min-w-max min-h-[30rem] justify-between items-center bg-gray-200 rounded-3xl shadow-md py-44 px-3'>
                                <h1 className='text-4xl font-bold text-neutral-600 mb-3'>NOC</h1>
                                <div className='flex flex-col'>
                                    <input className='w-80 px-3 py-2 outline-none ring-1 ring-blue-900 focus:ring-2 text-gray-700 transition-all duration-150' type="text" placeholder='Username' />
                                    <input className='w-80 px-3 py-2 outline-none mt-2 ring-1 ring-blue-900 focus:ring-2 text-gray-700 transition-all duration-150' type="password" placeholder='Password' />
                                    <Link to='/checklist'>

                                    <button  className='w-80 px-3 py-2 outline-none bg-blue-900 hover:bg-blue-950 mt-2 text-white transition-colors duration-150'>Sign in</button>
                                    </Link>
                                </div>

                            </div>

                </div>
                {/* <div className='flex flex-col w-full justify-center items-center text-neutral-50'>
                    <h1 className='font-bold text-6xl'>MALDIVES</h1>
                    <h1 className='font-bold text-6xl'>AIRPORTS</h1>
                    <h1 className='font-bold text-6xl'>COMPANY Co</h1>
                </div> */}
            </div>
        <div className='absolute inset-0 -z-50' style={{backgroundImage:`url(${img4})`, backgroundSize:'cover'}}></div>

        </>
    );
}

export default Login;
