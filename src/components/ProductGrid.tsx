
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Templar Cross T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    category: "T-Shirts",
    description: "Classic Templar cross design on premium cotton"
  },
  {
    id: 2,
    name: "Knights Honor Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80",
    category: "Hoodies",
    description: "Heavy-duty hoodie with embroidered Templar seal"
  },
  {
    id: 3,
    name: "Sacred Order Sweatshirt",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80",
    category: "Sweatshirts",
    description: "Comfortable sweatshirt with vintage Templar graphics"
  },
  {
    id: 4,
    name: "Deus Vult T-Shirt",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    category: "T-Shirts",
    description: "Bold statement piece with Latin inscription"
  },
  {
    id: 5,
    name: "Crusader Armor Hoodie",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80",
    category: "Hoodies",
    description: "Detailed armor print with metallic accents"
  },
  {
    id: 6,
    name: "Jerusalem Cross Sweatshirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80",
    category: "Sweatshirts",
    description: "Elegant Jerusalem cross with gold detailing"
  }
];

export const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-templar-stone">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-templar-gold glow-text mb-4">
            Sacred Collection
          </h2>
          <p className="text-lg text-templar-silver max-w-2xl mx-auto">
            Discover our carefully crafted apparel that honors the legendary Knights Templar. 
            Each piece is designed with attention to historical detail and modern comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
