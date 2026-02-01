// Projects.jsx
import React from "react";
import Project from "../Components/Project";
import { projectsWithWeather } from "../Details";
import WeatherProjectCard from "../Components/WeatherProjectCard";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-24 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          <span className="text-gradient font-medium">Мои "игрушки"</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projectsWithWeather.map((item, index) => {
            if (item.type === "weather") {
              return (
                <div key={`weather-${index}`} className="flex justify-center">
                  <WeatherProjectCard />
                </div>
              );
            }
            return (
              <Project
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                previewLink={item.previewLink}
                githubLink={item.githubLink}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Projects; // ✅ Исправлено