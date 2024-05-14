import Image from 'next/image';
import ReaderOnline from '@/public/images/reader-online.svg';

interface Props {
    name: string,
    ip: string
}

function CardReaderOnline({name, ip}: Props){
    const time = new Date().toLocaleTimeString('en-US',{hour12:false, timeStyle:'short'});
    return(
    <div className='flex flex-col items-center mx-1 mt-5 bg-gray-800 p-3 rounded-md'>
        <div className='relative'>
            <Image src={ReaderOnline} priority alt='Card Reader Online'/>
            <p className='absolute left-11 top-4 font-bold text-2xl'>{time}</p>
        </div>
        <p className='text-white mt-2 font-medium text-md'>{ip}</p>
        <p className='text-white font-medium text-md'>{name}</p>
    </div>
    )
}

export default CardReaderOnline;