import React from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredCollections } from '../data/products';
import { useNavigate } from 'react-router-dom';

export const FeaturedCollections: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Featured Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCollections.map((collection) => (
          <div
            key={collection.id}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{collection.name}</h3>
              <button
                onClick={() => navigate(`/collection/${collection.id}`)}
                className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
              >
                View Collection <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};