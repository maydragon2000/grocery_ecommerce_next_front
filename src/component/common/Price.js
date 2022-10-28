import React from 'react';

const Discount = ({ product, card }) => {
  return (
    <div className="font-serif product-price font-bold">
      {product.discount ? (
        <span
          className={
            card
              ? 'inline-block text-lg font-semibold text-gray-800'
              : 'inline-block text-2xl'
          }
        >
          {product.price}د.إ
        </span>
      ) : (
        <span
          className={
            card
              ? 'inline-block text-lg font-semibold text-gray-800'
              : 'inline-block text-2xl'
          }
        >
          {product.originalPrice}د.إ
        </span>
      )}
      {product.discount ? (
        <del
          className={
            card
              ? 'sm:text-base font-normal text-base text-gray-400 ml-1'
              : 'text-lg font-normal text-gray-400 ml-1'
          }
        >
          {product.originalPrice}د.إ
        </del>
      ) : null}
    </div>
  );
};

export default Discount;
