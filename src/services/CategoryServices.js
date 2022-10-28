import requests from './httpServices';

const CategoryServices = {
  getShowingCategory() {
    return requests.get('/category/show');
  },
};

export default CategoryServices;
