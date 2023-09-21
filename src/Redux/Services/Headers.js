import Cookies from "js-cookie";

const gettingCookieValues = () => {
 
  const token = Cookies.get("token");
  console.log('token', token)
};
gettingCookieValues();

export default authHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
