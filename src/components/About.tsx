
import { Shield, Sword, Crown } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-templar-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-templar-gold glow-text mb-4">
            Our Legacy
          </h2>
          <p className="text-lg text-templar-silver max-w-3xl mx-auto">
            Inspired by the legendary Knights Templar, we create apparel that embodies 
            the values of honor, courage, and devotion that defined these sacred warriors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="bg-templar-stone rounded-full p-6 group-hover:bg-templar-gold/10 transition-colors duration-300">
                <Shield className="h-12 w-12 text-templar-gold" />
              </div>
            </div>
            <h3 className="text-2xl font-cinzel font-semibold text-templar-gold mb-4">
              Honor
            </h3>
            <p className="text-templar-silver">
              Every piece reflects the noble values and unwavering integrity 
              that guided the Knights Templar in their sacred mission.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="bg-templar-stone rounded-full p-6 group-hover:bg-templar-gold/10 transition-colors duration-300">
                <Sword className="h-12 w-12 text-templar-gold" />
              </div>
            </div>
            <h3 className="text-2xl font-cinzel font-semibold text-templar-gold mb-4">
              Courage
            </h3>
            <p className="text-templar-silver">
              Wear the symbol of bravery and stand tall with the courage 
              that made the Templars legendary across the ages.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="bg-templar-stone rounded-full p-6 group-hover:bg-templar-gold/10 transition-colors duration-300">
                <Crown className="h-12 w-12 text-templar-gold" />
              </div>
            </div>
            <h3 className="text-2xl font-cinzel font-semibold text-templar-gold mb-4">
              Devotion
            </h3>
            <p className="text-templar-silver">
              Our commitment to quality and authenticity mirrors the 
              unwavering devotion of the Knights to their sacred oath.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
