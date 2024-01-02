import React, { useState } from 'react';
import DropDown from './utils/DropDown';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'


const Server = ({id, name, cssclass, modalStateOpen}) => {
    return (
    <div className={`py-1 px-5 flex justify-between bg-white shadow-sm ${cssclass}`}>
        <div className='flex items-center'>
          <span className='inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full'></span>
          <p className='text-sm font-medium text-gray-800 cursor-pointer hover:text-blue-500 transition-colors duration-150' onClick={() => modalStateOpen(id,name)}>{name}</p>
        </div>

        <div className='flex items-center'>
          {/* <span className='px-3 py-1 bg-green-200 font-medium text-md mr-4 cursor-pointer hover:bg-green-300 transition-colors duration-200'>OK</span> */}
          <div className='relative'>
            <span className='p-[0.2rem] rounded-full bg-red-500 absolute z-10 right-2 text-xs text-white'>1234</span>
            <DropDown winHeight={window.innerHeight}/>
          </div>
          {/* <div className='w-60 hidden md:flex'>
            <p className='text-xs font-medium text-gray-700'>All good!</p>
          </div> */}
        </div>

      </div>
    );
}

export default Server;
