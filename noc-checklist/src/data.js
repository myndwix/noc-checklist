import axios from 'axios';

export async function getDevices(){
    try {
       const {data} = await axios.get('http://localhost:3000/devices');
       return data;
    }catch(err){
        return err.message;
    }
   
}