import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img5 from '../assets/5.webp'
import img6 from '../assets/6.webp'
import { useNavigate } from 'react-router-dom'
import { scrollElement } from '../functions/elements'

const images = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 5,
        img: img5
    },
    {
        id: 6,
        img: img6
    }
]

const Slide = () => {
    const navigate = useNavigate()
    return (
        <div id="home" className="relative flex flex-col">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                centeredSlides
                autoplay={{delay: 5000, disableOnInteraction: false}}
                loop
                className="w-full"
            >
                {images.map((i) => (
                    <SwiperSlide key={i.id}>
                        <div className="aspect-video w-full aspect-2/1">
                            <img className="w-full" src={i.img} alt="slide image"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='w-full h-full z-10 md:bg-black md:absolute md:bg-opacity-40 md:text-white flex flex-col p-10 border-b-2 border-gray-700'>
                <h2 className='md:text-6xl text-3xl '>Sky Dent</h2>
                <h3 className='md:text-3xl md:mt-10 text-lg font-semibold mt-5'>Beneficios de atenderse con nosotros:</h3>
                <ul className='md:text-2xl md:ml-6 md:mt-5 mt-4 ml-3'>
                    <li>Beneficio 1</li>
                    <li>Beneficio 2</li>
                    <li>Beneficio 3</li>
                </ul>
                <button className='bg-[#0c4e9c] text-white mt-10 py-[5px] w-fit self-center px-4 rounded-md hover:scale-110 text-lg duration-200 md:bottom-5 md:absolute md:text-xl' onClick={() => scrollElement('services', navigate)}>Nuestros servicios</button>
            </div>
        </div>
    )
}

export default Slide