import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell } from "react-icons/fi";

//internal import
import NavbarPromo from "@layout/navbar/NavbarPromo";
import { UserContext } from "@context/UserContext";
import LoginModal from "@component/modal/LoginModal";
import CartDrawer from "@component/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";
import ProductServices from "@services/ProductServices";
import Loader from "react-spinners/BarLoader";

const Navbar = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();
  const [help, setHelp] = useState("");
  const [products, setProducts] = useState([]);
  const [showHi, setShowHi] = useState(true);


  const {
    state: { userInfo },
  } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };
  
  const hadleOnchange = async (e) => {
      const products = await ProductServices.getProducts({ title: e, limit: 10 });
      setProducts(Array.from(products.products));
  };

  const openProductPage = (title)=>{
    console.log('item clicked')
    if (title) {
      router.push(`/search?query=${title}`, null, { scroll: false });
      setSearchText("");
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  }
  let user = { name: "User" };
  useEffect(() => {
    if (Cookies.get("userInfo")) {
      console.log(user);
      user = JSON.parse(Cookies.get("userInfo"));
      setImageUrl(user.image);
    }
    const page = router.asPath;
    const width = window.innerWidth;
    if(page === "/checkout" && width < 1000){
      setShowHi(false)
    } else{
      setShowHi(true);
    }
  }, []);


  return (
    <>
      <CartDrawer />
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      <div className="p-3 md:hidden flex justify-between items-center">
        <div>
        { showHi && <>
            <h1 className="text-3xl mb-3 text-gray-800 font-medium">
              Hi, {userInfo?.name ? userInfo.name.split(" ")[0] : "User"}
            </h1>
            <p className="text-gray-600 font-normal">What would you buy today?</p>
          </>
        }
        </div>
        {
          showHi && <>
            <button
            onClick={toggleCartDrawer}
            className="h-12 w-12 rounded-xl bg-primary  mr-5 relative whitespace-nowrap inline-flex items-center justify-center text-gray-50 text-lg"
          >
            <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
              {totalItems}
            </span>
            <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
            </button>
          </>
        }
        
      </div>

      {showHi && 
        <div className="bg-white sm:bg-primary sticky top-0 z-20">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="top-bar h-24 lg:h-auto flex items-center justify-between py-4 mx-auto">
              <Link href="/">
                <a className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block">
                  <Image
                    width={140}
                    height={56}
                    src="/logo/logo-light.svg"
                    alt="logo"
                  />
                </a>
              </Link>
              
              <div className="w-full relative transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
                <div className="w-full flex flex-col justify-center items-center flex-shrink-0 relative z-30">
                  <div className="flex flex-col mx-auto w-full">
                    <form
                      onSubmit={handleSubmit}
                      className="relative  overflow-hidden rounded-md w-full"
                    >
                      <button
                        aria-label="Search"
                        type="submit"
                        className="outline-none text-xl text-gray-800 absolute top-0 left-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                      >
                        <IoSearchOutline fontWeight={500} />
                      </button>
                      <label className="flex items-center py-0.5">
                        <input
                          onFocus={() => {
                            setHelp(true);
                            console.log(help);
                          }}
                          onBlur={() => {
                            setTimeout(() => {
                              setHelp(false); 
                            }, 1000);
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyUp={(e) => {
                            hadleOnchange(e.target.value);
                          }}
                          value={searchText}
                          className="form-input w-full pl-12 appearance-none transition ease-in-out border text-input text-base font-sans rounded-xl min-h-10 h-14 duration-200 bg-gray-100 focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                          placeholder="Search by items name"
                        />
                      </label>
                    </form>
                  </div>
                </div>
                <>
                  {(help && (products.length > 0)) && (
                    <div className=" absolute z-50 top-14 mt-4  w-full h-screen sm:h-72 rounded-md overflow-auto  sm:w-full bg-white px-3 py-2">
                    {!Boolean(products.length) && <Loader>hi</Loader>}
                      { products.map((value, index) => {
                        return (
                          <>
                            <button onClick={()=>{console.log('clicked');
                              openProductPage(value.title)}} className="flex w-full    items-center rounded-sm cursor-pointer hover:bg-gray-100 gap-5 p-3">
                              <Image
                                src={value.image}
                                width={35}
                                height={35}
                                className="bg-gray-50 "
                              />
                              <p className="text-sm sm:text-body h-6 whitespace-nowrap overflow-clip w-11/12  text-left   font-semibold">
                                {value.title}
                              </p>
                            </button>
                          </>
                        );
                      })}
                    </div>
                  )}
                </>
              </div>
              
              <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  className="pr-5 text-white text-2xl font-bold"
                  aria-label="Alert"
                >
                  <FiBell className="w-6 h-6 drop-shadow-xl" />
                </button>
                <button
                  aria-label="Total"
                  onClick={toggleCartDrawer}
                  className="relative px-5 text-white text-2xl font-bold"
                >
                  <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {totalItems}
                  </span>
                  <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
                </button>

                <button
                  className="pl-5 text-white text-2xl font-bold"
                  aria-label="Login"
                >
                  {imageUrl || userInfo?.image ? (
                    <Link href="/user/dashboard">
                      <a className="relative top-1 w-6 h-6">
                        <Image
                          width={29}
                          height={29}
                          src={imageUrl || userInfo?.image}
                          alt="user"
                          className="bg-white rounded-full"
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
                </button>
              </div>
            </div>
          </div>

          <NavbarPromo />
        </div>
        }
      
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
