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
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Технологический стек
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          <span className="text-gradient font-medium">Технологии, с которыми я недавно работал</span>
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
  <a target="_blank" rel="noreferrer" href="https://htmlbook.ru/samhtml">
    <img src={html} title="HTML" alt="HTML" />
  </a>
  <a target="_blank" rel="noreferrer" href="https://www.w3schools.com/Css/">
    <img src={css} title="CSS" alt="CSS" />
  </a>
  <a target="_blank" rel="noreferrer" href="https://learn.javascript.ru/">
    <img src={js} title="JavaScript" alt="JavaScript" />
  </a>
  <a target="_blank" rel="noreferrer" href="https://react.dev/learn">
    <img src={react} title="React" alt="React" />
  </a>
  <a target="_blank" rel="noreferrer" href="https://redux.js.org/">
    <img src={redux} title="Redux" alt="Redux" />
  </a>
  <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
    <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
  </a>
  <a target="_blank" rel="noreferrer" href="https://getbootstrap.com/">
    <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
  </a>
  <a target="_blank" rel="noreferrer" href="https://sass-lang.com/">
    <img src={sass} title="SASS" alt="SASS" />
  </a>
</section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          <span className="text-gradient font-medium">Инструменты</span>
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
