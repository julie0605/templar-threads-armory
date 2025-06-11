
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-templar-stone border-t border-templar-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="templar-cross text-2xl"></div>
              <h3 className="text-xl font-cinzel font-bold text-templar-gold">
                ORDO MILITUM DEI
              </h3>
            </div>
            <p className="text-templar-silver mb-6 max-w-md">
              Carrying forward the legacy of the Knights Templar through premium 
              apparel that embodies honor, courage, and devotion.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-templar-silver hover:text-templar-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-templar-silver hover:text-templar-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-templar-silver hover:text-templar-gold cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cinzel font-semibold text-templar-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-templar-silver hover:text-templar-gold transition-colors">Home</a></li>
              <li><a href="#products" className="text-templar-silver hover:text-templar-gold transition-colors">Products</a></li>
              <li><a href="#about" className="text-templar-silver hover:text-templar-gold transition-colors">About</a></li>
              <li><a href="#contact" className="text-templar-silver hover:text-templar-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-cinzel font-semibold text-templar-gold mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-templar-gold" />
                <span className="text-templar-silver text-sm">info@ordomilitumdei.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-templar-gold" />
                <span className="text-templar-silver text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-templar-gold" />
                <span className="text-templar-silver text-sm">Jerusalem Quarter, Historic District</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-templar-gold/20 mt-8 pt-8 text-center">
          <p className="text-templar-silver text-sm">
            © 2024 Ordo Militum Dei. All rights reserved. Non nobis, Domine, non nobis, sed nomini tuo da gloriam.
          </p>
        </div>
      </div>
    </footer>
  );
};
