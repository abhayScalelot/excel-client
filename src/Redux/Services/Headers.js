import Cookies from "js-cookie";
const cookieValue = Cookies.get("myCookie");

const authHeaders = () => {
  return {
    Authorization: `Token ${user?.token}`,
    "Content-Type": "multipart/form-data",
  };
};
