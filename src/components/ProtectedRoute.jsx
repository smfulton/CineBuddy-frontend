import { Navigate, Outlet } from "react-router-dom";

// Mock auth check - replace with real auth later
const isAuthenticated = false; // change to true to test access

const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
