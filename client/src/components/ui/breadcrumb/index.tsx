import { Link } from "react-router-dom";

const Breadcrumb = (props: { name: string; category: string }) => {
  return (
    <>
      <nav className="py-4 font-thin text-gray-500 hover:text-gray-900">
        <Link to="/">Pagrindinis</Link>
        <span className="mx-2">/</span>
        <span>{props.category}</span>
        <span className="mx-2">/</span>
        <span>{props.name}</span>
      </nav>
    </>
  );
};

export default Breadcrumb;
