import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdatePicture } from "../api/Picture";
import { UserContext } from "../context/User";
import Button from "./Button";

const Form = ({ type }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState(null);
  const { setToken, user, setUser, setImage } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      navigate("/info");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    const requestUser = await fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const responseUser = await requestUser.json();
    setUser(responseUser);

    const formdata = new FormData();
    formdata.append("picture", picture, picture.name);

    const requestImage = await fetch(
      `http://localhost:5000/photo/${responseUser.id}`,
      {
        method: "POST",
        body: formdata,
      }
    );

    const responseImage = await requestImage.json();
    setImage(responseImage);

    if (requestUser.status === 200) {
      navigate("/info");
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const login = {
      email,
      password,
    };

    const requestUser = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const { token } = await requestUser.json();

    if (token) {
      setToken(token);
    } else {
      navigate("/signup");
    }
  };

  const handleSubmitUpdateImage = async (e) => {
    e.preventDefault();
    const updateImage = await UpdatePicture(picture, user.id);
    setImage(updateImage);
  };

  return (
    <>
      {type === "login" && (
        <form
          action="/single"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmitLogin}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChangeEmail}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChangePassword}
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <Button type={"submit"} />
        </form>
      )}

      {type === "signup" && (
        <form
          action="/single"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChangeEmail}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChangePassword}
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="file"
              id="file_input"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              type="file"
              required
              onChange={handleChangePicture}
            />
            <label
              className="block mb-2 text-sm font-medium text-gray-500"
              htmlFor="file_input"
            >
              Upload picture
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChangeFirstName}
              />
              <label
                htmlFor="firstName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChangeLastName}
              />
              <label
                htmlFor="lastName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <Button type={"submit"} />
        </form>
      )}

      {type === "updateImage" && (
        <form
          action="/single"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmitUpdateImage}
        >
          <input
            name="file"
            id="file_input"
            className="max-w-[200px]"
            placeholder=""
            type="file"
            required
            onChange={handleChangePicture}
          />
          <Button type={"submit"} />
        </form>
      )}
    </>
  );
};

export default Form;
