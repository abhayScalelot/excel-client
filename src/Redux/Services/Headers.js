export default authHeaders = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return {
    "Content-Type": "application/json",
    token: token,
  };
};
