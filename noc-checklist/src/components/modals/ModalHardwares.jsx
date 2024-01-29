import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState, useRef, useMemo } from 'react'
import React from 'react';
import HardwareView from '../HardwareView';
import Comments from '../CommentsView';
import Hardware from '../Hardware';

const ModalHardwares = ({isOpenP, modalStateClose, serverId, serverName, hardwares, updateHardwares, isNew, getComments, comment}) => {
  let [dHeight, setDHeight] = useState(0);
  let divHeight = useRef(0);
  let [commentPosition, setCommentPosition] = useState({x:0, y:0});

console.log(commentPosition)
  // console.log('Heyigt' + divHeight.current.clientHeight)
  return (
    <>
      <Transition appear show={isOpenP} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => modalStateClose()}>
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

          <div className="fixed inset-0 overflow-y-auto" onClick={() => setDHeight(divHeight.current.getBoundingClientRect().height)}>
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
                <Dialog.Panel className="w-full max-w-4xl transform rounded-2xl bg-gray-200 p-6 text-left align-middle shadow-xl transition-all" ref={divHeight}>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5"
                  >
                    {serverName}
                  </Dialog.Title>
                  <div className='w-full '>
                      {isNew ? <Hardware serverId={serverId} hardwares={hardwares} divheight={dHeight} setCommentPosition={setCommentPosition} updateHardwares={updateHardwares} getComments={getComments} comment={comment}/>
                    :   
                     <HardwareView serverId={serverId} hardwares={hardwares} divheight={dHeight} setCommentPosition={setCommentPosition} updateHardwares={updateHardwares}/>
                    }

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


 

export default ModalHardwares;