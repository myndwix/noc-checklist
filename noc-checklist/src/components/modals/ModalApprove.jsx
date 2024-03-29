import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState, useRef, useMemo } from 'react'
import React from 'react';
import axios from 'axios';

const ModalApprove = ({isOpens, isClose, checklistId, getChecklists}) => {
  const [isLoading, setIsLoading] = useState(false);
  function Loading(){
    setIsLoading(true);
    axios.post('api/approvechecklist', {checklistid: checklistId}).then(response => {
        setTimeout(() => {setIsLoading(false); isClose(); getChecklists()},1000);
    }).catch(err => console.log(err.message))
    
  }

  return (
    <>
      <Transition appear show={isOpens} as={Fragment}>
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

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-1/4 max-w-4xl overflow-hidden transform rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <div className='w-full'>
                     <button onClick={() => {Loading();}} className='bg-green-200 px-4 py-2 rounded text-green-700 font-normal hover:bg-green-300 transition-all duration-150'>{isLoading ? 'Approving..' : 'Yes'}</button>
                     <button onClick={() => isClose()} className='bg-gray-200 px-4 py-2 ml-2 rounded text-gray-700 font-normal hover:bg-gray-300 transition-colors duration-150'>Cancel</button>
                  </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


 

export default ModalApprove;