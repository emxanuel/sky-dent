import Slide from "../components/Slide"
import img1 from '../assets/CINTILLO (1).webp'
import video from '../assets/VIDEO.mp4'
import Offices from "../components/Offices"
import Services from "../components/Services"

const Home = () => {
    return (
        <div>
            <Slide />
            <Offices />
            <Services />
            <img className="w-full aspect-5/2" src={img1} alt="" />
            <video src={video} autoPlay loop muted controls className="w-full" />
        </div>
    )
}

export default Home