// import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import FeaturedCards from "./sections/featureCards";
import Hero from "./sections/hero";
import ShowcaseSection from "./sections/showcase";
import ExperienceSection from "./sections/experienceSection";
import TechStack from "./sections/techStack";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import { Helmet } from "react-helmet";
// import Testimonials from "./sections/testimonials";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Arif | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Arif — a developer based in Indonesia, turning ideas into beautiful, functional apps."
        />
        <meta property="og:title" content="Arif | Anor Studio Portfolio" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-preview.png"
        />
        <meta
          property="og:description"
          content="Explore my featured work, tech stack, and experience."
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        {/* <LogoSection /> */}
        <FeaturedCards />
        <ExperienceSection />
        <TechStack />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
