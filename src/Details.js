// Enter all your details in this file
import logo2 from "./assets/logo2.svg";
import profile from "./assets/profile.png";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import sass from "./assets/techstack/sass.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import fedorCharacter from "./assets/projects/fedor-character.png";
import portfolio from "./assets/projects/portfolio.png";

export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/gfux",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  whatsapp: "https://web.whatsapp.com/",
};

export const workDetails = [
  {
    Position: "Студент веб-разработчик",
    Company: "Свободный фриланс",
    Location: "Москва, Россия",
    Type: "Freelance",
    Duration: "2020 – настоящее время",
  },
  {
    Position: "Frontend Developer",
    Company: "Компания X (конфиденциально)",
    Location: "Москва, Россия",
    Type: "Full Time",
    Duration: "2022 – 2024",
  },
];

export const eduDetails = [
  {
    Position: "Курс веб-разработки",
    Company: "Университет / Онлайн-платформа",
    Location: "Москва / Онлайн",
    Type: "Обучение",
    Duration: "Январь 2022 – настоящее время",
  },
  {
    Position: "Бакалавр по электронике и связи",
    Company: "Московский государственный технический университет",
    Location: "Москва, Россия",
    Type: "Очное",
    Duration: "Август 2020 – Июнь 2024",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  sass: sass,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  typescript: "./assets/techstack/typescript.png",
  nodejs: "./assets/techstack/nodejs.png",
  mongodb: "./assets/techstack/mongodb.png",
  postgresql: "./assets/techstack/postgresql.png",
  docker: "./assets/techstack/docker.png",
  nextjs: "./assets/techstack/nextjs.png",
  aws: "./assets/techstack/aws.png",
};

export const logos = {
  logo2: logo2,
};

export const projectDetails = [
  {
    title: "ПЗ к модулю 1: Веб-технологии и платформенная экономика",
    image: projectImage1,
    description: `Практическое задание по теме: «Веб-технологии: возможности интернет-среды для платформенной экономики». Создано с использованием HTML, CSS, JavaScript и React. Цель — продемонстрировать понимание архитектуры современного веб-приложения и его роли в цифровой экономике.`,
    techstack: "HTML, CSS, JavaScript, React",
    previewLink: "https://ftarasow.ru",
    githubLink: "https://github.com/gfux/Lab.-Web-Technologies.git",
  },
  {
    title: "Личный портфолио-сайт (академический проект)",
    image: portfolio,
    description: `Многоязычный (русский) портфолио-сайт, разработанный для представления итогового проекта университета. Использует React, Redux, Tailwind CSS, размещён на Vercel через GitHub. Структура соответствует стандартам академических работ и демонстрирует навыки современной фронтенд-разработки.`,
    techstack: "React, Redux, Tailwind CSS, Vercel, GitHub",
    previewLink: "https://ftarasow.ru",
    githubLink: "https://github.com/gfux/Site-portfolio---",
  },
  {
    title: "Интерактивный калькулятор",
    image: fedorCharacter,
    description: `Простой, но функциональный калькулятор с поддержкой основных арифметических операций (+, –, ×, ÷), обработкой ошибок и адаптивным интерфейсом. Разработан на React с использованием хуков (useState, useEffect) и стилизован с помощью Tailwind CSS. Проект демонстрирует понимание логики вычислений, управления состоянием и UX-принципов.`,
    techstack: "React, Tailwind CSS, JavaScript",
    previewLink: "https://github.com/gfux/calculator",
    githubLink: "https://github.com/gfux/calculator",
  },
  {
    title: "Интерактивный учебный трекер",
    image: projectImage5,
    description: `Приложение для отслеживания прогресса в изучении веб-технологий. Использует Redux для управления состоянием, данные хранятся в localStorage. Создано как учебный проект для демонстрации работы с состоянием в React.`,
    techstack: "React, Redux, localStorage",
    previewLink: "https://github.com/gfux/learning-tracker",
    githubLink: "https://github.com/gfux/learning-tracker",
  },
  {
    title: "Многоязычный блог (на русском)",
    image: projectImage6,
    description: `Простой блог с поддержкой русского языка, реализованный на Next.js и Markdown. Планируется расширение до поддержки английского и других языков. Используется для демонстрации подходов к локализации в веб-приложениях.`,
    techstack: "Next.js, MDX, Tailwind CSS",
    previewLink: "https://github.com/gfux/blog-multilang",
    githubLink: "https://github.com/gfux/blog-multilang",
  },
];

export const contactDetails = {
  email: "ft-2@bk.ru",
  phone: "+7 (903) 698-74-09",
};

export const personalDetails = {
  name: "Фёдор Тарасов",
  tagline: "Студент веб-разработки | Создаю современные веб-решения",
  img: profile,
  image: profile,
  description: "Frontend Developer",
  about: <p className="text-gray-600 leading-relaxed text-lg text-2xl mb-8 animate-fade-in">Студент курса веб-разработки с более чем 5 годами опыта в разработке программного обеспечения. Специализируюсь на фронтенде (React, TypeScript, Tailwind CSS) и полном стеке (Node.js, MongoDB, PostgreSQL). Увлекаюсь современными веб-технологиями, открытой разработкой и созданием продуктов, которые делают жизнь проще. Сейчас готовлю итоговый проект для университета, объединяя академические знания с реальным опытом.</p>,
};