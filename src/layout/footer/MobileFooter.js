import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useCart } from 'react-use-cart';
import { FiHome, FiUser, FiShoppingCart, FiAlignLeft, FiSearch } from 'react-icons/fi';

import { UserContext } from '@context/UserContext';
import LoginModal from '@component/modal/LoginModal';
import { SidebarContext } from '@context/SidebarContext';
import CategoryDrawer from '@component/drawer/CategoryDrawer';

const MobileFooter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleCartDrawer, toggleCategoryDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <>
      <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full">
        <CategoryDrawer className="w-6 h-6 drop-shadow-xl" />
      </div>
      <div className="w-full px-3 flex z-40 fixed h-fit bottom-0 mobile_footer_wrap">
      <footer className="lg:hidden w-full  bottom-0 bg-gray-50 mb-3  rounded-xl flex items-center justify-between  h-16 px-3 sm:px-10">
        
        <Link href="/">
          <a className="text-xl text-gray-500" rel="noreferrer" aria-label="Home">
            {' '}
            <FiHome className="w-6 h-6 drop-shadow-xl" />
          </a>
        </Link>
        <Link href="/search">
          <a className="text-xl text-gray-500" rel="noreferrer" aria-label="Home">
            {' '}
            <FiSearch className="w-6 h-6 drop-shadow-xl" />
          </a>
        </Link>

        {/* <button
          onClick={toggleCartDrawer}
          className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-gray-500 text-lg"
        >
          <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
            {totalItems}
          </span>
          <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
        </button> */}
        <button
          aria-label="Bar"
          onClick={toggleCategoryDrawer}
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        >
          <span className="text-xl text-gray-500">
            <FiUser className="w-6 h-6 drop-shadow-xl" />
          </span>
        </button>
        {/* <button
          aria-label="User"
          type="button"
          className="text-xl text-gray-500 indicator justify-center"
        >
          {userInfo?.image ? (
            <Link href="/user/dashboard">
              <a className="relative top-1 w-6 h-6">
                <Image
                  width={29}
                  height={29}
                  src={userInfo.image}
                  alt="user"
                  className="rounded-full"
                />
              </a>
            </Link>
          ) : userInfo?.name ? (
            <Link href="/user/dashboard">
              <a className="leading-none font-bold font-serif block">
                {userInfo?.name[0]}
              </a>
            </Link>
          ) : (
            <span onClick={() => setModalOpen(!modalOpen)}>
              <FiUser className="w-6 h-6 drop-shadow-xl" />
            </span>
          )}
        </button> */}
      </footer>
      </div>
    
    </>
  );
};

export default dynamic(() => Promise.resolve(MobileFooter), { ssr: false });
