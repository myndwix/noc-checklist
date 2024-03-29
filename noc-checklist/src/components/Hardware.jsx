import {React, useEffect, useRef, useState} from 'react';
import DropDown from './utils/DropDown';
import PopComment from './utils/PopComment';
import axios from 'axios';
import Comments from './Comments';


const Hardware = ({serverId, hardwares, divheight, setCommentPosition, updateHardwares, getComments, comment}) => {
    const [showComments, setShowComments] = useState(false);
    const [commentsId, setCommentsId] = useState(0);
    const [hardwareId, setHardwareId] = useState(0);

    // console.log('hhhh', hardwares.filter(i => i.deviceid===1))
    return(
        hardwares.filter(hardware => hardware.deviceid===serverId).map((hard,idx) =>
            <div key={idx} className={`py-1 px-5 flex justify-between bg-white shadow-sm mt-1`}>
            <div className='flex items-center'>
                <span className='inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full'></span>
                <p className='text-sm font-medium text-gray-800 transition-colors duration-150'>{hard.hardwarename}</p>
                <p className='ml-2 text-xs font-medium text-gray-400 transition-colors duration-150'>{hard.hardwaredescription}</p>
            </div>

            <div className='flex items-center'>
                {/* <span className='px-3 py-1 bg-green-200 font-medium text-md mr-4 cursor-pointer hover:bg-green-300 transition-colors duration-200'>OK</span> */}
                <div className='relative'>
                {/* <span className='px-[0.2rem] py-[0.1rem] rounded-full bg-red-500 absolute z-10 right-2 text-xs text-white'>2</span> */}
                <DropDown winHeight={divheight} hardwarestatus={hard.status} updateHardwares={updateHardwares} hardwareid={hard.hardwareid}/>
                </div>
                <div className='relative items-center w-20 hidden md:flex' onClick={(e) => setCommentPosition({x:e.currentTarget.getBoundingClientRect().x, y:e.currentTarget.getBoundingClientRect().y})}>
                    {/* <p className='text-xs font-medium text-gray-700 cursor-pointer mr-3'>All good!</p> */}
                    <Comments hardwareid={hard.hardwareid} comment={comment} checklistid={hardwares[0].checklistid} getComments={getComments}/>
                    {/* <PopComment /> */}
                </div>
            </div>
        </div>
            )
        )
    
}

export default Hardware;
