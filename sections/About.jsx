'use-client'
import styles from "../styles";
import { motion } from 'framer-motion';
import { IoMdCheckmarkCircleOutline  } from 'react-icons/io';
import { fadeIn } from "../utils/motion";

const icons = {
  check:  <IoMdCheckmarkCircleOutline size={22} className='text-green-500'/>,
};

const About = () => {
  return (
      <div className={`${styles.xPadding} md:mx-8 lg:mx-20 lg:px-20 md:mt-20 lg:mt-0`}>
        <div className="grid  md:flex md:justify-around gap-10 items-center lg:py-20">
        <div className="flex justify-center items-center md:hidden my-10  ">
          <motion.img 
           initial="hidden"
           whileInView="show"
           variants={fadeIn('up', 'tween', 0.25, 0.75)}
           src='phone.png' alt='' className=' w-[350px] h-[300px] object-contain' />
          </div>
          <div className="lg:my-20 ">
          <h1 className="font-black text-white px-6 md:px-0 text-3xl md:pt-20 lg:text-5xl">
            UNIBONK WALLET 
          </h1>
            <p className="text-gray-500 text-lg my-4 px-6 md:px-0">New digital web 3.0 wallet manage your crypto asset.</p>
           <div className="hidden md:grid grid-cols-2 mt-8 text-xl font-bold">
           <h4 className="flex items-center gap-1 text-white ">
           <motion.span
             initial="hidden"
             whileInView="show"
           variants={fadeIn('center', 'tween', 0.25, 1)}
           >
            {icons.check} 
           </motion.span> 
               Self-custody 
              </h4>
           <h4 className="flex items-center gap-1 text-white">
           <motion.span
             initial="hidden"
             whileInView="show"
           variants={fadeIn('center', 'tween', 0.5, 1.25)}
           >
            {icons.check} 
           </motion.span> 
            Secure
            </h4>
           <h4 className="flex items-center gap-1 mt-8 text-white">
           <motion.span
             initial="hidden"
             whileInView="show"
           variants={fadeIn('center', 'tween', 0.75, 1.5)}
           >
            {icons.check} 
           </motion.span> 
            Multi-chain
            </h4>
           <h4 className="flex items-center gap-1 mt-8 text-white">
           <motion.span
             initial="hidden"
             whileInView="show"
           variants={fadeIn('center', 'tween', 1, 2)}
           >
            {icons.check} 
           </motion.span> 
            Friendly-UI
          </h4>
            </div> 
            <div className='flex my-10 md:py-10 px-4 md:px-0'>
              <img src='playstore.png' className="w-[120px] h-[40px] md:w-[160px] md:h-[50px]" alt=''/>
              <img src='appstore.png' alt='' className="w-[120px] h-[40px] md:w-[160px] md:h-[50px]"/>
            </div>
          </div>

          <motion.div
           initial="hidden"
           whileInView="show"
           variants={fadeIn('up', 'tween', 0.25, 1)}
           >
            <img src='phone.png' alt='' className='hidden md:flex lg:w-[500px] lg:h-[500px] object-contain' />
          </motion.div>
        </div>   
      </div>
  );
};

export default About;
