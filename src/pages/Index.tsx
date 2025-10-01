import { Link } from "react-router-dom";
import { Calendar, Users, Sparkles, ArrowRight, Utensils, Music, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Professional Event Planning",
      description: "Expert planning and coordination for weddings, parties, corporate events, and special celebrations."
    },
    {
      icon: Utensils,
      title: "Full-Service Catering",
      description: "Customized menus and professional catering services tailored to your event style and preferences."
    },
    {
      icon: Sparkles,
      title: "Custom Decoration",
      description: "Beautiful, personalized decorations that bring your vision to life and create unforgettable moments."
    }
  ];

  const services = [
    { icon: Music, label: "Entertainment" },
    { icon: Camera, label: "Photography" },
    { icon: Utensils, label: "Catering" },
    { icon: Sparkles, label: "Decoration" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Dream Event,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perfectly Planned
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Professional event planning and vendor services for weddings, parties, and corporate events
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{service.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/register">
                  Book Your Event <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/events">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Eventify?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional event planning with personalized service and attention to every detail
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary to-secondary">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Plan Your Perfect Event?
              </h2>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Let us bring your vision to life with our comprehensive event planning and vendor services
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/register">Book a Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
