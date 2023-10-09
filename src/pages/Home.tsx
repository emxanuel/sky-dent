import img1 from '../assets/SKYCASH.webp'
import video from '../assets/VIDEO.mp4'
import Services from "../components/Services"
import Slide from "../components/Slide"
import Videos from "../components/Videos"

const Home = () => {
    return (
        <div>
            <Slide />
            <div id="about" className="flex flex-col py-10 px-5 md:px-48 gap-10 textBlue text-justify">
                <h2 className="font-bold text-2xl md:text-5xl text-center" >Quienes Somos</h2>
                <p className="text-lg">
                    Somos un centro odontológico con más de 25 años
                    de experiencia brindando una alta calidad en cada
                    uno de los procesos bucales que ofrecemos. Desde
                    nuestros inicios nos hemos preocupado no tan solo
                    en promover una sonrisa saludable sino también en
                    brindar a nuestros clientes un servicio premium.
                    Debido a la confianza de nuestros clientes, hemos
                    ido creciendo y hoy en día contamos con 4 sucursales
                    ubicadas en Santo domingo, Punta Cana, Santiago y Constanza.
                </p>
                <p className="text-lg">
                    Cada uno de nuestros clientes hace eco de la calidad de
                    nuestros servicios y respaldan nuestra labor que con amor y
                    entrega disponemos cada día.
                </p>
            </div>
            <div className="relative flex flex-col items-center">
                <img className="w-full aspect-16/2" src={img1} alt="" />
                <a href="https://wa.me/8496338938" target="_blank" className={`absolute button-invisible bottom-1.26 hover:shadow-md hover:shadow-blue-500 duration-300 cursor-pointer`}></a>
            </div>
            <Services />
            <video src={video} autoPlay loop muted controls className="w-full" />
            <Videos />
        </div>
    )
}

export default Home