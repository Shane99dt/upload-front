import { Link } from "react-router-dom";

const LinkButton = ({ to, label, className }) => {
  return (
    <Link
      to={`/${to}`}
      className={`border-2 border-gray-500 hover:bg-gray-500 text-gray-300 rounded-md px-4 py-2 ${className}`}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
