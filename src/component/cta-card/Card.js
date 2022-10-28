import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//internal import
import { ctaCardData } from '@utils/data';

const Card = () => {
  return (
    <>
      {ctaCardData.map((item) => (
        <div
          key={item.id}
          className="mx-auto w-full relative rounded-lg overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl"
        >
          <Link href={item.url}>
            <a className="block">
              <Image
                layout="responsive"
                width={550}
                height={234}
                src={item.image}
                alt={item.title}
                className="object-cover"
              />
              <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center">
                <div className="pt-4">
                  <h2 className="font-serif text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                    {item.title} <br />
                    <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                      {item.subTitle}
                    </span>
                  </h2>
                  <p className="text-base font-sans text-gray-50">Weekend discount offer</p>
                  <button className="hidden sm:block lg:block text-xs mx-auto leading-6 font-serif font-medium mt-4 px-4 py-1 bg-green-500 text-center rounded-full text-white hover:bg-emerald-600">
                    Shop Now
                  </button>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
