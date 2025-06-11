
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-templar-black border-templar-gold/20 overflow-hidden group cursor-pointer transition-all duration-300 hover:border-templar-gold/60 hover:shadow-lg hover:shadow-templar-gold/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-templar-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 flex items-center justify-center space-x-4">
            <Button
              size="icon"
              variant="outline"
              className="border-templar-gold text-templar-gold hover:bg-templar-gold hover:text-templar-black transition-colors"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="border-templar-gold text-templar-gold hover:bg-templar-gold hover:text-templar-black transition-colors"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-templar-gold text-templar-black px-2 py-1 text-xs font-cinzel font-semibold rounded">
            {product.category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-cinzel font-semibold text-templar-gold mb-2">
          {product.name}
        </h3>
        
        <p className="text-templar-silver text-sm mb-4">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-cinzel font-bold text-templar-gold">
            ${product.price}
          </span>
          
          <Button
            className="bg-templar-gold hover:bg-templar-gold/90 text-templar-black font-cinzel font-semibold transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
