import React from "react";

const SplashComponent = () => {
  return (
    <section className='bg-[url("/splashimage.jpg")] bg-cover bg-center h-screen flex flex-col justify-center items-center relative'>
      <div className="absolute inset-0 top-[50%] left-[5%]">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 mb-2">
            <img
              src="/icons/logo.png"
              alt="vision images logo"
              className="w-20 "
            />
            <div className="flex items-center">
              <h1 className="text-4xl">vision images</h1>
            </div>
          </div>
          <h4 className="text-lg">premium portrait and event photography</h4>
          <div className="flex gap-1">
            <div className="flex place-items-end">
              <h4 className="text-lg">by</h4>
            </div>
            <h3 className="text-2xl">Jake Jacobs</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashComponent;
