import { contactDetails } from "../Details";

function Contact() {
  const { email } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Пожалуйста , пишите мне :
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
    </main>
  );
}

export default Contact;
