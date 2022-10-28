import React from 'react';

const Discount = ({ product, slug }) => {
  return (
    <>
      {product.discount !== 0 && (
        <span
          className={
            slug
              ? 'text-dark text-base bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4'
              : ' absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4'
          }
        >
          {product.discount.toFixed(0)}% Off
        </span>
      )}
    </>
  );
};

export default Discount;
