import ThemeChanger from '@/components/ThemeChanger';

export default function Home() {
  return (
    <div className="text-black dark:text-white">
      <h1>William Cruz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga soluta
        dolores qui pariatur nemo, quam saepe quia in nam quibusdam consequuntur
        libero aliquid, officia mollitia ullam deleniti aut dolore sapiente!
      </p>
      <ThemeChanger>Weiter lesen</ThemeChanger>
    </div>
  );
}
