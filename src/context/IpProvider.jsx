import { createContext, useState, useEffect} from "react";
import {isDomain} from "../helpers";

const apiKey = import.meta.env.VITE_API_KEY;
const useApi = false;

const IpContext = createContext();

const IpProvider = ({children}) =>{
    const [ipData, setIpData] = useState(null);
    const [modal,setModal] = useState(false);

    useEffect(() =>{
        if(useApi){
            const fetchIp = async () =>{
                const ip = await getUserIp();            
                getIpAdressData(ip.ip); 
            }
            fetchIp();
        }else{
            const data = {
                'ip': '142.250.217.142',
                'location': {
                    'city': 'The Greenhouse',
                    'lat': 37.41889,
                    'lng': -122.10361,
                    'timezone': '-08:00'
                },
                'isp': 'Google LLC'
                
            }
           setIpData(data)
        }
        
    },[])

    const getUserIp = async () =>{
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json();
        return data;
    }

    async function getIpAdressData(ip){  
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${ isDomain(ip) ? 'domain' : 'ipAddress'}=${ip}`);
        if(response.status===200){
            const data = await response.json();
            console.log(data);
            
            setIpData(data);
        } 
                               
    }

    const handleSearchIp = (ipValue) => {        
        getIpAdressData(ipValue)
    }
    
    const handleShowModal = () =>{
        setModal(!modal);
    }

    return (
        <IpContext.Provider 
            value={{
                ipData,
                handleSearchIp,
                modal,
                handleShowModal
            }}            
        >
            {children}
        </IpContext.Provider >
    )
}

export {
    IpProvider
}

export default IpContext;