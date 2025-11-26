import React, { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { Link } from "react-router-dom";

const Home = () => {
  const { img, name, tagline } = personalDetails; // убрали неиспользуемую about
  const h11 = useRef();
  const myimageref = useRef();
  const buttonRef = useRef();
  
  const technologies = useMemo(() => 
    ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'], 
  []);
  
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(h11.current, 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    )
    .fromTo(myimageref.current, 
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
      "-=1"
    )
    .fromTo(buttonRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center">
      <main className="container mx-auto max-width section md:flex justify-between items-center py-10 px-4">
        {/* Текстовая часть */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1
            ref={h11}
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold leading-tight mb-6"
          >
            Привет, я <span className="text-gradient">{name}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
            {tagline}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Создаю современные и функциональные веб-приложения на React, JavaScript и TypeScript. 
            Специализируюсь на фронтенд-разработке с фокусом на производительность, UX и чистый код.
          </p>

          {/* Ключевые навыки */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Ключевые технологии:</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Кнопки призыва к действию */}
          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/projects" 
              className="bg-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 text-center"
            >
              📁 Смотреть проекты
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
            >
              📞 Связаться со мной
            </Link>
          </div>
        </div>

        {/* Изображение */}
        <div className="md:w-2/5 flex justify-center">
          <div className="relative">
            <img 
              ref={myimageref} 
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-8 border-white"
              src={img}
              alt={name}
              loading="lazy"
            />
            {/* Декоративный элемент */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;