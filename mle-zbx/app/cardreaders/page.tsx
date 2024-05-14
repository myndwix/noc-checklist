'use client'
import { Suspense, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import CardReaderOnline from '@/components/CardReaderOnline';
import CardReaderOffline from '@/components/CardReaderOffline';
import { Skeleton } from "@/components/ui/skeleton"
import { CircleX } from 'lucide-react';

import delay from 'delay';

interface User{
    hostid: number,
    host: string,
    name: string,
    description: string,
    ip: string,
    itemid: number,
    key_: string,
    functionid: number,
    triggerid: number,
    expression: string,
    status: number,
    value: number
}

export default function CardReaders() {
    const [readerDescription, setReaderDescription] = useState<User[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isError, setError] = useState<any>('');
    const getData = async () => {
        try{
            const {data} = await axios.get<User[]>('/api/cardreaders')
            setReaderDescription(data);
            console.log(data);
            await delay(2000)
            setLoading(false)
        }
        catch(err: any){
            console.log('error')
            setLoading(false);
            setError(err)
        }
    }

    useEffect(() => {
        getData();
        let interval = setInterval(getData,60000);
      
        return () => clearInterval(interval);
    }, [])
       

if(isLoading)
return(
<div className='flex px-5 bg-black h-screen overflow-y-auto'>
    <div className="flex w-full flex-wrap h-max">
        {Array.from({length: 40}, (v, i) => 
          <div key={i} className='flex flex-col items-center mx-1 mt-5 bg-gray-800 p-3 rounded-md'>
          <div className='relative'>
          <Skeleton className="w-[135px] h-[100px] rounded bg-gray-500" />
          
          </div>
          <Skeleton className="w-[100px] h-[20px] rounded-lg bg-gray-500 mt-2" />
          
          <Skeleton className="w-[135px] h-[20px] rounded-lg bg-gray-500 mt-2" />
          
      </div>
        
        )}
      
    </div>
</div>
)
if(isError)
return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
        <div className='w-1/4 h-20 bg-gray-300 rounded p-4 flex'>
            <CircleX className='text-red-700'/>
            <div className='ml-2'>
                <h3 className='font-semibold text-lg'>An Error occured</h3>
                <p className='text-md text-slate-900'>{isError.message}</p>
            </div>
        </div>
    </div>
)
else
  return (
    <>
        <div className='flex px-5 bg-black h-screen overflow-y-auto'>
            <div className="flex w-full flex-wrap h-max">
                {readerDescription.map(reader => reader.value===0 ? <CardReaderOnline key={reader.triggerid} name={reader.host} ip={reader.ip}/> : <CardReaderOffline key={reader.triggerid} name={reader.host} ip={reader.ip}/>)}
            </div>
        </div>
    </>
  );
}
