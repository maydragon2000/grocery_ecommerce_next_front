import requests from './httpServices';

const OrderServices = {
  addOrder(body, headers) {
    return requests.post('/order/add', body, headers);
  },

  createPaymentIntent(body) {
    return requests.post('/order/create-payment-intent', body);
  },

  createTelrPayment(body) {
    return requests.post('/order/telrpayment', body);
  },

  checkPayment(body) {
    return requests.post('/order/checkpayment', body);
  },

  getOrderByUser({ page = 1, limit = 8 }) {
    return requests.get(`/order?limit=${limit}&page=${page}`);
  },
  getOrderById(id, body) {
    return requests.get(`/order/${id}`, body);
  },
};

export default OrderServices;
