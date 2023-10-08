import React from 'react';
import styles from '../style';
import { temugoals, temuinterest, temumarket, temucommunity } from '../assets';

const Screenshots = () => {
  return (
    <section id='screenshots' style={{ marginTop: '150px' }} className={`flex flex-col items-center ${styles.paddingY} screenshotsContainer overflow-hidden`}>
      <div className="w-full flex justify-center">
        <h2 className={`text-4xl text-primary font-pointbold`}>
          <div className="max-w-3xl text-center">
            Modern and student friendly features that's gonna elevate your uni life
          </div>
        </h2>
      </div>

      {/* Subscribe Button */}
      <div className="flex justify-center items-center mt-8">
        <button className="screenshot-button bg-white text-primary border-2 border-primary rounded-full py-3 px-8 text-xl font-point">
          Subscribe
        </button>
      </div>

      {/* Four-column layout for screenshots */}
      <div className="flex justify-center items-center mt-12 w-full overflow-hidden image-container" style={{ height: '470px' }}>
        {/* Column 1 */}
        <div className="m-2">
          <img src={temugoals} alt="Temu Goals" className="w-[350px] h-[630px] object-cover shift-up" />
        </div>
        {/* Column 2 */}
        <div className="m-2">
          <img src={temuinterest} alt="Temu Interest" className="w-[350px] h-[630px] object-cover shift-up" />
        </div>
        {/* Column 3 */}
        <div className="m-2">
          <img src={temumarket} alt="Temu Market" className="w-[350px] h-[630px] object-cover shift-up" />
        </div>
        {/* Column 4 */}
        <div className="m-2">
          <img src={temucommunity} alt="Temu Community" className="w-[350px] h-[630px] object-cover shift-up" />
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
