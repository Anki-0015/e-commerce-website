export interface ProductSpecs {
  [key: string]: string | number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  featured?: boolean;
  discount?: number;
  stock: number;
  specs: ProductSpecs;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  orders: Order[];
  createdAt: string;
  wishlist?: number[];
  addresses?: Address[];
  addToWishlist?: (productId: number) => void;
  removeFromWishlist?: (productId: number) => void;
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: Address;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  addToWishlist?: (productId: number) => void;
  removeFromWishlist?: (productId: number) => void;
  addAddress?: (address: Omit<Address, 'id'>) => void;
  updateAddress?: (address: Address) => void;
  removeAddress?: (addressId: string) => void;
}

export interface FeaturedCollection {
  id: number;
  name: string;
  image: string;
  products: number[];
}