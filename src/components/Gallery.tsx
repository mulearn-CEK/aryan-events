import { useState } from "react";
import { Button } from "@/components/ui/button";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceSound from "@/assets/service-sound.jpg";
import servicePhotography from "@/assets/service-photography.jpg";
import heroImage from "@/assets/hero-image.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Events" },
    { id: "weddings", name: "Weddings" },
    { id: "corporate", name: "Corporate" },
    { id: "decorations", name: "Decorations" },
    { id: "entertainment", name: "Entertainment" },
  ];

  const galleryItems = [
    { id: 1, category: "weddings", image: heroImage, title: "Luxury Wedding Reception" },
    { id: 2, category: "decorations", image: serviceDecoration, title: "Stage Decoration" },
    { id: 3, category: "entertainment", image: serviceSound, title: "Sound & Light Setup" },
    { id: 4, category: "weddings", image: servicePhotography, title: "Wedding Photography" },
    { id: 5, category: "decorations", image: serviceDecoration, title: "Floral Arrangements" },
    { id: 6, category: "corporate", image: serviceSound, title: "Corporate Event" },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-2 block">
            Our Portfolio
          </span>
          <div className="h-1 w-20 bg-brand-red mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-brand-gold">Memorable</span> Moments We Created
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse through our collection of successful events and celebrations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={
                filter === category.id
                  ? "bg-brand-gold hover:bg-brand-gold/90 text-primary font-semibold"
                  : "border-2 hover:border-brand-gold font-semibold"
              }
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg-custom hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <div className="h-1 w-16 bg-brand-gold"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of our work?
          </p>
          <Button
            size="lg"
            className="bg-brand-gold hover:bg-brand-gold/90 text-primary font-bold"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
