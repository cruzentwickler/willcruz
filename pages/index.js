import Container from '@/components/Container';
import Banner from '@/components/homePage/Banner';
import About from '@/components/homePage/About';
import Projects from '@/components/homePage/Projects';
import TimeLine from '@/components/homePage/TimeLine';

export default function Home() {
  return (
    <Container>
      <Banner />
      {/* <About />
      <Projects />
      <TimeLine /> */}
    </Container>
  );
}
