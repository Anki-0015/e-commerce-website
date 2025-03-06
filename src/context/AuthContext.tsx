import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = 'users_data';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const getUsers = (): User[] => {
    const stored = localStorage.getItem(USERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  };

  const saveUsers = (users: User[]) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const addToWishlist = (productId: number) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      wishlist: [...(user.wishlist || []), productId],
    };
    setUser(updatedUser);

    const users = getUsers();
    const updatedUsers = users.map(u => 
      u.id === user.id ? updatedUser : u
    );
    saveUsers(updatedUsers);
  };

  const removeFromWishlist = (productId: number) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      wishlist: (user.wishlist || []).filter(id => id !== productId),
    };
    setUser(updatedUser);

    const users = getUsers();
    const updatedUsers = users.map(u => 
      u.id === user.id ? updatedUser : u
    );
    saveUsers(updatedUsers);
  };

  const login = async (email: string, password: string) => {
    const users = getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error('Invalid email or password');
    }

    setUser({
      ...user,
      wishlist: user.wishlist || [],
      addToWishlist,
      removeFromWishlist,
    });
  };

  const register = async (email: string, password: string, name: string) => {
    const users = getUsers();
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      password,
      name,
      orders: [],
      wishlist: [],
      createdAt: new Date().toISOString(),
      addToWishlist,
      removeFromWishlist,
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout,
      addToWishlist,
      removeFromWishlist
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}