import React, { forwardRef } from 'react';
import styles from '../style';
import { features_1, features_2, features_3 } from '../assets';

const Features = forwardRef((props, ref) => {
  //const featuresRef = useRef(null);

  return (
    <section id='features' ref={ref} className={`flex flex-col items-center ${styles.paddingY} featuresContainer`}>
      {/* Intro */}
      <div className="w-full flex justify-center mb-12">
        <h2 className={`text-3xl text-primary font-point`}>
          <div className="max-w-5xl text-center">
            Temu helps you get the most of your uni life through a modern and safe approach. Here are some of our helpful features:
          </div>
        </h2>
      </div>

      {/* Features (images and texts) */}
      <div className="flex flex-wrap justify-center mt-12 w-full">
        {/* Column 1 */}
        <div className="flex flex-col items-center mx-10">
          <div className="h-[150px] flex items-end">
            <img src={features_1} alt="Feature 1" className="w-64 h-auto" />
          </div>
          <h2 className="mt-4 text-3xl text-center font-pointbold text-primary max-w-sm h-[3rem] featuresTextsContainer">
            1. Meet new friends!
          </h2>
          <p className="text-2xl text-center font-point text-primary max-w-sm h-[4rem] featuresTextsContainer">
            Easily discover new friends from your class, university, or clubs.
          </p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col items-center mx-10">
          <div className="h-[150px] flex items-end">
            <img src={features_2} alt="Feature 2" className="w-52 h-auto" />
          </div>
          <h2 className="mt-4 text-3xl text-center font-pointbold text-primary max-w-sm h-[3rem] featuresTextsContainer">
            2. Flatemate finder
          </h2>
          <p className="text-2xl text-center font-point text-primary max-w-sm h-[4rem] featuresTextsContainer">
            A safer way to look for housemate.
          </p>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-center mx-10">
          <div className="h-[150px] flex items-end">
            <img src={features_3} alt="Feature 3" className="w-52 h-auto" />
          </div>
          <h2 className="mt-4 text-3xl text-center font-pointbold text-primary max-w-sm h-[3rem] featuresTextsContainer">
            3. Student Marketplace
          </h2>
          <p className="text-2xl text-center font-point text-primary max-w-sm h-[4rem] featuresTextsContainer">
            A secure way to sell your secondhand uni materials, or look for one!
          </p>
        </div>
      </div>
    </section>
  );
});

export default Features;
