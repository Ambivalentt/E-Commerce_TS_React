import React, { useRef } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'; //creamos nuevo type para que no este en any
import maxresdefault from '../../../assets/maxresdefault.jpg';
import Banner1 from '../../../assets/Banner1.webp';
import Banner2 from '../../../assets/Banner2.webp';
import Banner3 from '../../../assets/Banner3.webp';
import Banner4 from '../../../assets/Banner4.webp';
import Banner0 from '../../../assets/Banner0.jpg';
import Banner23 from '../../../assets/Banner23.jpg';
import './slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null); // any o swiperType
    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <section className='relative max-w-7xl mx-auto'>
            <Swiper className='max-w-7xl'
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop
                pagination={{ clickable: true }}
                onSlideChange={() => null}>
                <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={maxresdefault} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner0} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner23} alt="" /></SwiperSlide>
            </Swiper>
            <button className='absolute top-1/2 -left-10  z-10 custom-btn ' onClick={goPrev}>Anterior</button>
            <button className='absolute top-1/2 -right-10  z-10 custom-btn' onClick={goNext}>Siguiente</button>
        </section>
    )
}

export default Slider