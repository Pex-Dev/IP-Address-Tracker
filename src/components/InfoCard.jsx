import Info from "./Info"
import useIp from "../hooks/useIp"


export default function InfoCard({classes}) {
    const {ipData} = useIp();
    
    let ipAddress = ipData !== null ? ipData.ip : '';
    let location = ipData !== null ? ipData.location.city : '';
    let timezone = ipData !== null ? 'UTC '+ipData.location.timezone : '';
    let isp = ipData !== null ? ipData.isp : '';     

    return (
      <div className={`flex flex-col md:flex-row gap-5 md:gap-0 bg-white py-6 md:py-7 rounded-2xl shadow-lg md:grid grid-cols-4 min-h-40 max-w-[1110px] divide-x z-[999] ${classes}`}>
          <Info ipData={{title: 'Ip address', value: ipAddress}} />
          <Info ipData={{title: 'Location', value: location}} />
          <Info ipData={{title: 'Timezone', value: timezone}} />
          <Info ipData={{title: 'ISP', value: isp}} />
      </div>
    )
}
