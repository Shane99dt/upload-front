import { Link } from "react-router-dom";
import Form from "../components/Form";
import LinkButton from "../components/LinkButton";

const Login = () => {
  return (
    <div>
      <div className="absolute top-5 right-5">
        <LinkButton to={"signup"} label={"Sign up"} />
      </div>
      <Form type={"login"} />
    </div>
  );
};

export default Login;
