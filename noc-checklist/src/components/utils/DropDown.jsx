import { Fragment, useState, useRef, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({winHeight}) {
    const [option, setOption] = useState('OK');
    const [btnPosition, setBtnPosition] = useState(null);
 
  return (
    <Menu as="div" className="relative inline-block text-left mr-4">
      <div>
        <Menu.Button onClick={(e) => {setBtnPosition(winHeight - e.clientY ); console.log(window.innerHeight + ' ' + e.clientY + ' ' + winHeight)}} className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${option === 'Warning' ? 'text-yellow-400': option === 'Fault' ? 'text-orange-500': 'text-green-500' }`}>
          {option}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
        <Menu.Items className={`absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${btnPosition<100? 'bottom-10': ''}`}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a onClick={() => setOption('OK')}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  OK
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={() => setOption('Warning')}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Warning
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={() => setOption('Fault')}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Fault
                </a>
              )}
            </Menu.Item>
              
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
