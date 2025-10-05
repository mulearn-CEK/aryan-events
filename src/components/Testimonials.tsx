import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya & Rahul",
      event: "Wedding Reception",
      rating: 5,
      text: "Aryan Events made our dream wedding come true! The attention to detail, beautiful decorations, and seamless coordination made our special day absolutely perfect. Highly recommended!",
      location: "Kollam",
    },
    {
      name: "Suresh Kumar",
      event: "Corporate Event",
      rating: 5,
      text: "Professional service from start to finish. They handled our company's annual function flawlessly with excellent sound system, lighting, and stage setup. Will definitely use their services again.",
      location: "Kottarakara",
    },
    {
      name: "Lakshmi Menon",
      event: "House Warming",
      rating: 5,
      text: "The team was incredibly responsive and creative. They transformed our house warming ceremony into a memorable celebration. The catering was exceptional and guests loved every moment!",
      location: "Thiruvananthapuram",
    },
    {
      name: "Arun & Family",
      event: "Birthday Party",
      rating: 5,
      text: "Our daughter's birthday party was magical thanks to Aryan Events! The themed decorations, entertainment, and overall management exceeded our expectations. Thank you for making it special!",
      location: "Pathanamthitta",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 text-brand-gold/10">
        <Quote size={200} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-2 block">
            Testimonials
          </span>
          <div className="h-1 w-20 bg-brand-red mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            What Our <span className="text-brand-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-card p-8 md:p-12 shadow-lg-custom animate-fade-in">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <Quote className="h-12 w-12 text-brand-gold/30 mx-auto mb-6" />
              
              <p className="text-xl text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="text-center">
                <h4 className="font-bold text-lg mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm mb-1">
                  {testimonials[currentIndex].event}
                </p>
                <p className="text-brand-gold text-sm font-semibold">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-2 hover:border-brand-gold hover:bg-brand-gold/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-brand-gold"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-2 hover:border-brand-gold hover:bg-brand-gold/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-black text-brand-gold mb-2">500+</div>
            <div className="text-muted-foreground font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-brand-gold mb-2">4.9/5</div>
            <div className="text-muted-foreground font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-brand-gold mb-2">98%</div>
            <div className="text-muted-foreground font-medium">Recommend Us</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
