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
import fedorCharacter from "./assets/projects/fedor-character.png";

export const socialMediaUrl = {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/gfux",
    twitter: "https://x.com/fuxirov",
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
    title: "Интерактивный калькулятор",
    image: fedorCharacter,
    techstack: "React, Tailwind CSS, JavaScript",
    previewLink: "https://github.com/gfux/calculator",
    githubLink: "https://github.com/gfux/calculator",
  },
];

export const contactDetails = {
  email: "ft-2@bk.ru",
  phone: "+7 (903) 698-74-09",
};

export const personalDetails = {
  name: "Фёдор Тарасов",
  tagline: "Веб-разработчик",
  img: profile,
  image: profile,
  description: "Frontend Developer",
  about: <p className="text-gray-600 leading-relaxed text-lg text-2xl mb-8 animate-fade-in">Специализируюсь на фронтенде (React, TypeScript, Tailwind CSS) и полном стеке (Node.js, MongoDB, PostgreSQL). Увлекаюсь современными веб-технологиями, открытой разработкой и созданием продуктов, которые делают жизнь проще.</p>,
};