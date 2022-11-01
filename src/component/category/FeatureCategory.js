import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoChevronForwardSharp } from 'react-icons/io5';

//internal import
import useAsync from '@hooks/useAsync';
import CategoryServices from '@services/CategoryServices';

const FeatureCategory = () => {
  const router = useRouter();
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());

  return (
    <>
      {error ? (
        <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
          <span> {error}</span>
        </p>
      ) : (
        <div className='home_categories_wrap'>
          <ul className="grid grid-cols-3 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 home_categorys">
            {data?.map((category, i) => (
              <li className="group" key={i + 1}>
                <div
                  onClick={() =>
                    router.push(
                      `/search?Category=${category.parent
                        .toLowerCase()
                        .replace('&', '')
                        .split(' ')
                        .join('-')}`
                    )
                  }
                  className="flex w-full h-full items-center justify-center rounded-lg  bg-blue-50 p-4 cursor-pointer transition duration-200 ease-linear transform "
                >
                  <div className="flex items-center justify-center flex-col home_categories_wrap_inner">
                    <div className='mb-2'>
                      <Image
                        src={category.icon}
                        alt={category.parent}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="">
                      <h3 className="text-base text-gray-600 font-serif font-medium leading-tight text-center ">
                        {category.parent}
                      </h3>
                      {/* <ul className="pt-1 mt-1">
                        {category.children.slice(0, 3).map((children) => (
                          <li key={children} className="pt-1">
                            <Link
                              href={`/search?category=${children
                                .toLowerCase()
                                .replace('&', '')
                                .split(' ')
                                .join('-')}`}
                            >
                              <a className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer">
                                <span className="text-xs text-gray-400 hover:text-emerald-600">
                                  <IoChevronForwardSharp />
                                </span>
                                {children}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul> */}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FeatureCategory;
