import { Fragment, useState, useRef, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Comments({winHeight}) {
    const [option, setOption] = useState('Comments');
    const [btnPosition, setBtnPosition] = useState(null);
 
  return (
    <Menu as="div" className="relative inline-block text-left mr-4">
      <div>
        <Menu.Button onClick={(e) => {setBtnPosition(winHeight - e.clientY ); console.log(window.innerHeight + ' ' + e.clientY + ' ' + winHeight)}} className='px-3 bg-white text-gray-800 py-1 rounded font-medium text-sm ring-1 ring-gray-300'>
          {option}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items static className={`absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${btnPosition<200? 'bottom-10': ''}`}>
          <div className="py-1 px-2">
            <Menu.Item>
              {({ close }) => (
                <div onClick={() => {}}>

                  <p className='bg-blue-400 text-white px-2 py-1 rounded mt-1 text-sm w-max'>Cable damaged</p>
                  <p className='bg-blue-400 text-white px-2 py-1 rounded mt-1 text-sm w-max'>Disconnected</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div>

                  <input className='px-2 py-1 ring-1 ring-gray-300 my-2 text-sm font-normal' type="text" placeholder='Enter comment'/>
                </div>
              )}
            </Menu.Item>
            
              
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
