import { Navigate, Outlet } from "react-router-dom";

import React from "react";

function ProtectedRoute({ children, user, redirect = "/" }) {
  if (!user) return <Navigate to={redirect} />;

  return children ? children: <Outlet/>;
}

export default ProtectedRoute;
