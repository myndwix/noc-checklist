import {React, useEffect, useRef, useState} from 'react';
import DropDown from './utils/DropDown';
import PopComment from './utils/PopComment';
import axios from 'axios';
import CommentsView from './CommentsView';


const HardwareView = ({serverId, hardwares, divheight, setCommentPosition, updateHardwares}) => {
    const [showComments, setShowComments] = useState(false);
    const [commentsId, setCommentsId] = useState(0);
    const [hardwareId, setHardwareId] = useState(0);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        axios.post('api/comments', {checklistid: hardwares[0].checklistid ? hardwares[0].checklistid : ''}).then(({data}) => setComment(data)).catch((err) => console.log(err));
    },[]);
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
                {/* <DropDown winHeight={divheight} hardwarestatus={hard.status} updateHardwares={updateHardwares} hardwareid={hard.hardwareid}/> */}
                <span className={`px-3 py-1 block rounded mr-5 text-neutral-50 ${hard.status===2 ? 'bg-yellow-500':hard.status===3 ? 'bg-red-500': 'bg-green-500'}`}>{hard.status===2 ? 'Warning':hard.status===3 ? 'Fault': 'OK'}</span>
                </div>
                <div className='relative items-center w-20 hidden md:flex' onClick={(e) => setCommentPosition({x:e.currentTarget.getBoundingClientRect().x, y:e.currentTarget.getBoundingClientRect().y})}>
                    <CommentsView hardwareid={hard.hardwareid} comment={comment} checklistid={hardwares[0].checklistid}/>
                </div>
            </div>
        </div>
            )
        )
    
}

export default HardwareView;
