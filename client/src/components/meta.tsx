import { Helmet } from "react-helmet-async";

const Meta = (props: {
  title: string;
  description: string;
  keywords: string;
}) => {
  return (
    <Helmet>
      <title>Startopas.lt - {props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
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
