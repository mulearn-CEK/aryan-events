import { 
  Heart, 
  Palette, 
  Music, 
  Camera, 
  Utensils, 
  Users, 
  Home, 
  Cake,
  PartyPopper,
  Shield,
  Bus,
  MoreHorizontal
} from "lucide-react";
import { Card } from "@/components/ui/card";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceSound from "@/assets/service-sound.jpg";
import servicePhotography from "@/assets/service-photography.jpg";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Marriage Functions",
      description: "Complete wedding planning and execution with traditional elegance",
      image: serviceDecoration,
    },
    {
      icon: Palette,
      title: "Stage Decorations",
      description: "Stunning pandal works and creative stage setups for all occasions",
      image: serviceDecoration,
    },
    {
      icon: Music,
      title: "Sound & Light Works",
      description: "Professional audio-visual services with latest equipment",
      image: serviceSound,
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture every precious moment with professional cinematography",
      image: servicePhotography,
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Delicious cuisine and impeccable service for your guests",
    },
    {
      icon: Users,
      title: "Public & Family Functions",
      description: "Expert management for corporate and community events",
    },
    {
      icon: PartyPopper,
      title: "Haldi & Engagement",
      description: "Vibrant decorations and arrangements for pre-wedding ceremonies",
    },
    {
      icon: Home,
      title: "House Warming Parties",
      description: "Celebrate your new beginning with traditional elegance",
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description: "Themed decorations and entertainment for all ages",
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Professional doorman and security personnel for your event",
    },
    {
      icon: Bus,
      title: "Tours & Travels",
      description: "Comfortable transportation and exciting tour packages",
    },
    {
      icon: MoreHorizontal,
      title: "And Much More",
      description: "Farewells, inaugurations, stage shows and custom events",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Diagonal Divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-secondary transform -skew-y-2 origin-top-left"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-2 block">
            Our Services
          </span>
          <div className="h-1 w-20 bg-brand-red mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Complete <span className="text-brand-gold">Event Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive services 
            to make every event memorable and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-brand-gold transition-all duration-300 hover:shadow-glow hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {service.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 relative z-10">
                <div className="bg-gradient-gold w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 inline-block shadow-lg-custom">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              We create tailored solutions to match your specific requirements and budget
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-primary font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-glow"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-secondary transform skew-y-2 origin-bottom-right"></div>
    </section>
  );
};

export default Services;
