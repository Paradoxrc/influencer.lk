import React from 'react';
import Navbar from '../components/navbar';
import bg from '../assets/images/bg.jpg'; // Ensure the correct path to the image

function Hero() {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-[calc(100vh-5rem)]">
        <div className="bg-cover bg-center bg-no-repeat h-full w-full" style={{ backgroundImage: `url(${bg})` }}>
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full">
            <div className="my-auto mx-auto lg:mx-0 w-10/12 lg:w-2/5">
              <h1 className="text-7xl mb-4">
                Connect with More Than <span className="text-violet-300">100</span> Local Influencers
              </h1>
              <p className="text-2xl mb-8">
                Find the right influencers, keep them organized, monitor content, and save time on influencer marketing.
              </p>
              <div className="flex items-center">
                <button className="rounded-2xl px-10 py-3 mx-5 text-white bg-violet-300 hover:bg-violet-500">
                  I am an Influencer
                </button>
                <button className="rounded-2xl px-10 py-3 text-white bg-violet-300 hover:bg-violet-500">
                  I am a Brand
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
