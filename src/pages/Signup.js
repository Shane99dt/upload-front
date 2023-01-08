import Form from "../components/Form";
import LinkButton from "../components/LinkButton";

const Signup = () => {
  return (
    <div>
      <div className="absolute top-5 right-5">
        <label className="text-gray-300 mr-3">Already have an account?</label>
        <LinkButton to={"login"} label={"Log in"} />
      </div>
      <div className="absolute top-5 left-5">
        <LinkButton to={""} label={"Home"} />
      </div>
      <Form type={"signup"} />
    </div>
  );
};

export default Signup;
