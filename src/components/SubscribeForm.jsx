import React from 'react';
import styles from '../style';

const SubscribeForm = () => {
  return (
    <section id='subscribe' className={`flex md:flex-row flex-col px-24 ${styles.paddingY} subscribeContainer`}>
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-start items-end p-8">
        <h2 className="text-5xl font-pointbold text-primary leading-tight">
          Subscribe to stay updated with our progress.
        </h2>
      </div>
      
      {/* Right Column */}
      <div className="flex-2 flex flex-col justify-center items-start p-8">
        <form>
          {/* Boxes */}
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input mt-4" />
          <input type="text" placeholder="University" className="form-input mt-4" />
          <textarea placeholder="Message" className="form-input mt-4"></textarea>

          {/* Submit button */}
          <div className="flex justify-end mt-4">
            <button className="bg-secondary hover:bg-primary text-primary hover:text-white border-2 border-primary rounded-full py-3 px-8 text-xl font-point transition duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeForm;
