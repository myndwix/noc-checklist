import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'



export default function PopComment() {
  return (
    <div className="fixed top-16 w-full max-w-sm px-4 z-20">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md bg-orange-500 px-3 py-1 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <span>Comments</span>
              <ChevronDownIcon
                className={`${open ? 'text-orange-300' : 'text-orange-300/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 w-screen">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                
                  <div className="bg-gray-50 p-4">
                   <input className='bg-white px-2 py-1 outline-none' type="text" placeholder='Enter Comment' />
                   <button className='ring-1 rounded ring-gray-300 py-1 px-2 text-xs font-normal text-gray-600'>Add</button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

