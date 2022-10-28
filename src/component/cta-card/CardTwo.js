import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CardTwo = () => {
  return (
    <>
      <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="lg:w-3/5">
            <span className="text-base lg:text-lg">
              Organic Products and Food
            </span>
            <h2 className="font-serif text-lg lg:text-2xl font-bold mb-1">
              Quick Delivery to{' '}
              <span className="text-primary">Your Home</span>
            </h2>
            <p className="text-base font-sans leading-6">
              There are many products you will find our shop, Choose your daily
              necessary product from our Ordrz shop and get some special
              offer. See Our latest discounted products from here and get a
              special discount.
            </p>
            <Link href="#downloadApp">
              <a className="lg:w-1/4 text-xs font-serif font-medium inline-block mt-5 px-8 py-3 bg-primary text-center text-white rounded-full hover:text-white hover:bg-emerald-600">
                Download App
              </a>
            </Link>
          </div>
          <div className="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
            <Image
              width={373}
              height={250}
              src="/cta/delivery-boy.png"
              alt="app download"
              className="block w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTwo;
