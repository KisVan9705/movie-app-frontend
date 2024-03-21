import { useNavigate } from "react-router-dom";
export function isAuthenticated() {
  let token = localStorage.getItem("token");
  return token;
}

export function isAdmin() {
  let role = localStorage.getItem("role");
  return role === "admin";
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
