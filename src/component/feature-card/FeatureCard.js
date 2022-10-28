import React from 'react';

import { featurePromo } from '@utils/data';

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
      {featurePromo.map((promo) => (
        <div
          key={promo.id}
          className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white"
        >
          <div className="mr-3">
            <promo.icon
              className="flex-shrink-0 h-4 w-4 text-emerald-600"
              aria-hidden="true"
            />
          </div>
          <div className="">
            <span className="block font-serif text-base font-medium leading-5">
              {promo.title} {promo.info}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
