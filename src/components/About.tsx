import { Award, Users, Heart, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "15+ Years Excellence",
      description: "Proven track record of delivering exceptional events across Kerala",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals committed to making your event perfect",
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Every event is unique, tailored to your vision and preferences",
    },
    {
      icon: Zap,
      title: "End-to-End Solutions",
      description: "Complete event management from planning to execution",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block">
            <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-2 block">
              About Us
            </span>
            <div className="h-1 w-20 bg-brand-red mx-auto mb-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Kerala's Premier <span className="text-brand-gold">Event Management</span> Company
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Based in Kadamkulam, Kottarakara, Aryan Events has been creating magical moments and 
            unforgettable experiences for over 15 years. We are passionate about transforming your 
            dreams into reality with meticulous planning, creative excellence, and flawless execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg-custom hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-gold w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-glow">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-12 shadow-lg-custom relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-primary-foreground/90 max-w-4xl">
              To deliver exceptional event experiences that exceed expectations through innovative 
              design, impeccable service, and unwavering commitment to quality. We believe every 
              celebration deserves to be extraordinary, and we're dedicated to making that happen 
              for every client, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
