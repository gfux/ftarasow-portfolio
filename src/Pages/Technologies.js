import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    typescript,
    nodejs,
    postgresql,
    docker,
    nextjs,
    aws,
  } = techStackDetails;
  
  return (
    <main className="container mx-auto max-width pt-24 pb-20">
      <section className="mb-16">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Технологический стек
        </h1>
        <p className="text-content py-2 lg:max-w-3xl text-lg">
          <span className="text-gradient text-2xl font-medium">Технологии&nbsp;, с которыми я работаю</span>
        </p>
      </section>
      
      {/* Стек технологий */}
      <section className="mb-20">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
          Основные технологии
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8">
          {[
            { src: html, title: "HTML", href: "https://htmlbook.ru/samhtml", color: "hover:shadow-orange-500/50" },
            { src: css, title: "CSS", href: "https://www.w3schools.com/Css/", color: "hover:shadow-blue-500/50" },
            { src: js, title: "JavaScript", href: "https://learn.javascript.ru/", color: "hover:shadow-yellow-500/50" },
            { src: typescript, title: "TypeScript", href: "https://www.typescriptlang.org/", color: "hover:shadow-blue-600/50" },
            { src: react, title: "React", href: "https://react.dev/learn", color: "hover:shadow-cyan-500/50" },
            { src: redux, title: "Redux", href: "https://redux.js.org/", color: "hover:shadow-purple-500/50" },
            { src: nextjs, title: "Next.js", href: "https://nextjs.org/", color: "hover:shadow-gray-800/50 dark:hover:shadow-white/50" },
          ].map((tech, index) => (
            <a
              key={index}
              href={tech.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >
              <div className={`
                relative flex flex-col items-center justify-center p-6 
                bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                rounded-2xl border border-gray-200 dark:border-gray-700 
                transition-all duration-500 ease-out
                transform group-hover:-translate-y-3 group-hover:scale-110
                ${tech.color} group-hover:shadow-2xl
                overflow-hidden
              `}>
                {/* Эффект свечения */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-100/30 dark:to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Эффект блика */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10">
                  <img 
                    src={tech.src} 
                    title={tech.title} 
                    alt={tech.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain 
                             transition-transform duration-500 
                             group-hover:scale-125 group-hover:rotate-3
                             filter group-hover:drop-shadow-xl"
                  />
                  <p className="mt-4 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 
                               opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 
                               transition-all duration-300">
                    {tech.title}
                  </p>
                </div>
              </div>
              
              {/* Тень под карточкой */}
              <div className="
                absolute -bottom-2 left-4 right-4 h-4 
                bg-gradient-to-t from-gray-300/50 dark:from-gray-700/50 to-transparent 
                rounded-b-2xl blur-sm
                opacity-0 group-hover:opacity-100 
                transition-all duration-500 ease-out
                transform group-hover:scale-105
              " />
            </a>
          ))}
        </div>
      </section>

      {/* Стили и фреймворки */}
      <section className="mb-20">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
          Стили и фреймворки
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {[
            { src: tailwind, title: "Tailwind CSS", href: "https://tailwindcss.com/", color: "hover:shadow-teal-500/50" },
            { src: bootstrap, title: "Bootstrap", href: "https://getbootstrap.com/", color: "hover:shadow-purple-600/50" },
            { src: sass, title: "SASS", href: "https://sass-lang.com/", color: "hover:shadow-pink-500/50" },
          ].map((tech, index) => (
            <a
              key={index}
              href={tech.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >
              <div className={`
                relative flex flex-col items-center justify-center p-6 
                bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                rounded-2xl border border-gray-200 dark:border-gray-700 
                transition-all duration-500 ease-out
                transform group-hover:-translate-y-3 group-hover:scale-110
                ${tech.color} group-hover:shadow-2xl
                overflow-hidden
              `}>
                <div className="relative z-10">
                  <img 
                    src={tech.src} 
                    title={tech.title} 
                    alt={tech.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain 
                             transition-transform duration-500 
                             group-hover:scale-125 group-hover:rotate-3
                             filter group-hover:drop-shadow-xl"
                  />
                  <p className="mt-4 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 
                               opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 
                               transition-all duration-300">
                    {tech.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Серверные технологии */}
      <section className="mb-20">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
          Серверные технологии
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {[
            { src: nodejs, title: "Node.js", href: "https://nodejs.org/", color: "hover:shadow-green-600/50" },
            { src: postgresql, title: "PostgreSQL", href: "https://www.postgresql.org/", color: "hover:shadow-blue-700/50" },
            { src: docker, title: "Docker", href: "https://www.docker.com/", color: "hover:shadow-blue-500/50" },
            { src: aws, title: "AWS", href: "https://aws.amazon.com/", color: "hover:shadow-orange-600/50" },
          ].map((tech, index) => (
            <a
              key={index}
              href={tech.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >
              <div className={`
                relative flex flex-col items-center justify-center p-6 
                bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                rounded-2xl border border-gray-200 dark:border-gray-700 
                transition-all duration-500 ease-out
                transform group-hover:-translate-y-3 group-hover:scale-110
                ${tech.color} group-hover:shadow-2xl
                overflow-hidden
              `}>
                <div className="relative z-10">
                  <img 
                    src={tech.src} 
                    title={tech.title} 
                    alt={tech.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain 
                             transition-transform duration-500 
                             group-hover:scale-125 group-hover:rotate-3
                             filter group-hover:drop-shadow-xl"
                  />
                  <p className="mt-4 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 
                               opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 
                               transition-all duration-300">
                    {tech.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Инструменты */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-8">
          <span className="text-gradient font-medium">Инструменты</span>
        </h1>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8">
          {[
            { src: vscode, title: "VS Code", href: "https://code.visualstudio.com/", color: "hover:shadow-blue-600/50" },
            { src: git, title: "Git", href: "https://git-scm.com/", color: "hover:shadow-orange-600/50" },
            { src: github, title: "GitHub", href: "https://github.com/", color: "hover:shadow-gray-800/50 dark:hover:shadow-white/50" },
            { src: figma, title: "Figma", href: "https://www.figma.com/", color: "hover:shadow-purple-500/50" },
            { src: npm, title: "NPM", href: "https://www.npmjs.com/", color: "hover:shadow-red-500/50" },
            { src: postman, title: "Postman", href: "https://www.postman.com/", color: "hover:shadow-orange-500/50" },
          ].map((tool, index) => (
            <a
              key={index}
              href={tool.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >
              <div className={`
                relative flex flex-col items-center justify-center p-5 
                bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900
                rounded-2xl border border-gray-300/50 dark:border-gray-600/50
                transition-all duration-400 ease-out
                transform group-hover:-translate-y-2 group-hover:scale-105
                ${tool.color} group-hover:shadow-xl
                overflow-hidden
              `}>
                {/* Эффект свечения */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 p-2">
                  <img 
                    src={tool.src} 
                    title={tool.title} 
                    alt={tool.title}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain 
                             transition-all duration-400 
                             group-hover:scale-110 group-hover:rotate-2
                             filter group-hover:brightness-110 group-hover:contrast-110"
                  />
                  <p className="mt-3 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 
                               opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 
                               transition-all duration-300 text-center">
                    {tool.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Декоративные элементы */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
}

export default Technologies;