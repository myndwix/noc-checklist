import {React, useEffect, useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import ModalMachines from './modals/ModalMachines';
import ModalView from './modals/ModalView';
import {EyeIcon} from '@heroicons/react/24/solid';
import axios from 'axios';
import moment from 'moment-timezone';
// import moment from 'moment';
import { PencilSquareIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import User from './utils/User';

 
const Checklists = () => {

    let [isNew, setIsNew] = useState(false);
    let [modelOpen, setModelOpen] = useState(false);
    let [modelViewOpen, setModelViewOpen] = useState(false);
    let [checklists, setChecklists] = useState([]);
    let [devices, setDevices] = useState('');
    let [hardwares, setHardwares] = useState('');
    let [viewDevices, setViewDevices] = useState('');
    let [viewHardwares, setViewHardwares] = useState('');
    let [showUser, setShowUser] = useState(false);
    let [error, setError] = useState('');
    let [comment, setComment] = useState([]);

    function closeModel(){
        setModelOpen(false);
    }
    function closeModelView(){
        setModelViewOpen(false);
    }

    function toggleUser(){
        setShowUser(!showUser);
    }

//     function getDevices(){
//         axios.all([axios.get('api/checklistdevices'), axios.get('api/checklistdetails')])
//         .then(axios.spread(({data:res1}, {data:res2}) => {setDevices(res1); setHardwares(res2); }))
//         .catch((err) => setError(err.message))
//    }
   function getDevices(){
    axios.post('api/createtmpchecklist',{})
    .then(({data}) => {setDevices(data[0]); setHardwares(data[1]); })
    .catch((err) => setError(err.message))
    }

    function updateHardwares(hardwareId, status){
        const checklistDetailId = Object.values(hardwares).filter(hardware => hardware.hardwareid===hardwareId)
        const newHardwares = Object.values(hardwares).map(hardware => hardware.checklistdetailid===checklistDetailId[0].checklistdetailid ? {...hardware, status: status}: hardware);
        setHardwares(newHardwares);
    }

    function viewChecklist(checklistId){
       axios.post('api/viewchecklist', {checklistid: checklistId}).then(({data}) => {setViewHardwares(data[0]); setViewDevices(data[1]);}).catch(err => console.log(err))
    }


  function createNewChecklist(){
    axios.post('api/createchecklist', hardwares).then(response => console.log(response)).catch(err => console.log(err));
    axios.post('api/createcomment', comment[0]).then(response => console.log(response)).catch(err => console.log(err));
    console.log(comment)
  }

  function getChecklists(){

      axios.get('api/checklists').then(({data}) => setChecklists(data)).catch((err) => setError(err.message));
  }


  function getComments(hardwareId, comment){
      setComment(
          prevComment => [...prevComment, {hardwareid:hardwareId, comment: comment}]
      )
  }

    useEffect(() => {
        getChecklists();
    },[]);

    return (
        <>
        <div className='fixed top-0 w-full px-4 py-2 bg-white z-10'>
            <div className='w-full flex justify-between items-center'>
                <button className='flex items-center px-3 py-2 text-sm font-normal text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors duration-150' onClick={() => {setModelOpen(true); getDevices(); setIsNew(true)}}>
                <PencilSquareIcon className='w-5 mr-1' />
                New
                </button>

                <div className='relative'>
                    <User toggleUser={toggleUser}/>
                    {showUser && <div className='w-max p-2 bg-gray-800 absolute top-10 right-0 shadow-sm z-50 rounded'>
                        <p className='text-gray-100 text-sm font-medium mb-2 cursor-pointer hover:text-gray-700'>Change Password</p>
                        <button className='px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 text-sm font-normal rounded transition-color duration-150'>Sign out</button>
                    </div>}
                </div>
            </div>

        </div>
        <div className='w-full h-screen bg-gray-100 overflow-y-auto'>
            
            
        <div className='lg:w-9/12 mx-auto'>


                <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                    
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 mt-10">
                        <table className="min-w-full divide-y divide-gray-300">
                        <thead className='bg-white'>
                            <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500 sm:pl-3">
                                Checklist No
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
                                Date
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
                                Time
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
                                Status
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                <span className="sr-only">View</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white overflow-y-auto">
                            {checklists.map((person, idx) => (
                            <tr key={idx} className="even:bg-gray-50">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-3">
                                {person.checklistid}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 font-medium text-sm text-gray-500">{moment(person.checklistdate).format('DD/MM/YYYY')}</td>
                                <td className="whitespace-nowrap px-3 py-4 font-medium text-sm text-gray-500">{moment.utc(person.createdtime).format('hh:mm')}</td>
                                <td className={`w-24 border-b-2 border-white whitespace-nowrap px-3 text-center py-4 font-medium text-sm ${person.status===1?'bg-green-300 text-green-700': 'bg-orange-300 text-orange-800'}`}>{person.status===1 ? 'Approved' : 'Pending'}</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                    <a onClick={() => {setModelViewOpen(true); viewChecklist(person.checklistid); setIsNew(false);}} href="#" className="text-gray-600 hover:text-gray-900">
                                        <EyeIcon className='' width={20}/>
                                    </a>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                  
                </div>
                </div>
        </div>
        <ModalMachines isOpen={modelOpen} isClose={closeModel} devices={devices} hardwares={hardwares} updateHardwares={updateHardwares} createNewChecklist={createNewChecklist} isNew={isNew} getComments={getComments} comment={comment} getChecklists={getChecklists}/>
        <ModalView isOpen={modelViewOpen} isClose={closeModelView} devices={viewDevices} hardwares={viewHardwares} getChecklists={getChecklists} checklists={checklists} isNew={isNew}/>

        </div>
        </>
    );
}

export default Checklists;
