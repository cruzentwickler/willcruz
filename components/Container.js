import Header from '@/components/Navigation/Header';
import SocialBar from '@/components/Navigation/SocialBar';

const Container = ({ children }) => {
  return (
    <>
      <Header />
      <SocialBar />
      <main>{children}</main>
    </>
  );
};

export default Container;
