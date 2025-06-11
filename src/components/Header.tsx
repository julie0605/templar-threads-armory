
import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-templar-black/95 backdrop-blur-sm border-b border-templar-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="templar-cross text-2xl"></div>
            <h1 className="text-xl font-cinzel font-bold text-templar-gold glow-text">
              ORDO MILITUM DEI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-templar-silver hover:text-templar-gold transition-colors duration-300">
              Home
            </a>
            <a href="#products" className="text-templar-silver hover:text-templar-gold transition-colors duration-300">
              Products
            </a>
            <a href="#about" className="text-templar-silver hover:text-templar-gold transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-templar-silver hover:text-templar-gold transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-templar-silver hover:text-templar-gold">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-templar-silver hover:text-templar-gold">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-templar-silver hover:text-templar-gold relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-templar-crimson text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-templar-silver hover:text-templar-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-templar-gold/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-templar-silver hover:text-templar-gold transition-colors">
                Home
              </a>
              <a href="#products" className="text-templar-silver hover:text-templar-gold transition-colors">
                Products
              </a>
              <a href="#about" className="text-templar-silver hover:text-templar-gold transition-colors">
                About
              </a>
              <a href="#contact" className="text-templar-silver hover:text-templar-gold transition-colors">
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-templar-gold/20">
                <Button variant="ghost" size="icon" className="text-templar-silver hover:text-templar-gold">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-templar-silver hover:text-templar-gold">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-templar-silver hover:text-templar-gold relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-templar-crimson text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
