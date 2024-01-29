import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function User({toggleUser}) {
    return (
      <span onClick={() => toggleUser()} className="group block flex-shrink-0 cursor-pointer">
        <div className="flex items-center">
          <div>
            <UserCircleIcon className='w-10 text-gray-500'/>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
          </div>
        </div>
      </span>
    )
  }
  