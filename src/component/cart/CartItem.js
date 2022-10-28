import { useContext } from "react";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

//internal import
import useAddToCart from "@hooks/useAddToCart";
import { SidebarContext } from "@context/SidebarContext";

const CartItem = ({ item }) => {
  const { updateItemQuantity, removeItem } = useCart();
  const { closeCartDrawer } = useContext(SidebarContext);
  const { handleIncreaseQuantity } = useAddToCart();

  return (
    <div className="group w-full pr-12 flex justify-start items-center bg-gray-50 rounded-lg py-3 px-3  hover:bg-gray-50 transition-all  relative ">
      <div className="relative flex  rounded-md h-full w-auto overflow-hidden flex-shrink-0 cursor-pointer mr-4">
        <img
          key={item.id}
          src={item.image}
          width={60}
          height={60}
          alt={item.title}
        />
      </div>
      <div className="flex justify-between  flex-wrap w-full overflow-hidden">
        <Link href={`/product/${item.slug}`}>
          <div className="flex flex-col justify-between">
            <a
              onClick={closeCartDrawer}
              className="truncate text-base font-medium text-gray-700 text-heading line-clamp-1"
            >
              {item.title}
            </a>
            <div className="font-bold text-base md:text-base text-heading leading-5">
              <span>{(item.price * item.quantity).toFixed(2)}د.إ</span>
            </div>
          </div>
        </Link>

        <div className="flex items-center flex-wrap justify-between">
          <div className="h-8 w-22 md:w-24 gap-2 lg:w-24 flex flex-wrap items-center justify-evenly   text-gray-600 rounded-md">
            <button className="bg-emerald-50 p-1 rounded-md text-primary"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              <span className="text-dark text-base">
                <FiMinus />
              </span>
            </button>
            <p className="text-base font-semibold text-dark px-1">
              {item.quantity}
            </p>
            <button className="bg-emerald-400 rounded-md p-1" onClick={() => handleIncreaseQuantity(item)}>
              <span className="text-white  text-base">
                <FiPlus />
              </span>
            </button>
          </div>
         
        </div>
      </div>
      <button
            onClick={() => removeItem(item.id)}
            className="hover:text-red-600 absolute right-0 h-full rounded-r-lg px-2  bg-red-200 h-100 text-red-400 text-lg cursor-pointer"
          >
            <FiTrash2 />
          </button> 
    </div>
  );
};

export default CartItem;
