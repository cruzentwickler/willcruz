import Container from '@/components/Container';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TimeLine from '@/components/TimeLine';

export default function Home() {
  return (
    <Container>
      <Banner />
      <About />
      <Projects />
      <TimeLine />
    </Container>
  );
}
