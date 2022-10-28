import React from 'react';
import dayjs from 'dayjs';

const OrderHistory = ({ order }) => {
  return (
    <>
      <td className="px-5 py-3 leading-6 whitespace-nowrap">
        <span className="uppercase text-base font-medium">
          {order._id.substring(20, 24)}
        </span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-base">
          {dayjs(order.createdAt).format('MMMM D, YYYY')}
        </span>
      </td>

      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-base">{order.paymentMethod}</span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-base">
        {order.status === 'Delivered' && (
          <span className="text-primary">{order.status}</span>
        )}
        {order.status === 'Pending' && (
          <span className="text-orange-500">{order.status}</span>
        )}
        {order.status === 'Cancel' && (
          <span className="text-red-500">{order.status}</span>
        )}
        {order.status === 'Processing' && (
          <span className="text-indigo-500">{order.status}</span>
        )}
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-base font-bold">
          {Math.round(order?.total)}.00د.إ
        </span>
      </td>
    </>
  );
};

export default OrderHistory;
