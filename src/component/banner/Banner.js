import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-xl">
            <span className="text-emerald-600 font-bold">
              100% Natural Quality
            </span>{' '}
            Organic Product
          </h1>

          <p className="text-gray-500">
            See Our latest discounted products from here and get a special
            <Link href="#discount">
              <a className="text-emerald-600 ml-1">discount product</a>
            </Link>
          </p>
        </div>
        <Link href="/search?Category=organic-food">
          <a className="text-base font-serif font-medium px-6 py-2 bg-primary text-center rounded-full text-white hover:bg-emerald-700">
            Shop Now
          </a>
        </Link>
      </div>
    </>
  );
};

export default Banner;
