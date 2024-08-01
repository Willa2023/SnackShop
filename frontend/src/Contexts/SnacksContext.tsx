import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Snack } from '../Models/SnackStockSellCart';
import { createSnack, getSnacks } from '../Services/SnackService';

interface SnacksContextProps {
  snacks: Snack[];
  setSnacks: React.Dispatch<React.SetStateAction<Snack[]>>;
  addSnack: (snack: Omit<Snack, 'id'>) => void;
}

const SnacksContext = createContext<SnacksContextProps | undefined>(undefined);

export const SnacksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [snacks, setSnacks] = useState<Snack[]>([]);

  const fetchSnacks = async () => {
    const data = await getSnacks();
    setSnacks(data);
  };

  const addSnack = async (snack: Omit<Snack, 'id'>) => {
    try {
      const newSnack = await createSnack(snack);
      setSnacks((prev) => [...prev, newSnack]);
    } catch (err) {
      console.log('Failed to add student');
    }
  };

  useEffect(() => {
    fetchSnacks();
  }, []);

  return (
    <SnacksContext.Provider value={{ snacks, setSnacks, addSnack }}>
      {children}
    </SnacksContext.Provider>
  );
};

export const useSnacks = () => {
  const context = useContext(SnacksContext);
  if (context === undefined) {
    throw new Error('useSnacks must be used within a SnacksProvider');
  }
  return context;
};
