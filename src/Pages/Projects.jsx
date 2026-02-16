// Projects.jsx
/* eslint-disable react/style-prop-object */
import React from "react";
import Project from "../Components/Project";
import { projectsWithWeather } from "../Details";
import WeatherProjectCard from "../Components/WeatherProjectCard";
import VisitorCounter from "../Components/VisitorCounter";
import TemplateMatrix from '../Components/TemplateMatrix';

function Projects() {
  return (
    <main className="container mx-auto max-width pt-24 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-center mb-12">
          <span className="text-gradient font-medium">Мои "игрушки"</span>
        </h1>

        {/* Сетка 3 колонки с auto-высотой */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 items-stretch">
          
          {/* 1. Калькулятор */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
              <h2 className="text-xl font-bold text-center text-blue-600 dark:text-blue-400">
                🧮 Калькулятор Фёдора
              </h2>
            </div>
            <div className="flex-1 p-4">
              {projectsWithWeather.find(p => p.title === "Интерактивный калькулятор") && (
                <Project
                  title="Интерактивный калькулятор"
                  image={projectsWithWeather.find(p => p.title === "Интерактивный калькулятор").image}
                  techstack="React, Tailwind CSS, JavaScript"
                  previewLink="https://github.com/gfux/calculator"
                  githubLink="https://github.com/gfux/calculator"
                />
              )}
            </div>
          </div>

          {/* 2. Погодный информер */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
              <h2 className="text-xl font-bold text-center text-blue-600 dark:text-blue-400">
                🌦️ Погодный информер
              </h2>
            </div>
            <div className="flex-1 p-4">
              <WeatherProjectCard />
            </div>
          </div>

          {/* 3. Счётчик посетителей */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
              <h2 className="text-xl font-bold text-center text-blue-600 dark:text-blue-400">
                📊 Счётчик посетителей
              </h2>
            </div>
            <div className="flex-1 p-4">
              <VisitorCounter style="modern" />
            </div>
          </div>
        </div>

        {/* ✅ ГАЛЕРЕЯ МАКЕТОВ — ТЕПЕРЬ ЗДЕСЬ, ПОСЛЕ СЕТКИ */}
         <TemplateMatrix /> 

        {/* Остальные проекты */}
        {projectsWithWeather.filter(p => p.title !== "Интерактивный калькулятор").length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projectsWithWeather
              .filter(item => item.title !== "Интерактивный калькулятор")
              .map((item, index) => {
                if (item.type === "weather") return null;
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
        )}
      </section>
    </main>
  );
}

export default Projects;