import React from 'react';
import styles from '../style';
import { features_1, features_2, features_3 } from '../assets';

const Features = () => {
  return (
    <section id='features' className={`flex flex-col items-center ${styles.paddingY} featuresContainer`}>
      <div className="w-full flex justify-center">
        <h2 className={`text-3xl text-primary font-point`}>
          <div className="max-w-5xl text-center">
            Temu helps you get the most of your uni life through a modern and safe approach. Here are some of our helpful features:
          </div>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-12 w-full">
        {/* Column 1 */}
        <div className="flex flex-col items-center justify-end mx-20">
          <img src={features_1} alt="Feature 1" className="w-80 h-auto" />
          <p className="mt-4 text-center">Feature 1 Description</p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col items-center justify-end mx-20">
          <img src={features_2} alt="Feature 2" className="w-64 h-auto" />
          <p className="mt-4 text-center">Feature 2 Description</p>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-center justify-end mx-20">
          <img src={features_3} alt="Feature 3" className="w-64 h-auto" />
          <p className="mt-4 text-center">Feature 3 Description</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
