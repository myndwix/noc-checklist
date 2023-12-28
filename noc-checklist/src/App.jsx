import { useEffect, useRef, useState } from 'react'
import {Route, Routes} from 'react-router-dom';
// import DropDown from './components/utils/DropDown';
// import Server from './components/Server';
// import Node from './components/Node';
// import Modal from './components/Modal';
// import ModalConfirm from './components/ModalConfirm';
import Machines from './components/Machines'
import Checklists from './components/Checklists';
import './App.css'


function App() {
  // let [isOpen, setIsOpen] = useState(false);
  // let [openModalConfirm, setOpenModalConfirm] = useState(false);
  // let [serverName, setServername] = useState('');
  // let [serverId, setServerId] = useState(0);

  // function modalStateOpen(id,name) {
  //   setIsOpen(true);
  //   setServername(name);
  //   setServerId(id);
  // }
  // function modalStateClose() {
  //   setIsOpen(false)
  // }

  // function openConfirm(){
  //   setOpenModalConfirm(true)
  // }
  // function closeConfirm(){
  //   setOpenModalConfirm(false)
  // }

  return (
    <Routes>
      <Route path='/' element={<Machines/>}/>
      <Route path='/checklist' element={<Checklists/>}/>
    </Routes>
    // <>
    //       <div className='absolute flex flex-col justify-center items-start bottom-5 bg-white px-3 py-3 shadow-md'>
    //         <button onClick={() => setOpenModalConfirm(true)} className='px-2 py-1 text-md font-semibold text-white rounded bg-blue-400 hover:bg-blue-500 transition-colors duration-150'>Confirm</button>
    //         <p className='font-semibold text-sm text-gray-800 mt-2'>NOCCHL0000000001</p>
    //       </div>
    //   <div className='w-full h-screen bg-gray-100 p-4 overflow-y-auto'>
         
    //     <div className='lg:w-9/12 mx-auto'>

    //       <span className='w-max px-2 bg-blue-500 flex items-center justify-center text-xl md:text-lg font-medium rounded-t-lg text-white'>Servers</span>

    //       <Server key={1} id={1} name={servers[0]} modalStateOpen={modalStateOpen}/>
    //       <Server key={2} id={2} name={servers[1]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={3} id={3} name={servers[2]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={4} id={4} name={servers[3]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={5} id={5} name={servers[4]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={6} id={6} name={servers[5]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={7} id={7} name={servers[6]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={8} id={8} name={servers[7]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //       <Server key={9} id={9} name={servers[8]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={10} id={10} name={servers[9]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //       <Server key={11} id={11} name={servers[10]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>


    //       <div className='py-1 px-5 flex justify-between bg-white mt-4 shadow-sm'>
    //         <div className='flex items-center'>
    //           <span className='inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full'></span>
    //           <p className='text-sm font-medium text-gray-800 transition-colors duration-150'>Dell PowerEdge M1000e - Hyper V</p>
    //         </div>
    //       </div>

    //       <Node key={12} id={12} name={servers[11]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Node key={13} id={13} name={servers[12]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Node key={14} id={14} name={servers[13]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Node key={15} id={15} name={servers[14]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Node key={16} id={16} name={servers[15]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Node key={17} id={17} name={servers[16]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Node key={18} id={18} name={servers[17]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Node key={19} id={19} name={servers[18]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>

    //       <Server key={20} id={20} name={servers[19]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //       <Server key={21} id={21} name={servers[20]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //       <Server key={22} id={22} name={servers[21]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //       <Server key={23} id={23} name={servers[22]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //       <Server key={24} id={24} name={servers[23]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={25} id={25} name={servers[24]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //       <Server key={26} id={26} name={servers[25]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //       <Server key={27} id={27} name={servers[26]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
    //       <Server key={28} id={28} name={servers[27]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
    //     </div>
    //     <Modal isOpenP={isOpen} modalStateClose={modalStateClose} serverId={serverId} serverName={serverName} hardwares={hardwares}/>
    //     <ModalConfirm isOpens={openModalConfirm} isClose={closeConfirm}/>
    //   </div>
    // </>
  )
}

export default App
