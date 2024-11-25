import useIp from "../hooks/useIp";
import { useState } from "react";
import { isDomain,isIP } from "../helpers";

export default function SearchBar({classes}) {
  const {handleSearchIp, handleShowModal} = useIp();
  const [ipValue,setIpValue] = useState(''); 
  
  const validate= (value) =>{
    return isIP(value) || isDomain(value);
  }

  const handleSubmit = (e) =>{    
    e.preventDefault();
    if(ipValue.length>1){
      if(validate(ipValue)){
        handleSearchIp(ipValue);
      }else{
        handleShowModal()
      }
    } 
  }

  const handleIpInputChange = (e) =>{
    setIpValue(e.target.value)
  }

  return (
    <form 
      className={`bg-white md:w-[550px] rounded-2xl overflow-hidden mx-auto flex justify-between ${classes}`}
      onSubmit={handleSubmit}
    >
        <input 
            type="text" 
            className="p-4 w-full text-base md:text-lg font-rubik hover:cursor-pointer"
            placeholder="Seach for any IP address or domain"
            value={ipValue}
            onChange={handleIpInputChange}
        />
        <button
          type="submit"
          className="bg-black text-white py-4 px-6 font-rubik font-semibold text-lg hover:bg-gray-700 cursor-pointer transition-colors"
        >
          <img src="images/icon-arrow.svg" alt="icon search" />
        </button>
    </form>
  )
}
