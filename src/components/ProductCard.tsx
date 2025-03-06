import React from 'react';
import { ShoppingCart, Star, StarHalf, Heart } from 'lucide-react';
import { Product } from '../types';
import { useAuth } from '../context/AuthContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { user } = useAuth();
  const isInWishlist = user?.wishlist?.includes(product.id) || false;

  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="text-yellow-400" size={16} />);
    }
    return stars;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleWishlist = () => {
    if (!user) return;
    
    if (isInWishlist) {
      user.removeFromWishlist?.(product.id);
    } else {
      user.addToWishlist?.(product.id);
    }
  };

  return (
    <div className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&w=800&q=80';
          }}
        />
        {product.featured && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-xs rounded-full font-medium shadow-lg z-10">
            Featured
          </span>
        )}
        {product.discount && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-xs rounded-full font-medium shadow-lg z-10">
            {product.discount}% OFF
          </span>
        )}
        {user && (
          <button
            onClick={handleWishlist}
            className={`absolute top-2 right-${product.discount ? '16' : '2'} p-2 rounded-full bg-white/90 dark:bg-dark-900/90 shadow-lg transition-colors z-10 ${
              isInWishlist ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart className={isInWishlist ? 'fill-current' : ''} size={20} />
          </button>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            {renderRating(product.rating)}
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">({product.rating})</span>
          </div>
          <span className={`text-sm font-medium ${
            product.stock < 10 ? 'text-red-500' : 'text-green-500'
          }`}>
            {product.stock < 10 ? `Only ${product.stock} left` : 'In Stock'}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {/* Product Specifications */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
            <div key={key} className="text-xs text-gray-600 dark:text-gray-400">
              <span className="font-medium">{key}: </span>
              {value}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            {product.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold gradient-text">
                  {formatPrice(discountedPrice)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold gradient-text">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
              product.stock === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
            }`}
          >
            <ShoppingCart size={20} />
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};