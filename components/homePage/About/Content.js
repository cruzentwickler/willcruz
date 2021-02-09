import Link from 'next/link';
import Title from '@/components/Title';
import { motion } from 'framer-motion';

const Content = () => {
  const data = {
    title: 'Digital',
    subTitle: 'An overviewof your digital strategy.',
    content:
      'A key component of your transformation, your digital strategy requires special attention. We provide you with the support you need all during your project. Through regular workshops, brainstormings and idea sharing, we help grow your initial idea into a cutting-edge digital solution.',
    url: '/'
  };
  const { title, subTitle, content, url } = data;

  const variantOne = {
    hiden: {},
    visible: {}
  };

  return (
    <motion.div
      className="border lg:max-w-xs grid gap-8 p-4"
      variants={variantOne}
      initial="hidden"
      animate="visible"
    >
      <Title title={title} />
      <p className="text-4xl font-bold max-w-xs">{subTitle}</p>
      <p className="text-lg max-w-lg">{content}</p>
      <Link href={url}>
        <a className="font-handwriting text-2xl">Weiter lesen</a>
      </Link>
    </motion.div>
  );
};

export default Content;
