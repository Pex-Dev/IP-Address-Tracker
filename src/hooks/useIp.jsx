import { useContext } from "react";
import IpContext from "../context/IpProvider";

const useIp = () =>{
    return useContext(IpContext);
}

export default useIp;