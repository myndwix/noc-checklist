import {React, useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import ModalMachines from './ModalMachines';
import ModalView from './ModalView';
import {EyeIcon} from '@heroicons/react/24/solid'

const checklist = [
    { checklistno: 'NOCCHL0000000001', date: '24/10/2023', time: '09:45', status: 'Approved' },
    { checklistno: 'NOCCHL0000000002', date: '25/10/2023', time: '10:04', status: 'Approved' },
    { checklistno: 'NOCCHL0000000003', date: '26/10/2023', time: '09:39', status: 'Pending' },
    // More checklist...
  ]

const Checklists = () => {

    let [modelOpen, setModelOpen] = useState(false);
    let [modelViewOpen, setModelViewOpen] = useState(false);
    function closeModel(){
        setModelOpen(false);
    }
    function closeModelView(){
        setModelViewOpen(false);
    }

    return (
        <div className='w-full h-screen bg-gray-100 p-4 overflow-y-auto'>
            
        <div className='lg:w-9/12 mx-auto'>

             <button className='px-4 py-2 bg-indigo-600 rounded-md text-white' onClick={() => setModelOpen(true)}>+ Create New</button>
                <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                        <thead className='bg-white'>
                            <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                Checklist No
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Date
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Time
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Status
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                <span className="sr-only">View</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {checklist.map((person) => (
                            <tr key={person.checklistno} className="even:bg-gray-50">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                {person.checklistno}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.date}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.time}</td>
                                <td className={`whitespace-nowrap px-3 py-4 text-sm text-white ${person.status==='Approved'?'bg-green-300': 'bg-orange-300'}`}>{person.status}</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                <a onClick={() => setModelViewOpen(true)} href="#" className="text-gray-600 hover:text-gray-900">
                                <EyeIcon width={20}/>

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
        <ModalMachines isOpen={modelOpen} isClose={closeModel}/>
        <ModalView isOpen={modelViewOpen} isClose={closeModelView}/>

        </div>

    );
}

export default Checklists;
