import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Cart, Snack } from '../Models/SnackStockSellCart';
import { useUserInfo } from './UserInfoContext';
import { useSnacks } from './SnacksContext';
import { getCartByUserId } from '../Services/CartService';

interface CartContextProps {
  cart: Cart;
  setCart: (cart: Cart) => void;
  addToCart: (snackId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { userId } = useUserInfo();
  const { snacks } = useSnacks();
  const [cart, setCart] = useState<Cart>({ id: 0, userId: '', cartItems: [] });

  const addToCart = (snackId: number, quantity: number) => {
    const cartItem = cart.cartItems.find((item) => item.snackId === snackId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      const snack = snacks.find((snack) => snack.id === snackId) as Snack;
      if (snack) {
        cart.cartItems.push({ id: Date.now(), snackId, snack, quantity });
      }
    }
    setCart({ ...cart });
  };

  useEffect(() => {
    const loadCartByUserId = async (userId: string) => {
      try {
        const userCart = await getCartByUserId(userId);
        if (userCart) {
          setCart(userCart);
        }
      } catch (error) {
        console.log('Failed to fetch user cart', error);
      }
    };
    if (userId) {
      loadCartByUserId(userId);
    }
  }, [userId]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
