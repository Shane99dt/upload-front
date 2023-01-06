import { Link } from "react-router-dom";
import Form from "../components/Form";

const Login = () => {
  return (
    <div>
      <div className="absolute top-5 right-5">
        <Link
          className="border-2 border-gray-500 rounded-md px-4 py-2"
          to={"/"}
        >
          Signup
        </Link>
      </div>
      <Form type={"login"} />
    </div>
  );
};

export default Login;
