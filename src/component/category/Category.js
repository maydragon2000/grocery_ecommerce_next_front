import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IoClose } from 'react-icons/io5';
import {AiOutlineUnlock, AiFillLock} from "react-icons/ai"
import {MdOutlineAccountCircle} from "react-icons/md"

//internal import
import LoginModal from '@component/modal/LoginModal';
import { sidebarPages } from '@utils/data';
import useAsync from '@hooks/useAsync';
import Loading from '@component/preloader/Loading';
import { SidebarContext } from '@context/SidebarContext';
import CategoryServices from '@services/CategoryServices';
import CategoryCard from '@component/category/CategoryCard';
import { UserContext } from '@context/UserContext';


const Category = () => {
  const { categoryDrawerOpen, closeCategoryDrawer } =
    useContext(SidebarContext);
    
  const { data, loading, error } = useAsync(() =>
    CategoryServices.getShowingCategory()
  );
  const {
    dispatch,
    state: { userInfo },
  } = useContext(UserContext);
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const loginClick = () => {
    closeCategoryDrawer();
    setModalOpen(!modalOpen);
  }

  const handleLogOut = () => {
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('couponInfo');
    router.push('/');
    closeCategoryDrawer();
  };

  return (
    <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide">
      <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {categoryDrawerOpen && (
        <div className="w-full flex justify-between items-center h-16 px-6 py-4 bg-primary text-white border-b border-gray-100">
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex align-center">
            <Link href="/">
              <a className="mr-10">
                <Image
                  width={100}
                  height={38}
                  src="/logo/logo-light.svg"
                  alt="logo"
                />
              </a>
            </Link>
          </h2>
          <button
            onClick={closeCategoryDrawer}
            className="flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-red-600"
            aria-label="close"
          >
            <IoClose />
          </button>
        </div>
      )}
      <div className="overflow-y-scroll scrollbar-hide w-full max-h-full">
        {/* {categoryDrawerOpen && (
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3">
            All Categories
          </h2>
        )}
        {error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            <span> {error}</span>
          </p>
        ) : data.length === 0 ? (
          <Loading loading={loading} />
        ) : (
          <div className="relative grid gap-2 p-6">
            {data?.map((category) => (
              <CategoryCard
                key={category._id}
                title={category.parent}
                icon={category.icon}
                nested={category.children}
              />
            ))}
          </div>
        )} */}

        {categoryDrawerOpen && (
          <div className="relative grid gap-2 mt-5">
            <h3 className="font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3">
              Welcome
            </h3>
            <div className="relative grid gap-1 p-6">
              {sidebarPages.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                >
                  <item.icon
                    className="flex-shrink-0 h-4 w-4"
                    aria-hidden="true"
                  />
                  <p className="inline-flex items-center justify-between ml-2 text-base font-medium w-full hover:text-emerald-600">
                    {item.title}
                  </p>
                </a>
              ))}
              {/* {userInfo?.image ? (
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
              )} */}
            </div>
          </div>
        )}
        {categoryDrawerOpen && (
          <div className="relative grid gap-2 mt-0">
            <h3 className="font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3">
            </h3>
            <div className="relative grid gap-1 p-6 pt-0">
              {userInfo?.name?(
                <>
                  <a className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600" href="/user/dashboard">
                    <MdOutlineAccountCircle />
                    <p className='inline-flex items-center justify-between ml-2 text-base font-medium w-full hover:text-emerald-600'>
                      Profile
                    </p>
                  </a>
                  <a className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600" onClick={handleLogOut}>
                    <AiFillLock />
                    <p className='inline-flex items-center justify-between ml-2 text-base font-medium w-full hover:text-emerald-600'>
                      LogOut
                    </p>
                  </a>
                </>
              ):(
                <>
                  <a className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600" onClick={loginClick}>
                    <AiOutlineUnlock />
                    <p className='inline-flex items-center justify-between ml-2 text-base font-medium w-full hover:text-emerald-600'>
                      LogIn
                    </p>
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
