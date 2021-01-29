import { useTheme } from 'next-themes';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="text-black dark:text-white">
      The current theme is: {theme}
      <button
        onClick={() => setTheme('light')}
        className="text-black dark:text-white"
      >
        Light Mode
      </button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
};

export default ThemeChanger;
