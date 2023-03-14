'use client';
import React, { useState } from 'react';
// import CountUp from 'react-countup';
import CountUp, { useCountUp } from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
      onExit={() => setCounterOn(false)}
    >
      <div className="text-center bg-[url('/vivid-blurred.jpg')] bg-cover py-10 my-20 grid grid-rows-4 md:grid-cols-4 md:grid-rows-1">
        <div className="">
          <div className="text-4xl font-bold md:mt-0 md:text-7xl">
            {counterOn && <CountUp end={105} />}
          </div>
          <p className="mt-3">GitHub Followers</p>
        </div>
        <div className="">
          <div className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            {counterOn && <CountUp end={850} />}
          </div>
          <p className="mt-3">Cups of Tea</p>
        </div>
        <div className="">
          <div className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            {counterOn && <CountUp end={1850} />}
          </div>
          <p className="mt-3">Working Hours</p>
        </div>
        <div className="">
          <div className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            {counterOn && <CountUp end={45} />}
          </div>
          <p className="mt-3">Positive Reviews</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
