import React from 'react';
import {
  FiDollarSign,
  FiHome,
  FiMapPin,
  FiRepeat,
  FiShieldOff,
  FiSun,
  FiTruck,
} from 'react-icons/fi';

const Card = () => {
  return (
    <ul className="my-0">
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiTruck />
        </span>
        <p className="font-sans leading-5 text-base text-gray-500">
          <span className="font-semibold">د.إ100</span>
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiHome />
        </span>
        <p className="font-sans leading-5 text-base text-gray-500">
          Home Delivery within <span className="font-semibold">1 Hour</span>
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiDollarSign />
        </span>
        <p className="font-sans leading-5 text-base text-gray-500">
          Cash on Delivery Available
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiRepeat />
        </span>
        <p className="font-sans leading-5 text-base text-gray-500">
          <span className="font-semibold">7</span> Days returns money back
          guarantee
        </p>
      </li>

      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiShieldOff />
        </span>
        <p className="font-sans leading-5 text-base text-gray-500">
          Warranty not available this item
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiSun />
        </span>
        <p className="font-sans leading-5 text-base text-gray-500">
          Guaranteed 100% organic from natural products.
        </p>
      </li>

      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiMapPin />
        </span>
        <p className="font-sans leading-5 text-base text-gray-500">
          Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA,
          United States 96522
        </p>
      </li>
    </ul>
  );
};

export default Card;
