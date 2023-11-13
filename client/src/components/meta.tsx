import { Helmet } from "react-helmet-async";
import { MetaInterface } from "../services/interfaces/globalInterfaces";

const Meta: React.FC<MetaInterface> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>Startopas.lt - {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Pigiausios žaidimų konsolės",
  description:
    "Parduodame įvairias žaidimų konsoles už žemesnes nei rinkos siūlomas kainas.",
  keywords: "žaidimų konsolės, elektronika, kompiuterija, žaidimai",
};

export default Meta;
