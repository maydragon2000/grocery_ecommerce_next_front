import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

//internal import
import Layout from '@layout/Layout';
import Label from '@component/form/Label';
import Error from '@component/form/Error';
import { contactData } from '@utils/data';
import { notifySuccess } from '@utils/toast';
import InputArea from '@component/form/InputArea';
import PageHeader from '@component/header/PageHeader';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = () => {
    notifySuccess(
      'your message sent successfully. We will contact you shortly.'
    );
  };

  return (
    <Layout title="Contact Us" description="This is contact us page">
      <PageHeader title="Contact Us" />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          {/* contact promo */}
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
            {contactData.map((data) => (
              <div key={data.id} className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-primary mb-4">
                  <data.icon />
                </span>
                <h5 className="text-xl mb-2 font-bold">{data.title}</h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <a
                    href={`mailto:${data.contact}`}
                    className="text-primary"
                  >
                    {data.contact}
                  </a>{' '}
                  {data.info}
                </p>
              </div>
            ))}
          </div>

          {/* contact form */}
          <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
            <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
              <Image
                width={874}
                height={874}
                src="/contact-us.png"
                alt="logo"
                className="block w-auto"
              />
            </div>
            <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="w-full mx-auto flex flex-col justify-center"
              >
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
                    For any suppoort just send your query
                  </h3>
                  <p className="text-base opacity-90 leading-7">
                    Collaboratively promote client-focused convergence vis-a-vis
                    customer directed alignments via plagiarize strategic users
                    and standardized infrastructures.
                  </p>
                </div>

                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <div className="w-full md:w-1/2 ">
                      <InputArea
                        register={register}
                        label="Your Name"
                        name="name"
                        type="text"
                        placeholder="Inter Your Name"
                      />
                      <Error errorName={errors.name} />
                    </div>
                    <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                      <InputArea
                        register={register}
                        label="Your Email"
                        name="email"
                        type="email"
                        placeholder="Inter Your Email"
                      />
                      <Error errorName={errors.email} />
                    </div>
                  </div>
                  <div className="relative">
                    <InputArea
                      register={register}
                      label="Subject"
                      name="subject"
                      type="text"
                      placeholder="Inter Your Subject"
                    />
                    <Error errorName={errors.subject} />
                  </div>
                  <div className="relative mb-4">
                    <Label label="Message" />
                    <textarea
                      {...register('message', {
                        required: `Message is required!`,
                      })}
                      name="message"
                      className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-base focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                      autoComplete="off"
                      spellCheck="false"
                      rows="4"
                      placeholder="Write your message here"
                    ></textarea>
                    <Error errorName={errors.message} />
                  </div>
                  <div className="relative">
                    <button
                      data-variant="flat"
                      className="md:text-base leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-primary text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-base lg:text-base w-full sm:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
