Ordrz Frontend Documentation


Site name : Ordrz - Grocery & Organic Food Store React Template with Admin Dashboard


Introduction:

This is a e-commerce template built with Next.js and Tailwindcss with rest api. This template backend is ready and that is built 
with  node, express, mongoose schema validation and use mongodb for  database.






Tech and Packages we use in this project:

    1. React.Js Library Next.js.
    2. Tailwindcss for all css design.
    3. Axios for data fetching.
    4. React-dropzone for image upload.
    5. React Icons for all Icons.
    6. React Hook form for all Form validation.
    7. React Toastify for notification.
    8. React Spinners for preloader.
    9. React-use-cart for add product to cart.
    10. Tailwind-scrollbar-hide for hide scrollbar.
    11. Day.js for date validation and data format.
    12. Rc Drawer for all Drawer.
    13. Js Cookie for save require data on Cookie.






Getting Started & Installation:

For getting started with the template you have to follow the below procedure. First navigate to the Ordrz-admin directory.

Step 1 : Configure your env.local file:

Within the project directory you'll find a .env.example file just rename it as .env.local and paste your api url in NEXT_PUBLIC_API_BASE_URL=https://yourapiserver.com/api and NEXT_PUBLIC_STRIPE_KEY="your stripe key".


Step 2 : Running the project:

⦁	First npm install for install all packages latest version.
⦁	then npm run dev for running in development mode

If you want to test your production build in local environment then run the below commands.
⦁	npm run build then npm run dev





Folder Structure & Customization:

⦁   To customize tailwindcss configuration go to -> tailwind.config.js file .

⦁   /public: In this folder all used images have.

⦁   /src/assets: This folder contain custom css(you can write custom css in in file).

⦁   /src/component: This folder contain all the template related ui components.

⦁   /src/layout: This folder contain layout section for all pages and related components.

⦁   /src/contexts: This folder contain all necessary context for this template . Like Mobile-Sidebar and User-Login.

⦁   /src/hooks: This folder contain all custom hooks for data fetching, data filtering, and all Checkout and Login data submit function.

⦁   /src/pages: Here you find all pages that we use in this project.

⦁   /src/services: This folder contain all data fetching function with Axios interface. UserServices for all user ratelated data fetching 
    functionality, CategoryServices for category related, CouponServices for coupon related, OrderServices for order related, ProductServices for product related and httpService is for common api endpoint with Axios interface.

⦁   /src/utils : This folder contain data.js with pages, userSidebar, sliderData and faqData and  toast.js file use for for notification.






Configuration & Deployment:

We use Vercel for Development if you use Vercel for development then just follow the Vercel Documentation, You can also deploy this any other hosting services if you want.