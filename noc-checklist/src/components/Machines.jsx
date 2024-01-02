import { useEffect, useRef, useState } from 'react'
import DropDown from './utils/DropDown';
import Server from './Server';
import Node from './Node';
import Modal from './Modal';
import ModalConfirm from './ModalConfirm';


function Machines() {
  let [isOpen, setIsOpen] = useState(false);
  let [openModalConfirm, setOpenModalConfirm] = useState(false);
  let [serverName, setServername] = useState('');
  let [serverId, setServerId] = useState(0);

  function modalStateOpen(id,name) {
    setIsOpen(true);
    setServername(name);
    setServerId(id);
  }
  function modalStateClose() {
    setIsOpen(false)
  }

  function openConfirm(){
    setOpenModalConfirm(true)
  }
  function closeConfirm(){
    setOpenModalConfirm(false)
  }

  let servers = [
    'Dell PowerEdge R740xd - Node 1',
    'Dell PowerEdge R740xd - Node 2',
    'Dell PowerEdge R740xd - Node 3',
    'Dell PowerEdge R740xd - Node 4',
    'Dell PowerEdge R740xd - Node 5',
    'Dell PowerEdge R740xd - Node 6',
    'Dell PowerEdge R740xd - Node 7',
    'Dell PowerEdge R710 - DC 1',
    'Dell PowerEdge R710 - DC 2',
    'Dell PowerEdge R710 - UIFS 1',
    'Dell PowerEdge R710 - UIFS 2',
    '620 -Node 1',
    '620 -Node 2',
    '620 -Node 3',
    '620 -Node 4',
    '630 -Node 5',
    '630 -Node 6',
    '630 -Node 7',
    '630 -Node 8',
    'Dell ISILON Storage',
    'Equalogic PS6210 - Hyper V SAN',
    'HP Proliant DS180 G6 - MADI Applicaton',
    'HP Proliant DL370 G3 - MACFIN Server1',
    'HP Proliant DL380 G4 - MACFIN Server2',
    'Huawei OceanStar Dorado 5000 V3 SAN',
    'Huawei OceanProtect x8000',
    'Huawei OceanProtect Storage',
    'PowerVault NX3100 - MACL-File-Server-01'

  ];

  const hardwares = [
    {
      id: 1,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "7.6TB SSD 12GB"},
        {name: "Disk 2", description: "7.6TB SSD 12GB"},
        {name: "Disk 3", description: "7.6TB SSD 12GB"},
        {name: "Disk 4", description: "7.6TB SSD 12GB"},
        {name: "Disk 5", description: "7.6TB SSD 12GB"},
        {name: "Disk 6", description: "7.6TB SSD 12GB"},
      ]
    },
    {
      id: 2,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "7.6TB SSD 12GB"},
        {name: "Disk 2", description: "7.6TB SSD 12GB"},
        {name: "Disk 3", description: "7.6TB SSD 12GB"},
        {name: "Disk 4", description: "7.6TB SSD 12GB"},
        {name: "Disk 5", description: "7.6TB SSD 12GB"},
        {name: "Disk 6", description: "7.6TB SSD 12GB"},
      ]
    },
    {
      id: 3,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "7.6TB SSD 12GB"},
        {name: "Disk 2", description: "7.6TB SSD 12GB"},
        {name: "Disk 3", description: "7.6TB SSD 12GB"},
        {name: "Disk 4", description: "7.6TB SSD 12GB"},
        {name: "Disk 5", description: "7.6TB SSD 12GB"},
        {name: "Disk 6", description: "7.6TB SSD 12GB"},
      ]
    },
    {
      id: 4,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "7.6TB SSD 12GB"},
        {name: "Disk 2", description: "7.6TB SSD 12GB"},
        {name: "Disk 3", description: "7.6TB SSD 12GB"},
        {name: "Disk 4", description: "7.6TB SSD 12GB"},
        {name: "Disk 5", description: "7.6TB SSD 12GB"},
        {name: "Disk 6", description: "7.6TB SSD 12GB"},
      ]
    },
    {
      id: 5,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "7.6TB SSD 12GB"},
        {name: "Disk 2", description: "7.6TB SSD 12GB"},
        {name: "Disk 3", description: "7.6TB SSD 12GB"},
        {name: "Disk 4", description: "7.6TB SSD 12GB"},
        {name: "Disk 5", description: "7.6TB SSD 12GB"},
        {name: "Disk 6", description: "7.6TB SSD 12GB"},
      ]
    },
    {
      id: 6,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "7.6TB SSD 12GB"},
        {name: "Disk 2", description: "7.6TB SSD 12GB"},
        {name: "Disk 3", description: "7.6TB SSD 12GB"},
        {name: "Disk 4", description: "7.6TB SSD 12GB"},
        {name: "Disk 5", description: "7.6TB SSD 12GB"},
        {name: "Disk 6", description: "7.6TB SSD 12GB"},
      ]
    },
    {
      id: 7,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "7.6TB SSD 12GB"},
        {name: "Disk 2", description: "7.6TB SSD 12GB"},
        {name: "Disk 3", description: "7.6TB SSD 12GB"},
        {name: "Disk 4", description: "7.6TB SSD 12GB"},
        {name: "Disk 5", description: "7.6TB SSD 12GB"},
        {name: "Disk 6", description: "7.6TB SSD 12GB"},
      ]
    },
    {
      id: 8,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "600GB HDD 10K"},
        {name: "Disk 2", description: "600GB HDD 10K"},
        {name: "Disk 3", description: "600GB HDD 10K"},
        {name: "Disk 4", description: "600GB HDD 10K"},

      ]
    },
    {
      id: 9,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "600GB HDD 10K"},
        {name: "Disk 2", description: "600GB HDD 10K"},
        {name: "Disk 3", description: "600GB HDD 10K"},
        {name: "Disk 4", description: "600GB HDD 10K"},

      ]
    },
    {
      id: 10,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "500GB HDD 7.2K"},
        {name: "Disk 2", description: "500GB HDD 7.2K"},
        {name: "Disk 3", description: "500GB HDD 7.2K"},
        {name: "Disk 4", description: "500GB HDD 7.2K"}
      ]
    },
    {
      id: 11,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "500GB HDD 7.2K"},
        {name: "Disk 2", description: "500GB HDD 7.2K"},
        {name: "Disk 3", description: "500GB HDD 7.2K"},
        {name: "Disk 4", description: "500GB HDD 7.2K"}
      ]
    },
    {
      id: 12,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "1.2TB HDD"},
        {name: "Disk 2", description: "1.2TB HDD"},

      ]
    },
    {
      id: 13,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "300GB HDD"},
        {name: "Disk 2", description: "300GB HDD"}

      ]
    },
    {
      id: 14,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "300GB HDD"},
        {name: "Disk 2", description: "300GB HDD"}

      ]
    },
    {
      id: 15,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "300GB HDD"},
        {name: "Disk 2", description: "300GB HDD"}

      ]
    },
    {
      id: 16,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "200GB SSD"},
        {name: "Disk 2", description: "200GB SSD"}

      ]
    },
    {
      id: 17,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "200GB SSD"},
        {name: "Disk 2", description: "200GB SSD"}

      ]
    },
    {
      id: 18,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "200GB SSD"},
        {name: "Disk 2", description: "200GB SSD"}

      ]
    },
    {
      id: 19,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "400GB SSD"},
        {name: "Disk 2", description: "400GB SSD"}

      ]
    },
    {
      id: 21,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "800GB SSD"},
        {name: "Disk 2", description: "800GB SSD"},
        {name: "Disk 3", description: "800GB SSD"},
        {name: "Disk 4", description: "800GB SSD"},
        {name: "Disk 5", description: "800GB SSD"},
        {name: "Disk 6", description: "800GB SSD"},
        {name: "Disk 7", description: "800GB SSD"},
        {name: "Disk 8", description: "1.2TB HDD 10K"},
        {name: "Disk 9", description: "1.2TB HDD 10K"},
        {name: "Disk 10", description: "1.2TB HDD 10K"},
        {name: "Disk 11", description: "1.2TB HDD 10K"},
        {name: "Disk 12", description: "1.2TB HDD 10K"},
        {name: "Disk 13", description: "1.2TB HDD 10K"},
        {name: "Disk 14", description: "1.2TB HDD 10K"},
        {name: "Disk 15", description: "1.2TB HDD 10K"},
        {name: "Disk 16", description: "1.2TB HDD 10K"},
        {name: "Disk 17", description: "1.2TB HDD 10K"},
        {name: "Disk 18", description: "1.2TB HDD 10K"},
        {name: "Disk 19", description: "1.2TB HDD 10K"},
        {name: "Disk 20", description: "1.2TB HDD 10K"},
        {name: "Disk 21", description: "1.2TB HDD 10K"},
        {name: "Disk 22", description: "1.2TB HDD 10K"},
        {name: "Disk 23", description: "1.2TB HDD 10K"},
        {name: "Disk 24", description: "1.2TB HDD 10K"},

      ]
    },
    {
      id: 22,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "250GB HDD 7.2K"},
        {name: "Disk 2", description: "250GB HDD 7.2K"},
        {name: "Disk 3", description: "1TB HDD 7.2K"},
        {name: "Disk 4", description: "1TB HDD 7.2K"},
        {name: "Disk 5", description: "1TB HDD 7.2K"},
        {name: "Disk 6", description: "1TB HDD 7.2K"},
        {name: "Disk 7", description: "1TB HDD 7.2K"},
        {name: "Disk 8", description: "1TB HDD 7.2K"},

      ]
    },
    {
      id: 24,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "146.8GB HDD 10K"},
        {name: "Disk 2", description: "146GB 10K"},
      ]
    },
    {
      id: 25,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "4TB NVMe SSD"},
        {name: "Disk 2", description: "4TB NVMe SSD"},
        {name: "Disk 3", description: "4TB NVMe SSD"},
        {name: "Disk 4", description: "4TB NVMe SSD"},
        {name: "Disk 5", description: "4TB NVMe SSD"},
        {name: "Disk 6", description: "4TB NVMe SSD"},
        {name: "Disk 7", description: "4TB NVMe SSD"},
        {name: "Disk 8", description: "4TB NVMe SSD"},
        {name: "Disk 9", description: "4TB NVMe SSD"},
        {name: "Disk 10", description: "4TB NVMe SSD"},
        {name: "Disk 11", description: "4TB NVMe SSD"},
        {name: "Disk 12", description: "4TB NVMe SSD"},
        {name: "Disk 13", description: "4TB NVMe SSD"},
        {name: "Disk 14", description: "4TB NVMe SSD"},
        {name: "Disk 15", description: "4TB NVMe SSD"},
        {name: "Disk 16", description: "4TB NVMe SSD"},
        {name: "Disk 17", description: "4TB NVMe SSD"},
        {name: "Disk 18", description: "4TB NVMe SSD"},
      ]
    },
    {
      id: 26,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "1.92TB SSD"},
        {name: "Disk 2", description: "1.92TB SSD"},
        {name: "Disk 3", description: "1.92TB SSD"},
        {name: "Disk 4", description: "1.92TB SSD"},
        {name: "Disk 5", description: "1.92TB SSD"},
        {name: "Disk 6", description: "1.92TB SSD"},
        {name: "Disk 7", description: "1.92TB SSD"},
        {name: "Disk 8", description: "1.92TB SSD"},
      ]
    },
    {
      id: 27,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "8TB HDD 7.2K"},
        {name: "Disk 2", description: "8TB HDD 7.2K"},
        {name: "Disk 3", description: "8TB HDD 7.2K"},
        {name: "Disk 4", description: "8TB HDD 7.2K"},
        {name: "Disk 5", description: "8TB HDD 7.2K"},
        {name: "Disk 6", description: "8TB HDD 7.2K"},
        {name: "Disk 7", description: "8TB HDD 7.2K"},
        {name: "Disk 8", description: "8TB HDD 7.2K"},
        {name: "Disk 9", description: "8TB HDD 7.2K"},
        {name: "Disk 10", description: "8TB HDD 7.2K"},
        {name: "Disk 11", description: "8TB HDD 7.2K"},
        {name: "Disk 12", description: "8TB HDD 7.2K"},
        {name: "Disk 13", description: "8TB HDD 7.2K"},
        {name: "Disk 14", description: "8TB HDD 7.2K"},
        {name: "Disk 15", description: "8TB HDD 7.2K"},
        {name: "Disk 16", description: "8TB HDD 7.2K"},
        {name: "Disk 17", description: "8TB HDD 7.2K"},
        {name: "Disk 18", description: "8TB HDD 7.2K"},
        {name: "Disk 19", description: "8TB HDD 7.2K"},
        {name: "Disk 20", description: "8TB HDD 7.2K"},
        {name: "Disk 21", description: "8TB HDD 7.2K"},
        {name: "Disk 22", description: "8TB HDD 7.2K"},
        {name: "Disk 23", description: "8TB HDD 7.2K"},
        {name: "Disk 24", description: "8TB HDD 7.2K"},
   
      ]
    },
    {
      id: 28,
      components: [
        {name: "Power Supply 1", description: "", },
        {name: "Power Supply 2", description: "", },
        {name: "Disk 1", description: "3TB HDD 7.2K"},
        {name: "Disk 2", description: "3TB HDD 7.2K"},
        {name: "Disk 3", description: "3TB HDD 7.2K"},
        {name: "Disk 4", description: "3TB HDD 7.2K"},
        {name: "Disk 5", description: "3TB HDD 7.2K"},
        {name: "Disk 6", description: "3TB HDD 7.2K"},
        {name: "Disk 7", description: "3TB HDD 7.2K"},
        {name: "Disk 8", description: "3TB HDD 7.2K"},
        {name: "Disk 9", description: "3TB HDD 7.2K"},
        {name: "Disk 10", description: "3TB HDD 7.2K"},
        {name: "Disk 11", description: "3TB HDD 7.2K"},
    
      ]
    },
    // {
    //   id: 2,
    //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
    // },
    // {
    //   id: 3,
    //   components: ["Power Supply 1", "Power Supply 2", "7.6TB SSD 12GB 1", "7.6TB SSD 12GB 2", "7.6TB SSD 12GB 3", "7.6TB SSD 12GB 4", "7.6TB SSD 12GB 5", "7.6TB SSD 12GB 6"]
    // },
    // {
    //   id: 4,
    //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
    // },
    // {
    //   id: 5,
    //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
    // },
    // {
    //   id: 6,
    //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
    // },
    // {
    //   id: 7,
    //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
    // },
    // {
    //   id: 8,
    //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4"]
    // }
  ];


  return (
 
    <>
      <div className='w-full bg-gray-100 p-4 overflow-y-auto'>
         
          
        <div className=''>

          <span className='w-max px-2 bg-blue-500 flex items-center justify-center text-xl md:text-lg font-medium rounded-t-lg text-white'>Servers</span>

          <Server key={1} id={1} name={servers[0]} modalStateOpen={modalStateOpen}/>
          <Server key={2} id={2} name={servers[1]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={3} id={3} name={servers[2]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={4} id={4} name={servers[3]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={5} id={5} name={servers[4]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={6} id={6} name={servers[5]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={7} id={7} name={servers[6]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={8} id={8} name={servers[7]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={9} id={9} name={servers[8]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={10} id={10} name={servers[9]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={11} id={11} name={servers[10]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>


          <div className='py-1 px-5 flex justify-between bg-white mt-4 shadow-sm'>
            <div className='flex items-center'>
              <span className='inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full'></span>
              <p className='text-sm font-medium text-gray-800 transition-colors duration-150'>Dell PowerEdge M1000e - Hyper V</p>
            </div>
          </div>

          <Node key={12} id={12} name={servers[11]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={13} id={13} name={servers[12]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={14} id={14} name={servers[13]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={15} id={15} name={servers[14]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={16} id={16} name={servers[15]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={17} id={17} name={servers[16]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={18} id={18} name={servers[17]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={19} id={19} name={servers[18]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>

          <Server key={20} id={20} name={servers[19]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={21} id={21} name={servers[20]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={22} id={22} name={servers[21]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={23} id={23} name={servers[22]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={24} id={24} name={servers[23]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={25} id={25} name={servers[24]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={26} id={26} name={servers[25]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={27} id={27} name={servers[26]} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={28} id={28} name={servers[27]} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
        </div>
        <Modal isOpenP={isOpen} modalStateClose={modalStateClose} serverId={serverId} serverName={serverName} hardwares={hardwares}/>
        <ModalConfirm isOpens={openModalConfirm} isClose={closeConfirm}/>
      </div>
    </>
  )
}

export default Machines;
