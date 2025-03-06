import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onRemoveFromCart,
  onUpdateQuantity,
  isOpen,
  onClose,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = items.reduce((sum, item) => {
    const price = item.discount 
      ? item.price * (1 - item.discount / 100)
      : item.price;
    return sum + price * item.quantity;
  }, 0);
  
  const shipping = subtotal > 10000 ? 0 : 499;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-[480px] bg-white dark:bg-dark-900 shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b dark:border-dark-700">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold flex items-center gap-2 gradient-text">
                <ShoppingBag />
                Shopping Cart
              </h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => {
                  const price = item.discount 
                    ? item.price * (1 - item.discount / 100)
                    : item.price;
                  
                  return (
                    <div key={item.id} className="flex gap-4 bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg dark:text-gray-100">{item.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold gradient-text">
                            {formatPrice(price)}
                          </span>
                          {item.discount && (
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                              {formatPrice(item.price)}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              onUpdateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="border dark:border-dark-700 rounded-lg px-2 py-1 bg-white dark:bg-dark-900 dark:text-gray-100"
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-1"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t dark:border-dark-700 p-6">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-2 border-t dark:border-dark-700">
                  <span className="dark:text-gray-100">Total</span>
                  <span className="gradient-text">{formatPrice(total)}</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg text-lg font-semibold transition-all">
                Proceed to Checkout
              </button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Free shipping on orders over ₹10,000
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};