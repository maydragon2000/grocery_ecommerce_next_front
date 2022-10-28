import { Fragment } from 'react';
import Link from 'next/link';
import { Transition, Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

//internal import
import { pages } from '@utils/data';
import Category from '@component/category/Category';

const NavbarPromo = () => {
  return (
    <>
      <div className="hidden lg:block xl:block bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
          <div className="inline-flex">
            <Popover className="relative">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                  <Popover.Group
                    as="nav"
                    className="md:flex space-x-10 items-center"
                  >
                    <Popover className="relative font-serif">
                      <Popover.Button className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none">
                        <span className="font-serif text-base font-medium">
                          Categories
                        </span>
                        <ChevronDownIcon
                          className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white">
                          <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                            <Category />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>

                    <Link href="/about-us">
                      <a className="font-serif mx-4 py-2 text-base font-medium hover:text-emerald-600">
                        About Us
                      </a>
                    </Link>
                    <Link href="/contact-us">
                      <a className="font-serif mx-4 py-2 text-base font-medium hover:text-emerald-600">
                        Contact Us
                      </a>
                    </Link>

                    <Popover className="relative font-serif">
                      <Popover.Button className="group inline-flex items-center py-2 text-base font-medium hover:text-emerald-600 focus:outline-none">
                        <span>Pages</span>
                        <ChevronDownIcon
                          className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs bg-white">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                            <div className="relative grid gap-2 px-6 py-6">
                              {pages.map((item) => (
                                <span
                                  key={item.title}
                                  className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-4 w-4"
                                    aria-hidden="true"
                                  />
                                  <Link href={item.href}>
                                    <a className="inline-flex items-center justify-between ml-2 text-base font-medium w-full hover:text-emerald-600">
                                      {item.title}
                                    </a>
                                  </Link>
                                </span>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Link href="/offer">
                      <a className="relative inline-flex items-center h-6 bg-red-100 font-serif ml-4 py-0 px-2 rounded text-base font-medium text-red-500 hover:text-emerald-600">
                        Offers
                        <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </div>
                      </a>
                    </Link>
                  </Popover.Group>
                </div>
              </div>
            </Popover>
          </div>
          <div className="flex">
            <Link href="/privacy-policy">
              <a className="font-serif mx-4 py-2 text-base font-medium hover:text-emerald-600">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms-and-conditions">
              <a className="font-serif mx-4 py-2 text-base font-medium hover:text-emerald-600">
                Terms & Conditions
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPromo;
