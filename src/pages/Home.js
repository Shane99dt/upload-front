import LinkButton from "../components/LinkButton";

const Home = () => {
  return (
    <>
      <h1 className="text-5xl text-gray-100">Home</h1>
      <h1 className="text-3xl text-gray-300 my-3">Exercise Upload</h1>
      <p className="text-gray-400">Sign up and add a picture</p>
      <div className="flex row gap-5 mt-5">
        <LinkButton to={"signup"} label={"Sign up"} />
        <LinkButton to={"login"} label={"Log in"} />
      </div>
    </>
  );
};

export default Home;
