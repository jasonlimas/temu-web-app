import React from 'react';
import styles from '../style';

const Screenshots = () => {
  return (
    <section id='screenshots' style={{ marginTop: '150px' }} className={`flex flex-col items-center ${styles.paddingY} screenshotsContainer`}>
      <div className="w-full flex justify-center">
        <h2 className={`text-4xl text-primary font-pointbold`}>
          <div className="max-w-3xl text-center">
            Modern and student friendly features that's gonna elevate your uni life
          </div>
        </h2>
      </div>

      {/* Subscribe Button */}
      <div className="flex justify-center items-center mt-8">
        <button className="bg-white text-primary border-2 border-primary rounded-full py-3 px-8 text-xl font-point">
          Subscribe
        </button>
      </div>
      
      {/* Rest of the Screenshots content will go here */}
    </section>
  );
};

export default Screenshots;
