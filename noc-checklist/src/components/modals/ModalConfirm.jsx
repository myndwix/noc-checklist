import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState, useRef, useMemo } from 'react'
import React from 'react';

const ModalConfirm = ({isOpens, isClose, createNewChecklist, getChecklists}) => {
  const [isLoading, setIsLoading] = useState(false);
  function Loading(){
    setIsLoading(true);
    setTimeout(() => {setIsLoading(false); isClose(); getChecklists()},1000)
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
                <Dialog.Panel className="w-1/4 max-w-4xl min-w-max overflow-hidden transform rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <div className='w-full'>
                     <button onClick={() => {createNewChecklist(); Loading();}} className='bg-blue-200 px-3 py-2 rounded text-blue-700 font-normal hover:bg-blue-300 transition-colors duration-150'>{isLoading ? 'Saving..' : 'Yes'}</button>
                     <button onClick={() => isClose()} className='bg-gray-200 px-3 py-2 ml-1 rounded text-gray-700 font-normal hover:bg-gray-300 transition-colors duration-150'>No</button>
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


 

export default ModalConfirm;