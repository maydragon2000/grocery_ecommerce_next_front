import React from 'react';
import dynamic from 'next/dynamic';
import { CardElement } from '@stripe/react-stripe-js';
import Link from 'next/link';
import {
  IoReturnUpBackOutline,
  IoArrowForward,
  IoBagHandle,
  IoWalletSharp,
} from 'react-icons/io5';
import { ImCreditCard } from 'react-icons/im';

//internal import
import Layout from '@layout/Layout';
import Label from '@component/form/Label';
import Error from '@component/form/Error';
import CartItem from '@component/cart/CartItem';
import InputArea from '@component/form/InputArea';
import InputShipping from '@component/form/InputShipping';
import InputPayment from '@component/form/InputPayment';
import useCheckoutSubmit from '@hooks/useCheckoutSubmit';

const Checkout = () => {
  const {
    handleSubmit,
    submitHandler,
    handleShippingCost,
    register,
    errors,
    showCard,
    setShowCard,
    error,
    stripe,
    couponInfo,
    couponRef,
    handleCouponCode,
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    isCheckoutSubmit,
  } = useCheckoutSubmit();
  shippingCost = 10;
  return (
    <>
      <Layout title="Checkout" description="this is checkout page">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-group">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      01. Personal Details
                    </h2>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                      
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                        />
                        <Error errorName={errors.firstName} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          
                          name="lastName"
                          type="text"
                          placeholder="Last name"
                        />
                        <Error errorName={errors.lastName} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          
                          name="email"
                          type="email"
                          placeholder="youremail@gmail.com"
                        />
                        <Error errorName={errors.email} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          
                          name="contact"
                          type="tel"
                          placeholder="Mobile Number"
                          
                        />

                        <Error errorName={errors.contact} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-12">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      02. Shipping Details
                    </h2>

                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-6">
                        <InputArea
                          register={register}
                          
                          name="address"
                          type="text"
                          placeholder="Street Address, Building No."
                        />
                        <Error errorName={errors.address} />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <InputArea
                          register={register}
                          
                          name="city"
                          type="text"
                          placeholder="Area"
                        />
                        <Error errorName={errors.city} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          
                          name="country"
                          type="text"
                          placeholder="City"
                        />
                        <Error errorName={errors.country} />
                      </div>

                     {/*  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          label="ZIP / Postal"
                          name="zipCode"
                          type="text"
                          placeholder="56148"
                        />
                        <Error errorName={errors.zipCode} />
                      </div> */}
                    </div>

                   {/*  <Label label="Shipping Cost" />
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputShipping
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value="Standary Cost"
                          time="2-3 days"
                          cost={10}
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>

                    </div> */}
                  </div>

                  <div className="form-group mt-12">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      03. Payment Details
                    </h2>
                    {/* {showCard && (
                      <div className="mb-3">
                        <CardElement />{' '}
                        <p className="text-red-400 text-base mt-1">{error}</p>
                      </div>
                    )} */}
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name="Cash On Delivery"
                          value="COD"
                          Icon={IoWalletSharp}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name="Credit Card"
                          value="Card"
                          Icon={ImCreditCard}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                    <div className="col-span-6 sm:col-span-3">
                      <Link href="/">
                        <a className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-base font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full">
                          <span className="text-xl mr-2">
                            <IoReturnUpBackOutline />
                          </span>
                          Continue Shopping
                        </a>
                      </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <button
                        type="submit"
                        disabled={isEmpty || !stripe || isCheckoutSubmit}
                        className="bg-primary hover:bg-emerald-600 border border-primary transition-all rounded py-3 text-center text-base font-serif font-medium text-white flex justify-center w-full"
                      >
                        {isCheckoutSubmit ? (
                          <span className="flex justify-center text-center">
                            {' '}
                            <img
                              src="/spinner.gif"
                              alt="Loading"
                              width={20}
                              height={10}
                            />{' '}
                            <span className="ml-2">Processing</span>
                          </span>
                        ) : (
                          <span className="flex justify-center text-center">
                            {' '}
                            Confirm
                            <span className="text-xl ml-2">
                              {' '}
                              <IoArrowForward />
                            </span>
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
              <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                <h2 className="font-semibold font-serif text-lg pb-4">
                  Order Summary
                </h2>

                <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}

                  {isEmpty && (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium font-serif text-base pt-2 text-gray-600">
                        No Item Added Yet!
                      </h2>
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-4 py-4 lg:py-4 text-base w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                  <form className="w-full">
                    {couponInfo.couponCode ? (
                      <span className="bg-emerald-50 px-4 py-3 leading-tight w-full rounded-md flex justify-between">
                        {' '}
                        <p className="text-emerald-600">Coupon Applied </p>{' '}
                        <span className="text-red-500 text-right">
                          {couponInfo.couponCode}
                        </span>
                      </span>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-start justify-end">
                        <input
                          ref={couponRef}
                          type="text"
                          placeholder="Input your coupon code"
                          className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-lg rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-primary placeholder-gray-500 placeholder-opacity-75"
                        />
                        <button
                          onClick={handleCouponCode}
                          className="md:text-base leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-primary h-12 text-base lg:text-base w-full sm:w-auto"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </form>
                </div>
                <div className="flex items-center py-2 text-base w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  Subtotal
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {cartTotal.toFixed(2)}د.إ
                  </span>
                </div>
                <div className="flex items-center py-2 text-base w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  Shipping Cost
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {shippingCost.toFixed(2)}د.إ
                  </span>
                </div>
                <div className="flex items-center py-2 text-base w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  Discount
                  <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                    {discountAmount.toFixed(2)}د.إ
                  </span>
                </div>
                <div className="border-t mt-4">
                  <div className="flex items-center font-bold font-serif justify-between pt-5 text-base uppercase">
                    Total cost
                    <span className="font-serif font-extrabold text-lg">
                      {' '}
                      {Math.round(total)}.00د.إ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
