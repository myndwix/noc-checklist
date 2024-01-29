import { Fragment, useState, useRef, useEffect, useMemo } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import axios from 'axios';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CommentsView({winHeight, hardwareid, comment, checklistid}) {
    const [option, setOption] = useState('Comments');
    const [btnPosition, setBtnPosition] = useState(null);
    const [menuOpened, setMenuOpened] = useState(false);
    let [commentInput, setCommentInput] = useState();
    let [commentInputText, setCommentInputText] = useState(''); // this variable used to clear input field when comment post
    let commentBox = useRef();
  // if(Object.values(comment).filter(t=>t.hardwareid===hardwareid).length!==0)

  function createComment(comment){
    axios.post('api/createcomment', {checklistid: checklistid, hardwareid: hardwareid, comment: comment}).then(() => console.log('saved')).catch((err) => console.log(err.message));
  }

  // (Object.values(comment).filter(cm => cm.hardwareid===hardwareid)).map(m => console.log(m.comment))
  if(Object.values(comment).filter(cm => cm.hardwareid===hardwareid).length>0)
  return (
    <Menu as="div" className="relative inline-block text-left mr-4">
      <div className=''>
        {/* <Menu.Button onClick={(e) => {setBtnPosition(winHeight - e.clientY ); console.log(window.innerHeight + ' ' + e.clientY + ' ' + winHeight);}} className='px-3 bg-white text-gray-500 py-1 rounded font-medium text-sm flex items-center'> */}
        <Menu.Button className='px-3 bg-white text-gray-500 py-1 rounded font-medium text-sm flex items-center z-50' >
          {Object.values(comment).filter(t=>t.hardwareid===hardwareid).length>0 ? Object.values(comment).filter(t=>t.hardwareid===hardwareid).length : ''}
          <ChatBubbleBottomCenterIcon className='ml-1' style={{color:'gray'}} width={18}/>
        </Menu.Button>
      </div>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

     
       <Menu.Items className={`w-60 absolute right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${btnPosition<200? 'bottom-10': ''}`}>
          <div className="pb-3 pt-3  px-2">
            {(Object.values(comment).filter(cm => cm.hardwareid===hardwareid)).map(cmt => 
                <Menu.Item key={cmt.commentid}>
                {({close}) => (
                 <div className='flex items-center mt-1'>
                    <p className='bg-blue-500 text-white rounded px-2 py-1 text-sm font-normal'>{cmt.comment}</p>
                  </div>
                )}
              </Menu.Item>
              )}
          
           
            
            {/* <Menu.Item>
              {({close}) => (
               <div className='flex items-center mt-2'>

                  <input value={commentInputText} ref={commentBox} onKeyDown={(e) => e.stopPropagation()} onClick={(e) => e.preventDefault()} onChange={(e) => {setCommentInput(e.currentTarget.value); setCommentInputText(e.currentTarget.value);}} className='w-60 px-2 py-1 ring-1 ring-gray-300 my-2 text-sm font-normal outline-none rounded' type="text" placeholder='Enter comment'/>
                  <button className='flex items-center z-50 py-1 ml-2 rounded text-blue-500 hover:text-blue-600 transition-colors duration-150' onClick={(e) => {e.preventDefault(); createComment(commentInput); setCommentInputText('')}}>
                    <PaperAirplaneIcon className='w-7 ml-1'/>
                    </button>
                </div>
              )}
            </Menu.Item> */}
            
              
          </div>
        </Menu.Items>
        </Transition>
    </Menu>
  )

  return(<></>)
}
