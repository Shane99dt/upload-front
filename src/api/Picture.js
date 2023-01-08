// const User = async (token) => {
//   const request = await fetch("http://localhost:5000/user", {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const response = await request.json();

//   return response;
// };

const UpdatePicture = async (file, id) => {
  const formdata = new FormData();
  formdata.append("picture", file, file.name);

  const request = await fetch(`http://localhost:5000/photo/${id}/update`, {
    method: "PUT",
    body: formdata,
  });

  const response = await request.json();
  return response;
};

export { UpdatePicture };
