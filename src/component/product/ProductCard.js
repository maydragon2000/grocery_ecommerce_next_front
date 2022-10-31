import { useState, useContext } from 'react';
import Image from 'next/image';
import { useCart } from 'react-use-cart';
import { IoBagAddSharp, IoAdd, IoRemove } from 'react-icons/io5';
import { useRouter } from 'next/router';

import Price from '@component/common/Price';
import Discount from '@component/common/Discount';
import ProductModal from '@component/modal/ProductModal';
import { SidebarContext } from '@context/SidebarContext';


const ProductCard = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { items, addItem, updateItemQuantity, inCart } = useCart();
  const router = useRouter();
  const { setIsLoading, isLoading } = useContext(SidebarContext);

  const handleMoreInfo = (slug) => {

    router.push(`/product/${slug}`);
    setIsLoading(!isLoading);
  };

  const handleAddItem = (p) => {
    const newItem = {
      ...p,
      id: p._id,
    };
    addItem(newItem);
  };

  return (
    <>
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        product={product}
      />

      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
        <div
          onClick={() => handleMoreInfo(product.slug)}
          className="relative flex justify-center w-full cursor-pointer"
        >
          {product.quantity <= 0 && (
            <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
              Stock Out
            </span>
          )}
          <Discount product={product} />

          <Image
            src={product.image}
            width={160}
            height={160}
            alt={product.title}
            className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
          />
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-base font-medium text-gray-600">
              <span className="line-clamp-2">{product.title}</span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-base sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price product={product} card={true} />
            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-primary text-white rounded"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-base text-dark px-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          disabled={product.quantity === item.quantity}
                        >
                          <span className="text-dark text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{' '}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                disabled={product.quantity < 1}
                aria-label="cart"
                className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-primary hover:border-primary hover:bg-primary hover:text-white transition-all"
              >
                {' '}
                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{' '}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
