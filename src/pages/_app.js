import '@styles/custom.css';
import { CartProvider } from 'react-use-cart';
import { Elements } from '@stripe/react-stripe-js';

//internal import
import getStripe from '@utils/stripe';
import { UserProvider } from '@context/UserContext';
import DefaultSeo from '@component/common/DefaultSeo';
import { SidebarProvider } from '@context/SidebarContext';

const stripePromise = getStripe();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <SidebarProvider>
          <Elements stripe={stripePromise}>
            <CartProvider>
              <DefaultSeo />
              <Component {...pageProps} />
            </CartProvider>
          </Elements>
        </SidebarProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
