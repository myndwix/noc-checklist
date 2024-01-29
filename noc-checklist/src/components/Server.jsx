import React, { useState } from 'react';
import DropDown from './utils/DropDown';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'


const Server = ({id, name, cssclass, modalStateOpen, status, comments}) => {
    return (
    <div className={`py-1 px-5 flex justify-between bg-gray-100 shadow-sm ${cssclass}`}>
        <div className='flex items-center'>
          <span className='inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full'></span>
          <p className='text-sm font-medium text-gray-800 cursor-pointer hover:text-blue-500 transition-colors duration-150' onClick={() => modalStateOpen(id,name)}>{name}</p>
        </div>

        <div className='flex items-center'>
          {/* <span className='px-3 py-1 bg-green-200 font-medium text-md mr-4 cursor-pointer hover:bg-green-300 transition-colors duration-200'>OK</span> */}
          <div className='relative'>
            {comments!=0? <span className='w-5 text-center p-[0.2rem] rounded-full ring-neutral-50 ring-2 bg-red-500 absolute z-10 right-2 text-xs text-white'>{comments===0 ? '' : comments}</span> : ''}
            <button onClick={() => modalStateOpen(id,name)} className={`pl-2 py-1 rounded mr-5 pr-7 ${status===2 ? 'bg-yellow-500 text-neutral-100':status===3 ? 'bg-red-500 text-neutral-100': 'bg-green-500 text-neutral-100'}`}>{status===2 ? 'Warning':status===3 ? 'Fault': 'OK'}</button>
            {/* <DropDown winHeight={window.innerHeight}/> */}
          </div>
          {/* <div className='w-60 hidden md:flex'>
            <p className='text-xs font-medium text-gray-700'>All good!</p>
          </div> */}
        </div>

      </div>
    );
}

export default Server;
