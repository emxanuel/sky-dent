import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img5 from '../assets/5.webp'
import img6 from '../assets/6.webp'

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
    return (
        <div id="home" className="relative">
            <div className='w-full h-full z-10 bg-black absolute bg-opacity-40 text-white flex flex-col p-10'>
                <h2 className='text-6xl'>Sky Dent</h2>
                <h3 className='text-3xl mt-10'>Beneficios de atenderse con nosotros</h3>
                <ul>
                    <li>Beneficio 1</li>
                    <li>Beneficio 2</li>
                    <li>Beneficio 3</li>
                </ul>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{clickable: true, dynamicBullets: true}}
                navigation
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
        </div>
    )
}

export default Slide