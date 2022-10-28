import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoBagHandle } from 'react-icons/io5';
import ReactPaginate from 'react-paginate';

//internal import
import useAsync from '@hooks/useAsync';
import Dashboard from '@pages/user/dashboard';
import OrderServices from '@services/OrderServices';
import Loading from '@component/preloader/Loading';
import { UserContext } from '@context/UserContext';
import OrderHistory from '@component/order/OrderHistory';
import { SidebarContext } from '@context/SidebarContext';

const MyOrders = () => {
  const router = useRouter();
  const {
    state: { userInfo },
  } = useContext(UserContext);
  const { currentPage, handleChangePage, isLoading, setIsLoading } =
    useContext(SidebarContext);

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    OrderServices.getOrderByUser({
      page: currentPage,
      limit: 8,
    })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [currentPage]);

  const pageCount = Math.ceil(data?.totalDoc / 8);

  useEffect(() => {
    setIsLoading(false);
    if (!userInfo) {
      router.push('/');
    }
  }, [userInfo]);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Dashboard
          title="My Orders"
          description="This is user order history page"
        >
          <div className="overflow-hidden rounded-md font-serif">
            {loading ? (
              <Loading loading={loading} />
            ) : error ? (
              <h2 className="text-xl text-center my-10 mx-auto w-11/12 text-red-400">
                {error}
              </h2>
            ) : data?.orders?.length === 0 ? (
              <div className="text-center">
                <span className="flex justify-center my-30 pt-16 text-primary font-semibold text-6xl">
                  <IoBagHandle />
                </span>
                <h2 className="font-medium text-base my-4 text-gray-600">
                  You Have no order Yet!
                </h2>
              </div>
            ) : (
              <div className="flex flex-col">
                <h2 className="text-xl font-serif font-semibold mb-5">
                  My Orders
                </h2>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                      <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr className="bg-gray-100">
                            <th
                              scope="col"
                              className="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              ID
                            </th>
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              OrderTime
                            </th>

                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Method
                            </th>
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Total
                            </th>
                            <th
                              scope="col"
                              className="text-right text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data?.orders?.map((order) => (
                            <tr key={order._id}>
                              <OrderHistory order={order} />
                              <td className="px-5 py-3 whitespace-nowrap text-right text-base">
                                <Link href={`/order/${order._id}`}>
                                  <a className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-primary hover:text-white transition-all font-semibold rounded-full">
                                    Details
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="paginationOrder">
                        <ReactPaginate
                          breakLabel="..."
                          nextLabel="Next"
                          onPageChange={(e) => handleChangePage(e.selected + 1)}
                          pageRangeDisplayed={3}
                          pageCount={pageCount}
                          previousLabel="Previous"
                          renderOnZeroPageCount={null}
                          pageClassName="page--item"
                          pageLinkClassName="page--link"
                          previousClassName="page-item"
                          previousLinkClassName="page-previous-link"
                          nextClassName="page-item"
                          nextLinkClassName="page-next-link"
                          breakClassName="page--item"
                          breakLinkClassName="page--link"
                          containerClassName="pagination"
                          activeClassName="activePagination"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Dashboard>
      )}
    </>
  );
};

export default MyOrders;
