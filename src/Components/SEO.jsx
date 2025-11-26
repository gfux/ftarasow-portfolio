import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Федор Тарасов - Frontend Developer", 
  description = "Портфолио фронтенд-разработчика Федора Тарасова. React, JavaScript, современные веб-технологии.", 
  keywords = "frontend, react, javascript, разработчик, портфолио", 
  image = "/src/assets/profile.png" 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;