import { useAuth0 } from '@auth0/auth0-react';
import { ReactNode } from 'react';
import { useSettings } from '../Contexts/SettingsContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({
  children,
  requiredRoles,
}: {
  children?: ReactNode;
  requiredRoles: string[];
}) => {
  const { isAuthenticated } = useAuth0();
  const { roles: userRoles } = useSettings();
  const hasPermission = requiredRoles.some((role) => userRoles.includes(role));

  if (!isAuthenticated || !hasPermission) {
    return <Navigate to="/nopermission" />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;
