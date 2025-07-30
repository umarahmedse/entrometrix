'use client';

import { Icon } from "@iconify/react";
import { useState } from "react";

const Contact = () => {
  const [tab, setTab] = useState('contact');

  return (
    <section id="contact" className="overflow-hidden pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="w-full px-4">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] flex flex-col items-center"
            data-wow-delay=".15s
            "
          >
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold text-center mb-8">
              <span className="text-primary">Get in Touch</span>&nbsp;– Request a Demo or Ask a Question
            </h3>
            <div className="flex gap-8 mb-14">
              <div
                className={`flex gap-2.5 px-5 py-2.5 text-white text-xl items-center ${tab == 'contact' ? 'border-b-2' : ''} border-primary cursor-pointer`}
                onClick={() => setTab('contact')}
              >
                <Icon icon="streamline-ultimate:paper-write" width={18} color="#2F80ED" />Contact US
              </div>
              <div
                className={`flex gap-2.5 px-5 py-2.5 text-white text-xl items-center ${tab == 'demo' ? 'border-b-2' : ''} border-primary cursor-pointer`}
                onClick={() => setTab('demo')}
              >
                <Icon icon="solar:star-linear" width={18} color="#2F80ED" />Request a Demo
              </div>
            </div>
            <form>
              <div className="flex flex-wrap bg-primary/10 rounded-2xl p-8 border border-primary">
                <div className="w-full flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="mb-8 border rounded border-primary py-3.5 px-5">
                      <label htmlFor="contact_name" className="text-white font-medium text-base pb-2.5 w-full block">Name<span className="text-primary">*</span></label>
                      <input type="text" id="contact_name" placeholder="Enter your first name" className="text-lg p-0 border-stroke dark:text-body-color-dark w-full rounded-sm border text-body-color outline-none dark:border-transparent bg-transparent" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mb-8 border rounded border-primary py-3.5 px-5">
                      <label htmlFor="contact_email" className="text-white font-medium text-base pb-2.5 w-full block">E-mail Address<span className="text-primary">*</span></label>
                      <input type="email" id="contact_email" placeholder="Enter your e-mail address" className="text-lg p-0 border-stroke dark:text-body-color-dark w-full rounded-sm border text-body-color outline-none dark:border-transparent bg-transparent" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-8 border rounded border-primary py-3.5 px-5">
                    <label htmlFor="contact_message" className="text-white font-medium text-base pb-2.5 w-full block">Message Content<span className="text-primary">*</span></label>
                    <textarea id="contact_message" rows={5} placeholder="Enter your message" className="text-lg p-0 resize-none border-stroke dark:text-body-color-dark w-full rounded-sm border text-body-color outline-none dark:border-transparent bg-transparent">
                    </textarea>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <button className="shadow-submit dark:shadow-submit-dark rounded-full flex items-center gap-2 bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                    Send Message
                    <Icon icon="pajamas:arrow-right" className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
