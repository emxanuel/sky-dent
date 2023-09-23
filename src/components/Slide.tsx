import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, } from "swiper/modules"
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'
import img5 from '../assets/5.webp'
import img6 from '../assets/6.webp'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        id: 4,
        img: img4
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
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination
                navigation
                centeredSlides
                autoplay={{ delay: 1 }}
                loop
                className="w-full flex"
            >
                {images.map((i) => (
                    <SwiperSlide key={i.id}>
                        <div className="    ">
                            <img className="h-fit w-fit" src={i.img} alt="slide image"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slide