import React from "react";

const GallerySplashComponent = () => {
  return (
    <section className='bg-[url("/gallerysplash.jpg")] bg-cover bg-center h-screen flex flex-col justify-center items-center relative'>
      <div className="absolute top-[20%] right-[5%] w-[25%]">
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <h1 className="text-7xl">gallery</h1>
          </div>
          <h4 className="text-lg text-right leading-5">this gallery invites you to experience stories told through the lens of a passionate photographer, where each image speaks a thousand words.</h4>
          <div className="flex justify-end">

          <button>explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySplashComponent;
