import React from 'react';
import { motion } from 'framer-motion';
import phone from './asset/phonw.png';
import './Home.css';
import { DiApple } from 'react-icons/di';
import { CgProfile } from 'react-icons/cg';

const Home = () => {
  return (
    <div className="continer relative ">
      <div className="flex flex-col lg:flex-row  items-center     ">
        <motion.div
          className="flex flex-col lg:items-start lg:pt-32 ml-20 mr-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 20 }}
          transition={{
            duration: '3',
            delay: '1',
          }}
        >
          <h1 className="border-2 border-inherit rounded-2xl p-2">
            Financal Management
          </h1>
          <p className="lg:text-[80px] font-bold">
            A simpler,
            <br /> smarter basic <br /> credit{' '}
            <span className="text-teal-400">card.</span>
          </p>

          {/* hero info */}
          <p>
            Your powerful companion on the road to financial success! Explore
            personal budget management, investment opportunities.
          </p>
          <div className="m-3 flex flex-row">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white  rounded-2xl p-2 mr-10">
                <center>
                  <DiApple />
                </center>
                <p>App Store</p>
              </button>
            </a>
            <div className="flex flex-row text-5xl mr-10">
              <CgProfile />
              <CgProfile />
              <CgProfile />
              <p className="text-xl ml-3">
                24+ <br /> Active user
              </p>
            </div>
          </div>
        </motion.div>
        <div className="background-color  relative lg:-top-30 ">
          <motion.img
            className="relative rounded-3xl lg:-left-20 lg:top-40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 20 }}
            transition={{
              duration: '3',
              delay: '3',
            }}
            src={phone}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
