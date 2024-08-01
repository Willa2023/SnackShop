import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useState } from 'react';

interface UserInfoContextProps {
  userId: string | null;
  roles: string[];
}

const UserInfoContext = createContext<UserInfoContextProps | undefined>(
  undefined,
);

export const UserInfoContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [userId, setUserId] = useState<string | null>(null);
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    const getUserInfo = async () => {
      if (isAuthenticated) {
        const tokenClaims = await getIdTokenClaims();
        if (tokenClaims) {
          setUserId(tokenClaims.sub);
          setRoles(tokenClaims['https://snackshop.com/roles']);
        }
      }
    };
    getUserInfo();
  }, [isAuthenticated, getIdTokenClaims]);

  return (
    <UserInfoContext.Provider value={{ userId, roles }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (context === undefined) {
    throw new Error(
      'useUserInfo must be used within a UserInfoContextProvider',
    );
  }
  return context;
};
