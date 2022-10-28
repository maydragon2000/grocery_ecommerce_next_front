import Cookies from 'js-cookie';
import React, {useEffect} from "react";
import { useRouter } from 'next/router';
import { useCart } from 'react-use-cart';


//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';
import OrderServices from "@services/OrderServices";
import { notifyError, notifySuccess } from '@utils/toast';


const checkPayment = () => {
    const router = useRouter();
    const {  emptyCart } = useCart();


    useEffect(() => {
        const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));
        const telrRes = JSON.parse(localStorage.getItem('telrRes'));
        console.log(orderInfo, "orderInfo");
        console.log(telrRes, "telrRes");
        OrderServices.checkPayment(telrRes)
        .then((res) => {
            console.log(JSON.parse(res.result), "check res");
            const response =JSON.parse(res.result);
            const status = response.order.status.text;
            if(status === "Paid"){
                const order = {...orderInfo, status:status}
                OrderServices.addOrder(order)
                    .then((res) => {
                        router.push(`/order/${res._id}`)
                            .then(() => {
                                notifySuccess('Your Order Confirmed!');
                            });
                        
                        Cookies.remove('couponInfo');
                        emptyCart();
                        sessionStorage.removeItem('products');
                    })
                    .catch((err) => {
                        notifyError(err ? err?.response?.data?.message : err.message);
                    });
            } else if(status === "Cancelled"){
                router.push('/checkout')
                .then(() => {
                    notifySuccess('You Cancelled Your Order');
                })
            } else if(status === 'Declined'){
                const order = {...orderInfo, status:status}
                OrderServices.addOrder(order)
                    .then((res) => {
                        router.push(`/checkout`)
                            .then(() => {
                                notifyError('Your Order Declined!');
                            });
                    })
                    .catch((err) => {
                        notifyError(err ? err?.response?.data?.message : err.message);
                    });
            }
        })
        .catch((res) => {
            console.log(res, "payment check error")
        })
    },[])
    
      return (
        <Layout title="Contact Us" description="This is Checking Payment Page">
          <PageHeader title="Checking Payment Status..." />
        </Layout>
      );
}

export default checkPayment;