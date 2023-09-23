import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slide = () => {
    return (
        <div className="relative z-0">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination
                navigation
                centeredSlides
                autoplay={{ delay: 1 }}
                loop
                className="h-96"
            >
                <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center">
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center">
                        Slide 2
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center">
                        Slide 3
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide