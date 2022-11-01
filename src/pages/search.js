import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

//internal import
import Layout from '@layout/Layout';
import useFilter from '@hooks/useFilter';
import Card from '@component/cta-card/Card';
import ProductServices from '@services/ProductServices';
import ProductCard from '@component/product/ProductCard';
import CategoryCarousel from '@component/carousel/CategoryCarousel';
import { SidebarContext } from '@context/SidebarContext';
import Loading from '@component/preloader/Loading';

const Search = ({ products }) => {
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  const [visibleProduct, setVisibleProduct] = useState(18);
  const { productData, setSortedField } = useFilter(products);

  useEffect(() => {
    setIsLoading(false);
  }, [products]);

  // console.log(visibleProduct, "visibleProduct");

  return (
    <Layout title="Search" description="This is search page">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="flex py-10 lg:py-12">
          <div className="flex w-full">
            <div className="w-full">
              <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
              </div>
              <div className="relative">
                <CategoryCarousel />
              </div>
              {productData.length === 0 ? (
                <div className="text-center align-middle mx-auto p-5 my-5">
                  <Image
                    className="my-4"
                    src="/no-result.svg"
                    alt="no-result"
                    width={400}
                    height={380}
                  />
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                    Sorry, we can not find this product 😞
                  </h2>
                </div>
              ) : (
                <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                  <h6 className="text-base font-serif">
                    Total{' '}
                    <span className="font-bold">{productData.length}</span>{' '}
                    items Found
                  </h6>
                  <span className="text-base font-serif">
                    <select
                      onChange={(e) => setSortedField(e.target.value)}
                      className="py-0 text-base font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0"
                    >
                      <option className="px-3" value="All" defaultValue hidden>
                        Sort By Price
                      </option>
                      <option className="px-3" value="Low">
                        Low to High
                      </option>
                      <option className="px-3" value="High">
                        High to Low
                      </option>
                    </select>
                  </span>
                </div>
              )}

              {isLoading ? (
                <Loading loading={isLoading} />
              ) : (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {productData?.slice(0, visibleProduct).map((product, i) => (
                      <ProductCard key={i + 1} product={product} />
                    ))}
                  </div>
                  {productData.length > visibleProduct && (
                    <button
                      onClick={() => setVisibleProduct((pre) => pre + 10)}
                      className="w-auto mx-auto md:text-base leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-indigo-100 text-gray-700 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-6 text-base lg:text-base"
                    >
                      Load More
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const { query } = context.query;
  const { Category } = context.query;
  const { category } = context.query;
  const data = await ProductServices.getShowingProducts();
  let products = [];
  //service filter with parent category
  if (Category) {
    products = data.filter(
      (product) =>
        product.parent.toLowerCase().replace('&', '').split(' ').join('-') ===
        Category
    );
  }
  //service filter with child category
  if (category) {
    products = data.filter(
      (product) =>
        product.children.toLowerCase().replace('&', '').split(' ').join('-') ===
        category
    );
  }

  //search result
  if (query) {
    
    const result = await ProductServices.getProducts({ title: query, limit: 1000 });
    products = Array.from(result.products)
    // products = data.filter((product) =>
    //   product.title.toLowerCase().includes(query.toLowerCase())
    // );
  }

  return {
    props: {
      products,
    },
  };
};
