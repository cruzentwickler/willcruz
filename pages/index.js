import Container from '@/components/Container';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <Container>
      <Banner />
      <About />
      <Projects />
    </Container>
  );
}
