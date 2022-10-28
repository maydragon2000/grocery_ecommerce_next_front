import React from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';

const Faq = () => {
  return (
    <Layout title="FAQ" description="This is faq page">
      <PageHeader title="Frequently Asked Questions" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-10 lg:py-12">
          <div className="grid gap-4 lg:mb-8 items-center md:grid-cols-2 xl:grid-cols-2">
            <div className="pr-16">
              <Image width={720} height={550} src="/faq.svg" alt="logo" />
            </div>
            <div className="">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-primary bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>How does the Ordrz work?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-base leading-7 text-gray-500">
                      Yes. You can cancel your subscription anytime. Your
                      subscription will continue to be active until the end of
                      your current term (month or year) but it will not
                      auto-renew. Unless you delete your account manually, your
                      account and all data will be deleted 60 days from the day
                      your subscription becomes inactive.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-primary bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>Can I cancel my subscription anytime?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-base leading-7 text-gray-500">
                      Distinctively initiate error-free channels with highly
                      efficient ROI. Intrinsicly envisioneer world-class data
                      via best-of-breed best practices. Efficiently enable
                      empowered e-tailers after cross-unit services. Uniquely
                      expedite seamless e-tailers via cooperative interfaces.
                      Monotonectally myocardinate customer directed
                      meta-services whereas error-free scenarios.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-primary bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>Whice payment method you should accept?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-base leading-7 text-gray-500">
                      Holisticly engage sticky niche markets before
                      collaborative collaboration and idea-sharing.
                      Phosfluorescently facilitate parallel applications with
                      unique imperatives. Proactively plagiarize functionalized
                      deliverables via inexpensive solutions. Collaboratively
                      embrace web-enabled infomediaries rather than diverse
                      testing procedures.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-primary bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>Can I cancel my subscription anytime?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-base leading-7 text-gray-500">
                      Continually impact seamless imperatives for best-of-breed
                      best practices. Phosfluorescently facilitate parallel
                      applications with unique imperatives. Proactively
                      plagiarize functionalized deliverables via inexpensive
                      solutions. Collaboratively embrace web-enabled
                      infomediaries rather than diverse testing procedures.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-primary bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>What is Ordrz EC2 auto scaling?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-base leading-7 text-gray-500">
                      Continually impact seamless imperatives for best-of-breed
                      best practices. Phosfluorescently facilitate parallel
                      applications with unique imperatives. Proactively
                      plagiarize functionalized deliverables via inexpensive
                      solutions. Collaboratively embrace web-enabled
                      infomediaries rather than diverse testing procedures.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-primary bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                        What are the benefits of using Ordrz affliate?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-base leading-7 text-gray-500">
                      Continually impact seamless imperatives for best-of-breed
                      best practices. Phosfluorescently facilitate parallel
                      applications with unique imperatives. Proactively
                      plagiarize functionalized deliverables via inexpensive
                      solutions. Collaboratively embrace web-enabled
                      infomediaries rather than diverse testing procedures.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-primary bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>What is a affliates product configuration?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-base leading-7 text-gray-500">
                      Yes. You can cancel your subscription anytime. Your
                      subscription will continue to be active until the end of
                      your current term (month or year) but it will not
                      auto-renew. Unless you delete your account manually, your
                      account and all data will be deleted 60 days from the day
                      your subscription becomes inactive.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-primary bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                        What is fleet management and how is it different from
                        dynamic scaling?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-base leading-7 text-gray-500">
                      Distinctively initiate error-free channels with highly
                      efficient ROI. Intrinsicly envisioneer world-class data
                      via best-of-breed best practices. Efficiently enable
                      empowered e-tailers after cross-unit services. Uniquely
                      expedite seamless e-tailers via cooperative interfaces.
                      Monotonectally myocardinate customer directed
                      meta-services whereas error-free scenarios.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
