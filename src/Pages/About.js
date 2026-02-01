// Pages/About.js
import { personalDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-24 pb-20">
      <section>
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          <span className="text-gradient font-medium">О себе</span>
        </h1>
        <div className="shadow-xl shadow-cyan-100 text-gray-600 font-serif leading-relaxed md:indent-8 text-xl mb-8 animate-fade-in py-8 lg:max-w-3xl">
          {personalDetails.about}
        </div>
      </section>
    </main>
  );
}

export default About;