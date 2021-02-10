import { motion } from 'framer-motion';
import Title from '../Title';

const Banner = () => {
  const variantOne = {
    hidden: { width: '100vw' },
    visible: {
      width: '50vw',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        type: 'Inertia',
        stiffness: 100
      }
    }
  };
  const variantTwo = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren'
      }
    }
  };

  return (
    <section className="h-screen w-screen overflow-hidden">
      <motion.div
        className="bg-gray-900 h-full w-1/2 flex justify-end items-center"
        initial="hidden"
        animate="visible"
        variants={variantOne}
      >
        <motion.h1
          className="font-bold text-9xl transform translate-x-1/2 "
          variants={variantTwo}
        >
          <Title title="Hello" />
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Banner;
