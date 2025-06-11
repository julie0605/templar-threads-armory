
import { Button } from "@/components/ui/button";
import { ArrowDown, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 templar-pattern opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-templar-gold animate-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-templar-gold glow-text mb-6">
            ORDO MILITUM DEI
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-cinzel text-templar-silver mb-8">
            Knights of the Sacred Order
          </h2>
          
          <p className="text-lg md:text-xl text-templar-silver mb-12 max-w-2xl mx-auto leading-relaxed">
            Embrace the legacy of the Knights Templar with our premium collection of 
            apparel. Each piece carries the spirit of honor, courage, and devotion 
            that defined these legendary warriors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-templar-gold hover:bg-templar-gold/90 text-templar-black font-cinzel font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Collection
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-templar-gold text-templar-gold hover:bg-templar-gold hover:text-templar-black font-cinzel font-semibold px-8 py-3 text-lg transition-all duration-300"
            >
              Learn Our Story
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-templar-gold" />
        </div>
      </div>
    </section>
  );
};
