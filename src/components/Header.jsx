import SearchBar from "./SearchBar"
import InfoCard from "./InfoCard"
SearchBar
export default function Header() {
  return (
    <header 
        className="bg-[url('/images/pattern-bg-mobile.png')] md:bg-[url('/images/pattern-bg-desktop.png')]
        bg-cover bg-center p-6 md:p-8 h-[300px] md:h-[280px]"
    >
        <div className="container mx-auto">
            <h1 className="text-center text-white text-2xl md:text-3xl md:text2xl font-semibold font-rubik">IP Address Tracker</h1>
            <SearchBar classes="mt-7 md:mt-6"/>
            <InfoCard classes="relative mt-6 md:mt-12 mx-auto"/>
        </div>        
    </header>     
  )
}
