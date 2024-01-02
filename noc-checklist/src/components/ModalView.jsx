import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState, useRef, useMemo } from 'react'
import React from 'react';
import Machines from './Machines';

const ModalView = ({isOpen, isClose}) => {

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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-9/12 mx-auto overflow-hidden transform rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5"
                  >
                    <div className='flex  w-max items-center py-3'>
                        <button onClick={() => setOpenModalConfirm(true)} className='px-2 py-1 text-md font-semibold text-white rounded bg-green-400 hover:bg-green-500 transition-colors duration-150'>Confirm</button>
                        <p className='font-semibold text-sm text-gray-800 ml-2'>NOCCHL0000000001</p>
                    </div>
                  </Dialog.Title>
                  <Machines/>

                  
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