import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState, useRef, useMemo } from 'react'
import React from 'react';
import Machines from '../Machines';
import ModalConfirm from './ModalConfirm';
import { PlusCircleIcon } from '@heroicons/react/24/solid'


const ModalMachines = ({isOpen, isClose, devices, hardwares, updateHardwares, createNewChecklist, isNew, getComments, comment, getChecklists}) => {
  let [openModalConfirm, setOpenModalConfirm] = useState(false);

  function openConfirm(){
    setOpenModalConfirm(true)
  }
  function closeConfirm(){
    setOpenModalConfirm(false);
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
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-50">
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
                    <div className='flex justify-end w-full items-center'>
                        {/* <p className='font-semibold text-sm text-gray-800 ml-2'>NOCCHL0000000001</p> */}
                        <button onClick={() => setOpenModalConfirm(true)} className='flex items-center px-3 py-2 text-sm font-normal text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors duration-150'>
                          
                          <PlusCircleIcon className='w-7 mr-1'/>
                          Create
                          </button>
                    </div>
                  </Dialog.Title>
                  <div className='h-[calc(100vh-9rem)] overflow-y-auto'>

                  <Machines devices={devices} hardwares={hardwares} updateHardwares={updateHardwares} isNew={isNew} getComments={getComments} comment={comment}/>
                  </div>

                <ModalConfirm isOpens={openModalConfirm} isClose={closeConfirm} createNewChecklist={createNewChecklist} getChecklists={getChecklists}/>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


 

export default ModalMachines;