import requests from './httpServices';

const CouponServices = {
  getAllCoupons() {
    return requests.get('/coupon');
  },
};

export default CouponServices;
