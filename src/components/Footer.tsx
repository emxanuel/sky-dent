import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Offices from "./Offices"

const Footer = () => {
    return (
        <div className="flex items-center w-full flex-col py-10">
            <h2 className="textBlue font-bold text-5xl text-center pb-6">Contáctanos</h2>
            <Offices gap="md:gap-28"/>
            <div className="flex items-center gap-10 text-xl">
                <p className="flex items-center gap-2"><FontAwesomeIcon icon={faInstagram} className="bgBlue text-white p-2 rounded-full text-3xl"/> skydentrd</p>
                <div className="flex items-center gap-3"><div className="text-sm bgBlue p-1 rounded-full font-bold text-white aspect-square flex items-center">www</div> www.skydentrd.do</div>
            </div>

        </div>
    )
}

export default Footer