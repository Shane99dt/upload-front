const User = async (token) => {
  const request = await fetch("http://localhost:5000/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();

  return response;
};
