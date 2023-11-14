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
        </div>
    )
}

export default Slide