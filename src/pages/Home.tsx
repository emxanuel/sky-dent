import Slide from "../components/Slide"
import img1 from '../assets/CINTILLO (1).png'
import img2 from '../assets/SERVICIOS (1).png'
import img3 from '../assets/SUCURSALES (1).png'

const Home = () => {
    return (
        <div>
            <Slide />
            <img className="w-full" src={img3} alt="" />
            <img className="w-full" src={img2} alt="" />
            <img className="w-full" src={img1} alt="" />
        </div>
    )
}

export default Home