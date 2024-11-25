import Header from "./components/Header"
import MapComponent from "./components/Map"
import useIp from "./hooks/useIp"
import ReactModal from "react-modal"
import Modal from "./components/Modal"

ReactModal.setAppElement('#root');

function App() {
  const {modal} = useIp();
  const customStyles = {
    overlay: {zIndex: 1000}
  };

  return (
    <>
      <Header />
      <MapComponent />
      <ReactModal isOpen={modal} className={'flex h-dvh flex-col items-center justify-center bg-black bg-opacity-80  z-50'} style={customStyles}>
        <Modal />
      </ReactModal>
    </>
  )
}

export default App