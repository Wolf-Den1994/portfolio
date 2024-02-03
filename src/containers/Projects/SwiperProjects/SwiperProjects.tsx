import { useCallback, useMemo, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import projectsData from '../../../data/projects';
import Project from '../Project/Project';
import './SwiperProjects.scss';

const SwiperProjects = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const theSlides = useMemo(() => projectsData, []);

  const handlePrevious = useCallback(() => {
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <>
      <div
        role="presentation"
        onClick={handlePrevious}
        className="swiper-button-prev swiper-button-prev-custom"
        onKeyUp={handlePrevious}
      />
      <div
        role="presentation"
        onClick={handleNext}
        className="swiper-button-next swiper-button-next-custom"
        onKeyUp={handleNext}
      />
      <Swiper
        navigation
        loop
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={60}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={setSwiperRef}
      >
        {theSlides.map(({ photoAlign, title, description, linkUrl, srcImage }) => (
          <SwiperSlide key={title}>
            <Project
              photoAlign={photoAlign}
              title={title}
              description={description}
              linkUrl={linkUrl}
              srcImage={srcImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperProjects;
