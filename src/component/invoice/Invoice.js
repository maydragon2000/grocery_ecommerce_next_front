import dayjs from 'dayjs';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//internal import
import OrderTable from '@component/order/OrderTable';

const Invoice = ({ data, printRef }) => {
  return (
    <div ref={printRef}>
      <div className="bg-indigo-50 p-8 rounded-t-xl">
        <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50">
          <h1 className="font-bold font-serif text-2xl uppercase">Invoice</h1>
          <div className="lg:text-right text-left">
            <h2 className="text-lg font-serif font-semibold mt-4 lg:mt-0 md:mt-0">
              <Link href="/">
                <a className="">
                  <Image
                    width={110}
                    height={40}
                    src="/logo/logo-color.svg"
                    alt="logo"
                  />
                </a>
              </Link>
            </h2>
            <p className="text-base text-gray-500">
              Ordrz, Dubai<br /> {' '}
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
          <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
            <span className="font-bold font-serif text-base uppercase text-gray-600 block">
              Date
            </span>
            <span className="text-base text-gray-500 block">
              {data.createdAt !== undefined && (
                <span>{dayjs(data?.createdAt).format('MMMM D, YYYY')}</span>
              )}
            </span>
          </div>
          <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
            <span className="font-bold font-serif text-base uppercase text-gray-600 block">
              Invoice No.
            </span>
            <span className="text-base text-gray-500 block">
              #{data?.invoice}
            </span>
          </div>
          <div className="flex flex-col lg:text-right text-left">
            <span className="font-bold font-serif text-base uppercase text-gray-600 block">
              Invoice To.
            </span>
            <span className="text-base text-gray-500 block">
              {data?.name}
              <br />
              {data?.address}
              <br />
              {data?.city}, {data?.country}, {data?.zipCode}
            </span>
          </div>
        </div>
      </div>
      <div className="s">
        <div className="overflow-hidden lg:overflow-visible px-8 my-10">
          <div className="-my-2 overflow-x-auto">
            <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="text-xs bg-gray-100">
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                  >
                    Sr.
                  </th>
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                  >
                    Item Price
                  </th>

                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-right"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <OrderTable data={data} />
            </table>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-gray-100 p-10 bg-emerald-50">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
          <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-bold font-serif text-base uppercase text-gray-600 block">
              Payment Method
            </span>
            <span className="text-base text-gray-500 font-semibold font-serif block">
              {data?.paymentMethod}
            </span>
          </div>
          <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-bold font-serif text-base uppercase text-gray-600 block">
              Shipping Cost
            </span>
            <span className="text-base text-gray-500 font-semibold font-serif block">
              {Math.round(data.shippingCost)}.00د.إ
            </span>
          </div>
          <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-bold font-serif text-base uppercase text-gray-600 block">
              Discount
            </span>
            <span className="text-base text-gray-500 font-semibold font-serif block">
              {Math.round(data.discount)}.00د.إ
            </span>
          </div>
          <div className="flex flex-col sm:flex-wrap">
            <span className="mb-1 font-bold font-serif text-base uppercase text-gray-600 block">
              Total Amount
            </span>
            <span className="text-2xl font-serif font-bold text-red-500 block">
            {Math.round(data.total)}.00د.إ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
