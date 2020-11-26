import axios from "axios";

function Logout() {
  const request = axios
    .get("/api/users/logout")
    .then((res) => console.log(res.data));

  return null;
}

export default Logout;
