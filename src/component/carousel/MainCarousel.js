import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//internal import
import { sliderData } from '@utils/data';

const MainCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData.map((item, i) => (
          <SwiperSlide
            className="h-full relative rounded-xl overflow-hidden"
            key={i + 1}
          >
            <div className="text-base  text-gray-600 hover:text-emerald-dark">
              <Image
                layout="responsive"
                width={950}
                height={600}
                src={item.image}
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 py-5 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-start">
              <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-green-700">
                  {item.title}
                </h1>
                <p className="text-base leading-6 text-gray-500 font-sans  md:line-clamp-none lg:line-clamp-none">
                  {item.info}
                </p>
                <Link href={item.url}>
                  <a className="hidden sm:inline-block lg:inline-block text-base leading-6 font-serif font-medium mt-6 px-6 py-2 bg-primary text-center rounded-md text-white hover:bg-emerald-600">
                    Shop Now
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default React.memo(MainCarousel);
