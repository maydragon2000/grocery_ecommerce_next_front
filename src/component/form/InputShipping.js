import React from 'react';
import { FiTruck } from 'react-icons/fi';

const InputShipping = ({ register, value, time, cost, handleShippingCost }) => {
  return (
    <div>
      <div className="p-3 card border border-gray-200 bg-white rounded-md">
        <label className="cursor-pointer label">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3 text-gray-400">
                <FiTruck />
              </span>
              <div>
                <h6 className="font-serif font-medium text-base text-gray-600">
                  {value}
                </h6>
                <p className="text-xs text-gray-500 font-medium">
                  Delivery: {time}{' '}
                  <span className="font-medium text-gray-600">
                    Cost : {cost}.00د.إ
                  </span>
                </p>
              </div>
            </div>
            <input
              onClick={() => handleShippingCost(cost)}
              {...register(`shippingOption`, {
                required: `Shipping Option is required!`,
              })}
              name="shippingOption"
              type="radio"
              value={value}
              className="form-radio text-lg outline-none focus:ring-0 text-primary"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputShipping;
