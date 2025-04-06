import React from "react";
import FooterComponent from "./FooterComponent";

const ContactComponent = () => {
  return (
    <section className='bg-[url("/contactsplash.jpg")] bg-cover bg-center h-[120vh] flex flex-col justify-center items-center relative font-[Inter-Light]'>
      <div className="bg-black/45 h-[120vh] w-full">

      <div className="absolute top-[5%] left-[5%]">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-4xl mb-2">we want to talk about your vision.</h1>
            <h4 className="text-sm">
              your email address will not be published. Required fields are
              marked *
            </h4>
            <h4 className="text-sm">
              for further inquiries, email at: jakejacobs@vipv.pro
            </h4>
          </div>
          <div>
            <h5 className="text-[12px]">name*</h5>
            <input type="text" className="w-[25%] " />
          </div>
          <div>
            <h5 className="text-[12px]">phone number*</h5>
            <input type="text" className="w-[25%] " />
          </div>
          <div>
            <h5 className="text-[12px]">email</h5>
            <input type="text" className="w-[30%] " />
          </div>
          <div>
            <h5 className="text-[12px]">subject</h5>
            <input type="text" className="w-[25%] " />
          </div>
          <div>
            <h5 className="text-[12px]">message*</h5>
            <textarea name="message" className="w-[45%] h-[100px]"></textarea>
          </div>
        </div>
        <button className="my-5">submit</button>
      </div>
      </div>
      <FooterComponent/>
    </section>
  );
};

export default ContactComponent;
