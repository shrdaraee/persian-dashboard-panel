import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useStateContext } from "../../Helper/ContextProvider";

export default function PrivateRoutes() {
  const { Validation } = useStateContext();
  const location = useLocation();

  return Validation ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
