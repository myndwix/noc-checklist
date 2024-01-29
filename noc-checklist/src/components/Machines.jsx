import { useEffect, useRef, useState } from 'react'
import DropDown from './utils/DropDown';
import Server from './Server';
import Node from './Node';
import ModalHardwares from './modals/ModalHardwares';
import axios from 'axios';


function Machines({devices, hardwares, updateHardwares, isNew, getComments, comment}) {
  let [isOpen, setIsOpen] = useState(false);
  let [serverName, setServername] = useState('');
  let [serverId, setServerId] = useState(0);
  let [error, setError] = useState(false);
  let [reload, setReload] = useState(false);

  function modalStateOpen(id,name) {
    setIsOpen(true);
    setServername(name);
    setServerId(id);
  }
  function modalStateClose() {
    setIsOpen(false)
  }
  // let servers = [
  //   'Dell PowerEdge R740xd - Node 1',
  //   'Dell PowerEdge R740xd - Node 2',
  //   'Dell PowerEdge R740xd - Node 3',
  //   'Dell PowerEdge R740xd - Node 4',
  //   'Dell PowerEdge R740xd - Node 5',
  //   'Dell PowerEdge R740xd - Node 6',
  //   'Dell PowerEdge R740xd - Node 7',
  //   'Dell PowerEdge R710 - DC 1',
  //   'Dell PowerEdge R710 - DC 2',
  //   'Dell PowerEdge R710 - UIFS 1',
  //   'Dell PowerEdge R710 - UIFS 2',
  //   '620 -Node 1',
  //   '620 -Node 2',
  //   '620 -Node 3',
  //   '620 -Node 4',
  //   '630 -Node 5',
  //   '630 -Node 6',
  //   '630 -Node 7',
  //   '630 -Node 8',
  //   'Node 1',
  //   'Node 2',
  //   'Node 3',
  //   'Node 4',
  //   'Equalogic PS6210 - Hyper V SAN',
  //   'HP Proliant DS180 G6 - MADI Applicaton',
  //   'HP Proliant DL370 G3 - MACFIN Server1',
  //   'HP Proliant DL380 G4 - MACFIN Server2',
  //   'Huawei OceanStar Dorado 5000 V3 SAN',
  //   'Huawei OceanProtect x8000',
  //   'Huawei OceanProtect Storage',
  //   'PowerVault NX3100 - MACL-File-Server-01'
  // ];

  // const hardwares = [
  //   {
  //     id: 1,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 2", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 3", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 4", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 5", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 6", description: "7.6TB SSD 12GB"},
  //     ]
  //   },
  //   {
  //     id: 2,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 2", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 3", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 4", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 5", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 6", description: "7.6TB SSD 12GB"},
  //     ]
  //   },
  //   {
  //     id: 3,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 2", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 3", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 4", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 5", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 6", description: "7.6TB SSD 12GB"},
  //     ]
  //   },
  //   {
  //     id: 4,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 2", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 3", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 4", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 5", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 6", description: "7.6TB SSD 12GB"},
  //     ]
  //   },
  //   {
  //     id: 5,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 2", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 3", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 4", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 5", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 6", description: "7.6TB SSD 12GB"},
  //     ]
  //   },
  //   {
  //     id: 6,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 2", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 3", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 4", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 5", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 6", description: "7.6TB SSD 12GB"},
  //     ]
  //   },
  //   {
  //     id: 7,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 2", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 3", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 4", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 5", description: "7.6TB SSD 12GB"},
  //       {name: "Disk 6", description: "7.6TB SSD 12GB"},
  //     ]
  //   },
  //   {
  //     id: 8,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "600GB HDD 10K"},
  //       {name: "Disk 2", description: "600GB HDD 10K"},
  //       {name: "Disk 3", description: "600GB HDD 10K"},
  //       {name: "Disk 4", description: "600GB HDD 10K"},

  //     ]
  //   },
  //   {
  //     id: 9,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "600GB HDD 10K"},
  //       {name: "Disk 2", description: "600GB HDD 10K"},
  //       {name: "Disk 3", description: "600GB HDD 10K"},
  //       {name: "Disk 4", description: "600GB HDD 10K"},

  //     ]
  //   },
  //   {
  //     id: 10,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "500GB HDD 7.2K"},
  //       {name: "Disk 2", description: "500GB HDD 7.2K"},
  //       {name: "Disk 3", description: "500GB HDD 7.2K"},
  //       {name: "Disk 4", description: "500GB HDD 7.2K"}
  //     ]
  //   },
  //   {
  //     id: 11,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "500GB HDD 7.2K"},
  //       {name: "Disk 2", description: "500GB HDD 7.2K"},
  //       {name: "Disk 3", description: "500GB HDD 7.2K"},
  //       {name: "Disk 4", description: "500GB HDD 7.2K"}
  //     ]
  //   },
  //   {
  //     id: 12,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "1.2TB HDD"},
  //       {name: "Disk 2", description: "1.2TB HDD"},

  //     ]
  //   },
  //   {
  //     id: 13,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "300GB HDD"},
  //       {name: "Disk 2", description: "300GB HDD"}

  //     ]
  //   },
  //   {
  //     id: 14,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "300GB HDD"},
  //       {name: "Disk 2", description: "300GB HDD"}

  //     ]
  //   },
  //   {
  //     id: 15,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "300GB HDD"},
  //       {name: "Disk 2", description: "300GB HDD"}

  //     ]
  //   },
  //   {
  //     id: 16,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "200GB SSD"},
  //       {name: "Disk 2", description: "200GB SSD"}

  //     ]
  //   },
  //   {
  //     id: 17,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "200GB SSD"},
  //       {name: "Disk 2", description: "200GB SSD"}

  //     ]
  //   },
  //   {
  //     id: 18,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "200GB SSD"},
  //       {name: "Disk 2", description: "200GB SSD"}

  //     ]
  //   },
  //   {
  //     id: 19,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "400GB SSD"},
  //       {name: "Disk 2", description: "400GB SSD"}

  //     ]
  //   },
  //   {
  //     id: 24,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "800GB SSD"},
  //       {name: "Disk 2", description: "800GB SSD"},
  //       {name: "Disk 3", description: "800GB SSD"},
  //       {name: "Disk 4", description: "800GB SSD"},
  //       {name: "Disk 5", description: "800GB SSD"},
  //       {name: "Disk 6", description: "800GB SSD"},
  //       {name: "Disk 7", description: "800GB SSD"},
  //       {name: "Disk 8", description: "1.2TB HDD 10K"},
  //       {name: "Disk 9", description: "1.2TB HDD 10K"},
  //       {name: "Disk 10", description: "1.2TB HDD 10K"},
  //       {name: "Disk 11", description: "1.2TB HDD 10K"},
  //       {name: "Disk 12", description: "1.2TB HDD 10K"},
  //       {name: "Disk 13", description: "1.2TB HDD 10K"},
  //       {name: "Disk 14", description: "1.2TB HDD 10K"},
  //       {name: "Disk 15", description: "1.2TB HDD 10K"},
  //       {name: "Disk 16", description: "1.2TB HDD 10K"},
  //       {name: "Disk 17", description: "1.2TB HDD 10K"},
  //       {name: "Disk 18", description: "1.2TB HDD 10K"},
  //       {name: "Disk 19", description: "1.2TB HDD 10K"},
  //       {name: "Disk 20", description: "1.2TB HDD 10K"},
  //       {name: "Disk 21", description: "1.2TB HDD 10K"},
  //       {name: "Disk 22", description: "1.2TB HDD 10K"},
  //       {name: "Disk 23", description: "1.2TB HDD 10K"},
  //       {name: "Disk 24", description: "1.2TB HDD 10K"},

  //     ]
  //   },
  //   {
  //     id: 25,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "250GB HDD 7.2K"},
  //       {name: "Disk 2", description: "250GB HDD 7.2K"},
  //       {name: "Disk 3", description: "1TB HDD 7.2K"},
  //       {name: "Disk 4", description: "1TB HDD 7.2K"},
  //       {name: "Disk 5", description: "1TB HDD 7.2K"},
  //       {name: "Disk 6", description: "1TB HDD 7.2K"},
  //       {name: "Disk 7", description: "1TB HDD 7.2K"},
  //       {name: "Disk 8", description: "1TB HDD 7.2K"},

  //     ]
  //   },
  //   {
  //     id: 27,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "146.8GB HDD 10K"},
  //       {name: "Disk 2", description: "146GB 10K"},
  //     ]
  //   },
  //   {
  //     id: 28,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "4TB NVMe SSD"},
  //       {name: "Disk 2", description: "4TB NVMe SSD"},
  //       {name: "Disk 3", description: "4TB NVMe SSD"},
  //       {name: "Disk 4", description: "4TB NVMe SSD"},
  //       {name: "Disk 5", description: "4TB NVMe SSD"},
  //       {name: "Disk 6", description: "4TB NVMe SSD"},
  //       {name: "Disk 7", description: "4TB NVMe SSD"},
  //       {name: "Disk 8", description: "4TB NVMe SSD"},
  //       {name: "Disk 9", description: "4TB NVMe SSD"},
  //       {name: "Disk 10", description: "4TB NVMe SSD"},
  //       {name: "Disk 11", description: "4TB NVMe SSD"},
  //       {name: "Disk 12", description: "4TB NVMe SSD"},
  //       {name: "Disk 13", description: "4TB NVMe SSD"},
  //       {name: "Disk 14", description: "4TB NVMe SSD"},
  //       {name: "Disk 15", description: "4TB NVMe SSD"},
  //       {name: "Disk 16", description: "4TB NVMe SSD"},
  //       {name: "Disk 17", description: "4TB NVMe SSD"},
  //       {name: "Disk 18", description: "4TB NVMe SSD"},
  //     ]
  //   },
  //   {
  //     id: 29,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "1.92TB SSD"},
  //       {name: "Disk 2", description: "1.92TB SSD"},
  //       {name: "Disk 3", description: "1.92TB SSD"},
  //       {name: "Disk 4", description: "1.92TB SSD"},
  //       {name: "Disk 5", description: "1.92TB SSD"},
  //       {name: "Disk 6", description: "1.92TB SSD"},
  //       {name: "Disk 7", description: "1.92TB SSD"},
  //       {name: "Disk 8", description: "1.92TB SSD"},
  //     ]
  //   },
  //   {
  //     id: 30,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "8TB HDD 7.2K"},
  //       {name: "Disk 2", description: "8TB HDD 7.2K"},
  //       {name: "Disk 3", description: "8TB HDD 7.2K"},
  //       {name: "Disk 4", description: "8TB HDD 7.2K"},
  //       {name: "Disk 5", description: "8TB HDD 7.2K"},
  //       {name: "Disk 6", description: "8TB HDD 7.2K"},
  //       {name: "Disk 7", description: "8TB HDD 7.2K"},
  //       {name: "Disk 8", description: "8TB HDD 7.2K"},
  //       {name: "Disk 9", description: "8TB HDD 7.2K"},
  //       {name: "Disk 10", description: "8TB HDD 7.2K"},
  //       {name: "Disk 11", description: "8TB HDD 7.2K"},
  //       {name: "Disk 12", description: "8TB HDD 7.2K"},
  //       {name: "Disk 13", description: "8TB HDD 7.2K"},
  //       {name: "Disk 14", description: "8TB HDD 7.2K"},
  //       {name: "Disk 15", description: "8TB HDD 7.2K"},
  //       {name: "Disk 16", description: "8TB HDD 7.2K"},
  //       {name: "Disk 17", description: "8TB HDD 7.2K"},
  //       {name: "Disk 18", description: "8TB HDD 7.2K"},
  //       {name: "Disk 19", description: "8TB HDD 7.2K"},
  //       {name: "Disk 20", description: "8TB HDD 7.2K"},
  //       {name: "Disk 21", description: "8TB HDD 7.2K"},
  //       {name: "Disk 22", description: "8TB HDD 7.2K"},
  //       {name: "Disk 23", description: "8TB HDD 7.2K"},
  //       {name: "Disk 24", description: "8TB HDD 7.2K"},
   
  //     ]
  //   },
  //   {
  //     id: 31,
  //     components: [
  //       {name: "Power Supply 1", description: "", },
  //       {name: "Power Supply 2", description: "", },
  //       {name: "Disk 1", description: "3TB HDD 7.2K"},
  //       {name: "Disk 2", description: "3TB HDD 7.2K"},
  //       {name: "Disk 3", description: "3TB HDD 7.2K"},
  //       {name: "Disk 4", description: "3TB HDD 7.2K"},
  //       {name: "Disk 5", description: "3TB HDD 7.2K"},
  //       {name: "Disk 6", description: "3TB HDD 7.2K"},
  //       {name: "Disk 7", description: "3TB HDD 7.2K"},
  //       {name: "Disk 8", description: "3TB HDD 7.2K"},
  //       {name: "Disk 9", description: "3TB HDD 7.2K"},
  //       {name: "Disk 10", description: "3TB HDD 7.2K"},
  //       {name: "Disk 11", description: "3TB HDD 7.2K"},
    
  //     ]
  //   },
  //   // {
  //   //   id: 2,
  //   //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
  //   // },
  //   // {
  //   //   id: 3,
  //   //   components: ["Power Supply 1", "Power Supply 2", "7.6TB SSD 12GB 1", "7.6TB SSD 12GB 2", "7.6TB SSD 12GB 3", "7.6TB SSD 12GB 4", "7.6TB SSD 12GB 5", "7.6TB SSD 12GB 6"]
  //   // },
  //   // {
  //   //   id: 4,
  //   //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
  //   // },
  //   // {
  //   //   id: 5,
  //   //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
  //   // },
  //   // {
  //   //   id: 6,
  //   //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
  //   // },
  //   // {
  //   //   id: 7,
  //   //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk 6"]
  //   // },
  //   // {
  //   //   id: 8,
  //   //   components: ["Power Supply 1", "Power Supply 2", "Disk 1", "Disk 2", "Disk 3", "Disk 4"]
  //   // }
  // ];
if(devices)
  return (
 
    <>
      <div className='w-full bg-gray-200'>
         
          
        <div className=''>

          <span className='w-max px-2 bg-blue-500 flex items-center justify-center text-xl md:text-lg font-medium rounded-t-lg text-white'>Servers</span>

          <Server key={1} id={1} name={devices[0].devicename + ' - ' + devices[0].devicedescription} status={devices[0].status} comments={devices[0].notifications} modalStateOpen={modalStateOpen}/>
          <Server key={2} id={2} name={devices[1].devicename + ' - ' + devices[1].devicedescription} status={devices[1].status} comments={devices[1].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={3} id={3} name={devices[2].devicename + ' - ' + devices[2].devicedescription} status={devices[2].status} comments={devices[2].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={4} id={4} name={devices[3].devicename + ' - ' + devices[3].devicedescription} status={devices[3].status} comments={devices[3].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={5} id={5} name={devices[4].devicename + ' - ' + devices[4].devicedescription} status={devices[4].status} comments={devices[4].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={6} id={6} name={devices[5].devicename + ' - ' + devices[5].devicedescription} status={devices[5].status} comments={devices[5].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={7} id={7} name={devices[6].devicename + ' - ' + devices[6].devicedescription} status={devices[6].status} comments={devices[6].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={8} id={8} name={devices[7].devicename + ' - ' + devices[7].devicedescription} status={devices[7].status} comments={devices[7].notifications} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={9} id={9} name={devices[8].devicename + ' - ' + devices[8].devicedescription} status={devices[8].status} comments={devices[8].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={10} id={10} name={devices[9].devicename + ' - ' + devices[9].devicedescription} status={devices[9].status} comments={devices[9].notifications} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={11} id={11} name={devices[10].devicename + ' - ' + devices[10].devicedescription} status={devices[10].status} comments={devices[10].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>


          <div className='py-1 px-5 flex justify-between bg-gray-100 mt-4 shadow-sm'>
            <div className='flex items-center'>
              <span className='inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full'></span>
              <p className='text-sm font-medium text-gray-800 transition-colors duration-150'>Dell PowerEdge M1000e - Hyper V</p>
            </div>
          </div>

          <Node key={12} id={12} name={devices[11].devicename + ' - ' + devices[11].devicedescription} status={devices[11].status} comments={devices[11].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={13} id={13} name={devices[12].devicename + ' - ' + devices[12].devicedescription} status={devices[12].status} comments={devices[12].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={14} id={14} name={devices[13].devicename + ' - ' + devices[13].devicedescription} status={devices[13].status} comments={devices[13].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={15} id={15} name={devices[14].devicename + ' - ' + devices[14].devicedescription} status={devices[14].status} comments={devices[14].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={16} id={16} name={devices[15].devicename + ' - ' + devices[15].devicedescription} status={devices[15].status} comments={devices[15].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={17} id={17} name={devices[16].devicename + ' - ' + devices[16].devicedescription} status={devices[16].status} comments={devices[16].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={18} id={18} name={devices[17].devicename + ' - ' + devices[17].devicedescription} status={devices[17].status} comments={devices[17].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={19} id={19} name={devices[18].devicename + ' - ' + devices[18].devicedescription} status={devices[18].status} comments={devices[18].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>

          <div className='py-1 px-5 flex justify-between bg-gray-100 mt-4 shadow-sm'>
            <div className='flex items-center'>
              <span className='inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full'></span>
              <p className='text-sm font-medium text-gray-800 transition-colors duration-150'>Dell Isilon - Storage</p>
            </div>
          </div>

          <Node key={20} id={20} name={devices[19].devicename + ' - ' + devices[19].devicedescription} status={devices[19].status} comments={devices[19].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={21} id={21} name={devices[20].devicename + ' - ' + devices[20].devicedescription} status={devices[20].status} comments={devices[20].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={22} id={22} name={devices[21].devicename + ' - ' + devices[21].devicedescription} status={devices[21].status} comments={devices[21].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Node key={23} id={23} name={devices[22].devicename + ' - ' + devices[22].devicedescription} status={devices[22].status} comments={devices[22].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>

          <Server key={24} id={24} name={devices[23].devicename + ' - ' + devices[23].devicedescription} status={devices[23].status} comments={devices[23].notifications} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={25} id={25} name={devices[24].devicename + ' - ' + devices[24].devicedescription} status={devices[24].status} comments={devices[24].notifications} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          {/* <Server key={26} id={26} name={devices[25].name + ' - ' + devices[25].description} cssclass='mt-4' modalStateOpen={modalStateOpen}/> */}
          <Server key={27} id={27} name={devices[25].devicename + ' - ' + devices[25].devicedescription} status={devices[25].status} comments={devices[25].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={28} id={28} name={devices[26].devicename + ' - ' + devices[26].devicedescription} status={devices[26].status} comments={devices[26].notifications} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={29} id={29} name={devices[27].devicename + ' - ' + devices[27].devicedescription} status={devices[27].status} comments={devices[27].notifications} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
          <Server key={30} id={30} name={devices[28].devicename + ' - ' + devices[28].devicedescription} status={devices[28].status} comments={devices[28].notifications} cssclass='mt-1' modalStateOpen={modalStateOpen}/>
          <Server key={31} id={31} name={devices[29].devicename + ' - ' + devices[29].devicedescription} status={devices[29].status} comments={devices[29].notifications} cssclass='mt-4' modalStateOpen={modalStateOpen}/>
        </div>
        <ModalHardwares isOpenP={isOpen} modalStateClose={modalStateClose} serverId={serverId} serverName={serverName} hardwares={hardwares} updateHardwares={updateHardwares} isNew={isNew} getComments={getComments} comment={comment}/>
      </div>
    </>
  )
}

export default Machines;
