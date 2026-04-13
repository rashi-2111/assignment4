import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  // If logged in → go to dashboard
  if (token) {
    return <Navigate to="/dashboard" />;
  }

  // If not logged in → allow access
  return children;
}