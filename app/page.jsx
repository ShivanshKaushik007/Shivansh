import Hero from "@/components/sections/Hero";
import Resume from "@/components/sections/Resume";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <Resume />
      <Work />
      <Contact />
    </main>
  );
};

export default Home;