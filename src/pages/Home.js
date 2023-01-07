import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";

const Home = () => {
  return (
    <>
      <h1 className="text-5xl text-gray-100">Home</h1>
      <div className="flex row gap-5 mt-5">
        <LinkButton to={"signup"} label={"Sign up"} />
        <LinkButton to={"login"} label={"Log in"} />
      </div>
    </>
  );
};

export default Home;
