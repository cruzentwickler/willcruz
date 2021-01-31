import ToggleDarkMode from '@/components/ToggleDarkMode';

const Container = ({ children }) => {
  return (
    <>
      <ToggleDarkMode />
      <main>{children}</main>
    </>
  );
};

export default Container;
