import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Offices from "./Offices"

const Footer = () => {
    return (
        <div className="flex items-center w-full flex-col py-5 md:py-10">
            <h2 className="textBlue font-bold text-2xl md:text-5xl text-center md:pb-6">Contáctanos</h2>
            <Offices gap="gap-0 md:gap-24" footer/>
            <div className="flex items-center gap-10 md:text-xl text-sm">
                <p className="flex items-center gap-2"><FontAwesomeIcon icon={faInstagram} className="bgBlue text-white p-2 rounded-full text-sm md:text-3xl"/> skydentrd</p>
                <div className="flex items-center gap-3"><div className="text-xs md:text-sm scale-75 md:scale-100 bgBlue p-1 rounded-full font-bold text-white aspect-square flex items-center">www</div> www.skydentrd.do</div>
            </div>

        </div>
    )
}

export default Footer