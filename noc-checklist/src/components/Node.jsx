import React from 'react';
import DropDown from './utils/DropDown';

const Node = ({id, name, cssclass, modalStateOpen, status, comments}) => {
    return (
    <div className={`py-1 px-5 flex justify-between bg-gray-100 shadow-sm ${cssclass}`}>
        <div className='flex items-center'>
          <span className='inline-block w-2 h-2 bg-gray-400 mr-2 ml-4'></span>
          <p className='text-sm font-medium text-gray-800 cursor-pointer hover:text-blue-500 transition-colors duration-150' onClick={() => modalStateOpen(id,name)}>{name}</p>
        </div>

        <div className='flex items-center'>
          <div className='relative'>
            {comments!=0? <span className='w-5 text-center p-[0.2rem] rounded-full ring-2 ring-neutral-50 bg-red-500 absolute z-10 right-2 text-xs text-white'>{comments===0 ? '' : comments}</span> : ''}
            {/* <span className='p-[0.2rem] rounded-full bg-red-500 absolute z-10 right-2 text-xs text-white'>1234</span> */}
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

export default Node;
