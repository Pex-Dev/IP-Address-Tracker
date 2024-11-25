import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useIp from '../hooks/useIp';
import customIcon from '../assets/customIcon';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const {ipData} = useIp();   
    
    if(ipData===null){
        return null;
    }

    return (
        <MapContainer 
            center={[ipData.location.lat, ipData.location.lng]} 
            zoom={15} 
            className='z-0 w-dvh min-h-[500px] flex-1' 
            zoomControl={false} 
            //I use this key to be able to update the map when an IP changes
            key={`${ipData.location.lat}-${ipData.location.lng}`}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[ipData.location.lat, ipData.location.lng]} icon={customIcon}>
                <Popup>
                    <p className='font-rubik'>{ipData.location.city}</p>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
