import Image from 'next/image';
import { useCart } from 'react-use-cart';
import { FiPlus, FiMinus } from 'react-icons/fi';

const CheckoutCard = ({ item }) => {
  const { updateItemQuantity } = useCart();

  return (
    <div
      key={item.id}
      className="group w-full h-auto flex justify-start items-center py-2 px-5 border-b hover:bg-white transition-all border-gray-100 relative last:border-b-0"
    >
      <div className="relative flex rounded-md overflow-hidden flex-shrink-0 cursor-pointer mr-4">
        <Image src={item.image} width={50} height={50} alt={item.title} />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="mb-0">
            <span className="text-base font-medium text-gray-700 text-heading line-clamp-1">
              {item.title.substring(0, 5)}
            </span>
            <span className="text-xs text-gray-400 mb-2">
              Item Price {item.price}د.إ
            </span>
          </p>
          <div className="h-8 w-20 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
            <div
              className="cursor-pointer"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              <span className="text-dark text-base">
                <FiMinus />
              </span>
            </div>
            <p className="text-base font-semibold text-dark px-1">
              {item.quantity}
            </p>
            <div
              className="cursor-pointer"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              <span className="text-dark text-base">
                <FiPlus />
              </span>
            </div>
          </div>

          <div className="font-bold text-base text-heading leading-5">
            <span>{(item.price * item.quantity).toFixed(2)}د.إ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
