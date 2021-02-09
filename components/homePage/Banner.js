import { motion } from 'framer-motion';

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
        className="h-full w-1/2 bg-brand-500 flex justify-end items-center"
        initial="hidden"
        animate="visible"
        variants={variantOne}
      >
        <motion.h1
          className="font-bold text-9xl transform translate-x-1/2 "
          variants={variantTwo}
        >
          {'He'} <br />
          {'llo'}
          <motion.span className="text-brand-500" variants={variantTwo}>
            .
          </motion.span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Banner;
