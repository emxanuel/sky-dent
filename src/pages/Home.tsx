import video from '../assets/VIDEO.mp4'
import Financing from '../components/Financing'
import Services from "../components/Services"
import Slide from "../components/Slide"
import Recomendations from "../components/Recomendations"
import blueLife from '../assets/BLUE LIFE.webp'
import sponsors from '../assets/PATROCINADORESd.webp'

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
            <Financing />
            <Services />
            <video src={video} autoPlay loop muted controls className="w-full" />
            <div className='flex items-center flex-col py-24' id='blueLife'>
                <img src={blueLife} className='md:w-5/12 h-80 object-cover' alt="Blue Life" />
                <p className='px-5 md:px-48 text-lg text-justify pt-10'>
                    BlueLifes es una iniciativa donde la comunidad de SKYDENTRD apoya de
                    manera genuina el cuidado y preservación del medio ambiente a través de
                    una limpieza de costas donde recogemos desperdicios sólidos arrojados por
                    personas en lugares inapropiados como en las playas de República
                    Dominicana. Nuestro planeta necesita que cada uno de nosotros cree
                    conciencia de la importancia de mantener limpios los espacios donde
                    distintas especies marinas viven y reducir así la muerte de cada una de ellas.
                </p>
            </div>
            <div className='flex flex-col items-center py-10'>
                <h2 className='text-2xl md:text-5xl textBlue font-bold'>Patrocinadores</h2>
                <img className='aspect-40/15 h-96 object-cover' src={sponsors} alt="Patrocinadores" />
            </div>
            <Recomendations />
        </div>
    )
}

export default Home