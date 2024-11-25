import useIp from "../hooks/useIp"
export default function Modal() {
    const {handleShowModal} = useIp();
    return (
    <div className="bg-white w-80 p-4 rounded-lg shadow-lg flex flex-col items-center">
        <img
            className="w-24"
            src="images/warning.png" 
            alt="warning icon" 
        />
        <h1 className="font-rubik uppercase text-center text-xl mt-4">
            Invalid IP address or domain
        </h1>
        <button 
            className="bg-blue-700 text-white w-full p-2 rounded mt-4 font-rubik hover:bg-blue-600 transition-colors"
            onClick={handleShowModal}
        >
            Ok
        </button>
    </div>
    )
}
