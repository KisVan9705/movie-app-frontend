import { useNavigate } from "react-router-dom";
export function isAuthenticated() {
  let token = localStorage.getItem("token");
  return token;
}
export function navigateIfAuthenticated(url) {
  const navigate = useNavigate();
  if (isAuthenticated()) {
    navigate(url);
  }
}

export function signOut() {
  // const navigate = useNavigate();
  localStorage.removeItem("token");
  // navigate("/");
}
