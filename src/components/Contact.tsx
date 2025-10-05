import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["0474 2454540", "9961 486 486", "9496 735 960"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["aryaneventktr@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kadamkulam", "Kottarakara, Kerala, India"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sun: 9:00 AM - 9:00 PM", "Available 24/7 for emergencies"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative">
      {/* Diagonal Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-secondary transform -skew-y-2 origin-top-left"></div>

      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-2 block">
            Get In Touch
          </span>
          <div className="h-1 w-20 bg-brand-red mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let's Plan Your <span className="text-brand-gold">Perfect Event</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to create unforgettable memories? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-gold w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-hero text-primary-foreground">
              <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-xl mb-4">Visit Our Website</h3>
              <a
                href="https://www.aryanevents.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-gold/80 font-semibold transition-colors"
              >
                www.aryanevents.in
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-lg-custom">
            <h3 className="text-2xl font-black mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Your Name *</label>
                <Input placeholder="Enter your name" className="border-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                <Input placeholder="Enter your phone number" className="border-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input type="email" placeholder="Enter your email" className="border-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Event Type</label>
                <Input placeholder="Wedding, Birthday, Corporate, etc." className="border-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <Textarea
                  placeholder="Tell us about your event requirements..."
                  rows={4}
                  className="border-2"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-primary font-bold text-lg shadow-glow"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg-custom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.13652715726!2d76.68826!3d9.0768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05f2d7d3c3d3d3%3A0x3d3d3d3d3d3d3d3d!2sKottarakara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aryan Events Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
