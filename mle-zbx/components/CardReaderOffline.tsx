import Image from 'next/image';
import ReaderOffline from '@/public/images/reader-offline.svg';
import NoConnectionBlack from '@/public/images/noconnection-black.gif';

interface Props {
    name: string,
    ip: string
}


function CardReaderOffline({name, ip}: Props){
    return(
        <div className='flex flex-col items-center mx-1 mt-5 bg-gray-800 p-3 rounded-md'>
        <div className='relative'>
            <Image src={ReaderOffline} priority alt='Card Reader Offline'/>
         <Image alt='Icon Card Reader Offline' className='w-12 absolute top-2 left-12' src={NoConnectionBlack} unoptimized/>
        </div>
        <p className='text-white mt-2 font-medium text-md'>{ip}</p>
        <p className='text-white font-medium text-md'>{name}</p>
        </div>
    )
}

export default CardReaderOffline;