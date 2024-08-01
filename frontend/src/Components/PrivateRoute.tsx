import { useAuth0 } from '@auth0/auth0-react';
import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserInfo } from '../Contexts/UserInfoContext';

const PrivateRoute = ({
  children,
  requiredRoles,
}: {
  children?: ReactNode;
  requiredRoles: string[];
}) => {
  const { isAuthenticated } = useAuth0();
  const { roles: userRoles } = useUserInfo();
  const hasPermission = requiredRoles.some((role) => userRoles.includes(role));

  if (!isAuthenticated || !hasPermission) {
    return <Navigate to="/nopermission" />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;
