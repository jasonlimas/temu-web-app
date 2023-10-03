import React from 'react';
import styles from '../style';
import { temuhome } from '../assets';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Existing Image Section */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-4 sm:px-20 px-8`}>
      <div className='flex flex-row items-center py-[6px] px-4 rounded'>
        <img src={temuhome} alt="temuhome" className='w-[560px] h-auto' />
      </div>
    </div>

    {/* New Text Section */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:-ml-72 -ml-36 transform -translate-y-32`}>
      <h2 className={`text-6xl leading-snug font-pointbold text-white ${styles.headerFont}`}>The all-in-one app</h2>
      <h2 className={`text-6xl leading-snug font-pointbold text-white ${styles.headerFont}`}>specially made for students</h2>
      <p className={`text-xl mt-4 text-white ${styles.headerFont} max-w-md`}>
        A new and safer way for students to get the most of their life in university.
      </p>
      {/* Updated Button */}
      <button className="bg-white font-point text-primary rounded-full py-3 px-8 mt-10 text-xl">
        Learn More
      </button>
    </div>
  </section>
);

export default Hero;
