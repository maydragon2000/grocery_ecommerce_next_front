import React, { useState } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import OfferTimer from '@component/coupon/OfferTimer';

const CouponDetails = ({ coupon }) => {
  const [copiedCode, setCopiedCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopied = (code) => {
    setCopiedCode(code);
    setCopied(true);
  };

  return (
    <>
      <div
        key={coupon._id}
        className="coupon block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm"
      >
        <div className="tengah p-6 flex items-center justify-items-start">
          <figure>
            <Image
              src={coupon.logo}
              alt={coupon.title}
              width={120}
              height={120}
              className="rounded-lg"
            />
          </figure>
          <div className="ml-5">
            {dayjs().isAfter(dayjs(coupon.endTime)) ? (
              <span className="inline-block mb-2">
                <div className="flex items-center font-semibold">
                  <span className="flex items-center justify-center bg-red-100 text-base font-serif font-semibold px-2 py-1 rounded mx-1">
                    00
                  </span>
                  :
                  <span className="flex items-center justify-center bg-red-100 text-base font-serif font-semibold px-2 py-1 rounded mx-1">
                    00
                  </span>
                  :
                  <span className="flex items-center justify-center bg-red-100 text-base font-serif font-semibold px-2 py-1 rounded mx-1">
                    00
                  </span>
                  :
                  <span className="flex items-center justify-center bg-red-100 text-base font-serif font-semibold px-2 py-1 rounded mx-1">
                    00
                  </span>
                </div>
              </span>
            ) : (
              <span className="inline-block mb-2">
                <div className="flex items-center font-semibold">
                  <OfferTimer expiryTimestamp={new Date(coupon.endTime)} />
                </div>
              </span>
            )}

            <h2 className="font-serif text-lg leading-6 font-medium mb-3">
              {coupon.title}
            </h2>
            <p className="font-serif font-bold text-xl text-gray-600">
              <span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">
                {coupon.discountPercentage}%
              </span>{' '}
              Off
            </p>
          </div>
        </div>
        <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6">
          <div className="info flex lg:my-6 md:my-5 mb-6 items-center">
            <div className="w-full">
              <div className="block">
                <div className="font-serif font-medium flex items-center mb-1">
                  <span>Coupon</span>
                  <div className="ml-2">
                    {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                      <span className="text-red-600 inline-block">
                        Inactive
                      </span>
                    ) : (
                      <span className="text-emerald-600 inline-block">
                        Active
                      </span>
                    )}
                  </div>
                </div>

                <div className="font-serif border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                  <CopyToClipboard
                    text={coupon.couponCode}
                    onCopy={() => handleCopied(coupon.couponCode)}
                  >
                    <button className="block w-full">
                      {copied && coupon.couponCode === copiedCode ? (
                        <span className="text-emerald-600 text-base leading-7 font-semibold">
                          Copied!
                        </span>
                      ) : (
                        <span className="uppercase font-serif font-semibold text-base leading-7 text-emerald-600">
                          {coupon.couponCode}{' '}
                        </span>
                      )}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
              <p className="text-xs leading-5 text-gray-500 mt-2">
                * This coupon code apply when you shopping more then{' '}
                <span className="font-medium"> {coupon.minimumAmount}د.إ</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponDetails;
