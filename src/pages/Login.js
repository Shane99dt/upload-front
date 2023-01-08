import Form from "../components/Form";
import LinkButton from "../components/LinkButton";

const Login = () => {
  return (
    <div>
      <div className="absolute top-5 right-5">
        <label className="text-gray-300 mr-3">Don't have an account?</label>
        <LinkButton to={"signup"} label={"Sign up"} />
      </div>
      <div className="absolute top-5 left-5">
        <LinkButton to={""} label={"Home"} />
      </div>
      <Form type={"login"} />
    </div>
  );
};

export default Login;
