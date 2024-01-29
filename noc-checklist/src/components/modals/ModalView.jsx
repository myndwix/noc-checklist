import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState, useRef, useMemo } from 'react'
import React from 'react';
import Machines from '../Machines';
import ModalApprove from './ModalApprove';
import {CheckCircleIcon} from '@heroicons/react/24/solid'

const ModalView = ({isOpen, isClose, devices, hardwares, updateHardwares, getChecklists, checklists, isNew}) => {
  //getChecklists is a function in checklist compononet used to rerender checklist after approval.
  let [openModalConfirm, setOpenModalConfirm] = useState(false);

  function openConfirm(){
    setOpenModalConfirm(true)
  }
  function closeConfirm(){
    setOpenModalConfirm(false);
  }
  let checklistid='';
  let checklistStatus = 0;
  if(devices)
  {
    checklistid = devices[0].checklistid;
    checklistStatus=Object.values(checklists).filter(ch => ch.checklistid === checklistid)[0].status;
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => isClose()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-9/12 mx-auto h-[calc(100vh-2rem)] transform rounded-2xl bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5"
                  >
                    <div className='flex w-full bg-gray-200 items-center justify-between py-3'>
                      <div className='flex'>
                        {!checklistStatus ? <button onClick={() => setOpenModalConfirm(true)} className='flex items-center px-3 py-2 text-sm font-normal ring-1 ring-green-400 text-green-600 rounded bg-green-100 hover:bg-green-500 hover:text-white transition-colors duration-300'>
                          Approve
                          </button> :
                          <button onClick={() => setOpenModalConfirm(true)} disabled className='flex items-center px-3 py-2 text-sm font-normal ring-1 ring-green-400 rounded bg-green-500 text-white transition-colors duration-300'>
                          Approved
                          <CheckCircleIcon className='w-7 ml-1'/>
                          </button>}
                        <button onClick={() => isClose()} className='px-3 py-2 ml-2 text-sm font-normal ring-1 ring-gray-400 text-gray-600 rounded bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors duration-150'>Cancel</button>
                      </div>
                        <p className='font-normal text-sm text-neutral-500 ml-2'><span className='font-bold'>No: </span>{checklistid}</p>
                    </div>
                  </Dialog.Title>
                  <div className='h-[calc(100vh-10rem)] overflow-y-auto'>
                    <Machines devices={devices} hardwares={hardwares} updateHardwares={updateHardwares} isNew={isNew}/>
                  </div>
                  <ModalApprove isOpens={openModalConfirm} isClose={closeConfirm} checklistId={checklistid} getChecklists={getChecklists} checklists={checklists}/>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


 

export default ModalView;