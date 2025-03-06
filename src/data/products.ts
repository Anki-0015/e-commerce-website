import { Product } from '../types';

export const products: Product[] = [
  // Electronics & Audio
  {
    id: 1,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 24999,
    description: "Industry-leading noise cancellation with premium sound quality and 30-hour battery life",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    rating: 4.8,
    featured: true,
    discount: 15,
    stock: 45,
    specs: {
      color: "Black",
      connectivity: "Bluetooth 5.0",
      batteryLife: "30 hours",
      weight: "254g"
    }
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    price: 129999,
    description: "14-inch Liquid Retina XDR display, M2 Pro chip, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    category: "Laptops",
    rating: 4.9,
    featured: true,
    stock: 20,
    specs: {
      processor: "M2 Pro",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14-inch Liquid Retina XDR"
    }
  },
  // Smartphones
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    price: 149999,
    description: "A17 Pro chip, 6.7-inch ProMotion display, 48MP camera system",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80",
    category: "Smartphones",
    rating: 4.9,
    featured: true,
    stock: 30,
    specs: {
      processor: "A17 Pro",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP + 12MP + 12MP"
    }
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    price: 134999,
    description: "Snapdragon 8 Gen 3, 6.8-inch QHD+ display, 200MP camera",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    category: "Smartphones",
    rating: 4.8,
    featured: true,
    stock: 25,
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "512GB",
      camera: "200MP + 12MP + 10MP + 10MP"
    }
  },
  // Gaming
  {
    id: 5,
    name: "PlayStation 5 Digital Edition",
    price: 44999,
    description: "Next-gen gaming with ray tracing, 4K@120Hz, SSD storage",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    category: "Gaming",
    rating: 4.8,
    featured: true,
    stock: 15,
    specs: {
      storage: "825GB SSD",
      resolution: "4K",
      fps: "120Hz",
      hdmi: "HDMI 2.1"
    }
  },
  {
    id: 6,
    name: "Xbox Series X",
    price: 49999,
    description: "12 teraflops of power, Quick Resume, Xbox Game Pass ready",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80",
    category: "Gaming",
    rating: 4.7,
    stock: 18,
    specs: {
      storage: "1TB SSD",
      resolution: "4K",
      fps: "120Hz",
      processor: "Custom AMD Zen 2"
    }
  },
  // Cameras
  {
    id: 7,
    name: "Sony A7 IV",
    price: 179999,
    description: "33MP full-frame sensor, 4K video, advanced autofocus",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    category: "Cameras",
    rating: 4.9,
    featured: true,
    stock: 12,
    specs: {
      sensor: "33MP Full-frame",
      iso: "100-51200",
      video: "4K/60p",
      stabilization: "5-axis IBIS"
    }
  },
  {
    id: 8,
    name: "Canon EOS R6 Mark II",
    price: 164999,
    description: "24.2MP full-frame sensor, 40fps, advanced AF",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
    category: "Cameras",
    rating: 4.8,
    stock: 10,
    specs: {
      sensor: "24.2MP Full-frame",
      iso: "100-102400",
      video: "4K/60p",
      stabilization: "5-axis IBIS"
    }
  },
  // Smart Home
  {
    id: 9,
    name: "Amazon Echo Show 15",
    price: 27999,
    description: "15.6\" smart display with Alexa and Fire TV built-in",
    image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=800&q=80",
    category: "Smart Home",
    rating: 4.6,
    stock: 30,
    specs: {
      display: "15.6\" FHD",
      camera: "5MP",
      processor: "Amazon AZ2",
      speakers: "Stereo"
    }
  },
  // Wearables
  {
    id: 10,
    name: "Apple Watch Ultra 2",
    price: 89999,
    description: "49mm titanium case, precision GPS, action button",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80",
    category: "Wearables",
    rating: 4.9,
    featured: true,
    stock: 20,
    specs: {
      display: "49mm Always-On",
      battery: "36 hours",
      water: "100m",
      gps: "Precision dual-frequency"
    }
  },
  // TVs
  {
    id: 11,
    name: "LG C3 77\" OLED TV",
    price: 279999,
    description: "4K OLED evo with a9 Gen6 AI Processor",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    category: "TVs",
    rating: 4.9,
    featured: true,
    discount: 10,
    stock: 8,
    specs: {
      display: "77\" 4K OLED",
      hdr: "Dolby Vision IQ",
      processor: "a9 Gen6 AI",
      refresh: "120Hz"
    }
  },
  // Tablets
  {
    id: 12,
    name: "iPad Pro 12.9\"",
    price: 119999,
    description: "M2 chip, Liquid Retina XDR display, 5G capable",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    category: "Tablets",
    rating: 4.8,
    stock: 25,
    specs: {
      processor: "M2",
      display: "12.9\" Liquid Retina XDR",
      storage: "256GB",
      camera: "12MP Wide + 10MP Ultra Wide"
    }
  },
  // PC Components
  {
    id: 13,
    name: "NVIDIA GeForce RTX 4090",
    price: 149999,
    description: "The ultimate graphics card for gaming and content creation",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
    category: "PC Components",
    rating: 4.9,
    featured: true,
    stock: 5,
    specs: {
      memory: "24GB GDDR6X",
      cores: "16384 CUDA",
      boost: "2.52 GHz",
      power: "450W"
    }
  },
  // Drones
  {
    id: 14,
    name: "DJI Air 3",
    price: 89999,
    description: "Dual cameras, 4K/60fps video, 46-minute flight time",
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&w=800&q=80",
    category: "Drones",
    rating: 4.7,
    stock: 15,
    specs: {
      camera: "Dual 1/1.3\" CMOS",
      video: "4K/60fps",
      flight: "46 minutes",
      range: "20km"
    }
  },
  // Audio
  {
    id: 15,
    name: "Apple AirPods Pro 2",
    price: 24999,
    description: "H2 chip, Adaptive Audio, USB-C charging",
    image: "https://images.unsplash.com/photo-1588156979435-379b9d802b0a?auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    rating: 4.8,
    stock: 40,
    specs: {
      chip: "H2",
      anc: "Active Noise Cancellation",
      battery: "6 hours",
      charging: "USB-C"
    }
  },
  // Monitors
  {
    id: 16,
    name: "Samsung Odyssey OLED G9",
    price: 149999,
    description: "49\" curved OLED gaming monitor, 240Hz",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    category: "Monitors",
    rating: 4.8,
    featured: true,
    stock: 7,
    specs: {
      display: "49\" OLED",
      resolution: "5120x1440",
      refresh: "240Hz",
      hdr: "VESA DisplayHDR True Black 400"
    }
  }
];

export const categories = [
  "All",
  "Smartphones",
  "Laptops",
  "Audio",
  "Gaming",
  "Cameras",
  "TVs",
  "Tablets",
  "Wearables",
  "Smart Home",
  "PC Components",
  "Monitors",
  "Drones",
  "Accessories"
];

export const featuredCollections = [
  {
    id: 1,
    name: "Gaming Setup Essentials",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
    products: [5, 6, 16, 13]
  },
  {
    id: 2,
    name: "Content Creator Kit",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    products: [7, 14, 2]
  },
  {
    id: 3,
    name: "Smart Home Bundle",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    products: [9, 11, 4]
  }
];