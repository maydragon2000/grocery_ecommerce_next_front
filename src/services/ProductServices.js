import requests from './httpServices';

const ProductServices = {
  getShowingProducts() {
    return requests.get('/products/show');
  },
  getProducts(params){
    console.log('params');
    return requests.get('/products/',{params:params});
  },
 
  getDiscountedProducts() {
    return requests.get('/products/discount',);
  },

  getProductBySlug(slug) {
    return requests.get(`/products/${slug}`);
  },
};

export default ProductServices;
