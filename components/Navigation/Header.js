import ToggleDarkMode from '@/components/Navigation/ToggleDarkMode';
import Logo from '@/components/Navigation/Logo';

const Header = () => {
  return (
    <div className="fixed w-screen flex justify-between py-5 px-10 z-50">
      <Logo />
      <ToggleDarkMode />
    </div>
  );
};

export default Header;
