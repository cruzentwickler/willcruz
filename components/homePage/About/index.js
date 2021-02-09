import Content from '@/components/homePage/About/Content';
import Services from '@/components/homePage/About/Services';

const About = () => {
  return (
    <section className="grid min-h-screen lg:grid-cols-2 ">
      <div className="content-center grid justify-center">
        <Content />
      </div>
      <div className="content-end grid">
        <Services />
      </div>
    </section>
  );
};

export default About;
