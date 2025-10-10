import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleFeedbackForm from "@/components/SimpleFeedbackForm";
import FeedbackTable from "@/components/FeedbackTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Calendar, 
  Users, 
  Palette, 
  Utensils, 
  Music, 
  Camera, 
  Car, 
  Gift,
  Sparkles,
  CheckCircle,
  Star,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const mainServices = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Complete end-to-end event planning from concept to execution",
      features: ["Timeline management", "Vendor coordination", "Day-of coordination", "Timeline management"],
      price: "Starting at PKR 150,000",
      popular: false
    },
    {
      icon: Palette,
      title: "Design & Decoration",
      description: "Creative design concepts and stunning decorations for your event",
      features: ["Theme development", "Color coordination", "Floral arrangements", "Lighting design"],
      price: "Starting at PKR 90,000",
      popular: true
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Delicious food and beverage options for every occasion",
      features: ["Menu planning", "Professional chefs", "Beverage service", "Dietary accommodations"],
      price: "Starting at PKR 7,500/person",
      popular: false
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Music, DJs, and entertainment to keep your guests engaged",
      features: ["DJ services", "Live music", "Sound systems", "Dance floors"],
      price: "Starting at PKR 60,000",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional documentation of your special moments"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Guest transportation and logistics coordination"
    },
    {
      icon: Gift,
      title: "Favors & Gifts",
      description: "Customized party favors and guest gifts"
    },
    {
      icon: Users,
      title: "Guest Management",
      description: "RSVP tracking and guest coordination"
    }
  ];

  const eventTypes = [
    {
      name: "Weddings",
      description: "Your perfect day, perfectly planned",
      features: ["Ceremony coordination", "Reception planning", "Bridal party management", "Timeline creation"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Corporate Events",
      description: "Professional events that make an impact",
      features: ["Conference planning", "Team building", "Product launches", "Award ceremonies"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Birthday Parties",
      description: "Celebrations that create lasting memories",
      features: ["Theme parties", "Kids parties", "Milestone celebrations", "Surprise parties"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Anniversaries",
      description: "Honoring special milestones in style",
      features: ["Romantic dinners", "Vow renewals", "Milestone celebrations", "Family gatherings"],
      image: "/api/placeholder/400/300"
    }
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                From intimate gatherings to grand celebrations, we offer comprehensive event planning 
                services tailored to your unique vision and budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Full Service
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Customized
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Star className="w-4 h-4 mr-2" />
                  Premium Quality
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide everything you need to create the perfect event experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainServices.map((service, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We also offer specialized services to make your event complete.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Event Types We Specialize In</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whatever the occasion, we have the expertise to make it extraordinary.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {eventTypes.map((event, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-purple-600" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <ul className="space-y-2">
                      {event.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Feedback Section */}
        <section id="feedback-section" className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say About It</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6">
                Don't just take our word for it - hear from our satisfied clients.
              </p>
              <Dialog open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
                    variant="outline"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Share Your Feedback
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center">
                      <MessageCircle className="w-6 h-6 mr-2 text-purple-600" />
                      Share Your Experience
                    </DialogTitle>
                    <DialogDescription>
                      Help us improve by sharing your feedback about our services and events.
                    </DialogDescription>
                  </DialogHeader>
                  <SimpleFeedbackForm onSuccess={() => setIsFeedbackOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="max-w-6xl mx-auto">
              <FeedbackTable />
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create an unforgettable experience together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <a href="/register">Book Your Event</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">Get a Quote</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
