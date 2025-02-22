import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

function Download() {
  return (
    <div id="download" className=" py-16" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/lilac-acrylic-texture-background-wallpaper_53876-104015.jpg?t=st=1740202514~exp=1740206114~hmac=6cf7699c2949083ff099e53ff79f17741326f332aeab8a2eeeae8488d2ddbbd0&w=1060')" }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center lg:text-left">
            <motion.h2
              className="text-4xl font-bold text-gray-800 "
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Download CODE NEXUS
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 my-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Do you love the app and want to make money? What <br /> are you waiting for? Download the app now and start earning!
            </motion.p>
             <button className="btn btn-primary px-20 py-6  rounded-full">
                         DOWNLOAD APK <GoArrowUpRight className="text-2xl" />
                       </button>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.img
              src="https://demo-2.busymart24.shop/frontend/images/header-phone.png"
              alt="App Preview"
              className="w-full max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Download;
