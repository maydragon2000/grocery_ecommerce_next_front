import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterTop = () => {
  return (
    <div id="downloadApp" className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden hidden sm:block">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
          <div className="flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start">
            <Image
              src="/app-download-img-left.png"
              alt="app download"
              width={500}
              height={394}
              className="block w-auto"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3">
              Get Your Daily Needs From Our Ordrz Store
            </h3>
            <p className="text-base leading-7">
              There are many products you will find our shop, Choose your daily
              necessary product from our Ordrz shop and get some special
              offer.
            </p>
              <div className="mt-8">
                <Link href="https://apps.apple.com/us/app/ordrz/id6443539986">
                  <a className="mx-2" target="_blank" rel="noreferrer">
                    <Image
                      width={170}
                      height={50}
                      className="mr-2 rounded"
                      src="/app/app-store.svg"
                      alt="app store"
                    />
                  </a>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.Ordrz.sale">
                  <a target="_blank" rel="noreferrer">
                    <Image
                      width={170}
                      height={50}
                      className="rounded"
                      src="/app/play-store.svg"
                      alt="app store"
                    />
                  </a>
                </Link>
              </div>
          </div>
          <div className="md:hidden lg:block">
            <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
              <Image
                src="/app-download-img.png"
                width={500}
                height={394}
                alt="app download"
                className="block w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
