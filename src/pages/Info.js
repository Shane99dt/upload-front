import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { UserContext } from "../context/User";
import editImage from "../components/edit.png";

const Info = () => {
  const { user, image, logout } = useContext(UserContext);
  const [clicked, setClicked] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    if (clicked) {
      setClicked(false);
    }
  }, [image]);

  const handleChangeClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <div>
      <div className="absolute top-5 right-5">
        <button
          className="border-2 border-gray-500 rounded-md px-4 py-2"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      {user && (
        <div className="my-0 mx-auto flex flex-col items-center mt-[50px]">
          <h2 className="text-[40px] capitalize">
            {user.firstName} {user.lastName}
          </h2>
          <h4 className="text-xl">{user.email}</h4>
          {image && (
            <div className="relative">
              <img
                src={editImage}
                className="absolute top-0 right-0"
                onClick={handleChangeClick}
              />
              <img
                src={image.url}
                alt={image.id}
                className={
                  "w-[300px] border-4 rounded-full border-gray-400 mt-5"
                }
              />
              {clicked && <Form type={"updateImage"} />}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Info;
