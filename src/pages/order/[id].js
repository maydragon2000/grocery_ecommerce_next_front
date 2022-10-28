import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import ReactToPrint from 'react-to-print';
import React, { useContext, useEffect, useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { IoCloudDownloadOutline, IoPrintOutline } from 'react-icons/io5';

//internal import
import Layout from '@layout/Layout';
import useAsync from '@hooks/useAsync';
import Invoice from '@component/invoice/Invoice';
import Loading from '@component/preloader/Loading';
import OrderServices from '@services/OrderServices';
import { UserContext } from '@context/UserContext';
import InvoiceForDownload from '@component/invoice/InvoiceForDownload';

const Order = ({ params }) => {
  const printRef = useRef();
  const orderId = params.id;
  const router = useRouter();
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const { data, loading } = useAsync(() => OrderServices.getOrderById(orderId));

  useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Invoice" description="order confirmation page">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="max-w-screen-2xl mx-auto py-10 px-3 sm:px-6">
          <div className="bg-emerald-100 rounded-md mb-5 px-4 py-3">
            <label>
              Thank you{' '}
              <span className="font-bold text-emerald-600">{data.name},</span>{' '}
              Your order have been received !
            </label>
          </div>
          <div className="bg-white rounded-lg shadow-sm">
            <Invoice data={data} printRef={printRef} />
            <div className="bg-white p-8 rounded-b-xl">
              <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between">
                <PDFDownloadLink
                  document={<InvoiceForDownload data={data} />}
                  fileName="Invoice"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      'Loading...'
                    ) : (
                      <button className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-primary hover:bg-emerald-600 text-white transition-all font-serif text-base font-semibold h-10 py-2 px-5 rounded-md">
                        Download Invoice{' '}
                        <span className="ml-2 text-base">
                          <IoCloudDownloadOutline />
                        </span>
                      </button>
                    )
                  }
                </PDFDownloadLink>

                <ReactToPrint
                  trigger={() => (
                    <button className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-primary hover:bg-emerald-600 text-white transition-all font-serif text-base font-semibold h-10 py-2 px-5 rounded-md">
                      Print Invoice{' '}
                      <span className="ml-2">
                        <IoPrintOutline />
                      </span>
                    </button>
                  )}
                  content={() => printRef.current}
                  documentTitle="Invoice"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export const getServerSideProps = ({ params }) => {
  return {
    props: { params },
  };
};

export default dynamic(() => Promise.resolve(Order), { ssr: false });
