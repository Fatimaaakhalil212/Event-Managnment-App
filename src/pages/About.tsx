import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Star, Award, Heart, Sparkles, User, UserCheck } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Events Planned", value: "500+", description: "Successful events" },
    { icon: Users, label: "Happy Clients", value: "300+", description: "Satisfied customers" },
    { icon: Star, label: "Rating", value: "4.9/5", description: "Client satisfaction" },
    { icon: Award, label: "Awards", value: "15+", description: "Industry recognition" }
  ];

  const team = [
    {
      name: "Sarah Ali",
      role: "Creative Director",
      gender: "female",
      description: "10+ years in event planning with a passion for creating unforgettable moments."
    },
    {
      name: "Ahmed Faraz",
      role: "Operations Manager",
      gender: "male",
      description: "Expert in logistics and ensuring every detail is perfectly executed."
    },
    {
      name: "Hamza Omer",
      role: "Design Specialist",
      gender: "male",
      description: "Creative visionary who brings unique themes and decorations to life."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section with Stats */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  About Eventify
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  We are passionate event planners dedicated to creating extraordinary experiences 
                  that celebrate life's most important moments. From intimate gatherings to grand celebrations, 
                  we bring your vision to life with creativity, precision, and unmatched attention to detail.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Passionate
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Creative
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Award className="w-4 h-4 mr-2" />
                    Professional
                  </Badge>
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg bg-white">
                    <CardContent className="pt-6">
                      <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                      <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    To transform your special moments into extraordinary experiences through 
                    innovative design, flawless execution, and personalized service that exceeds 
                    your expectations every time.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We believe that every event tells a story, and we're here to help you 
                    write the perfect chapter in your life's journey.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-purple-800">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Sparkles className="w-5 h-5 text-purple-600 mr-3" />
                      <span>Customized event designs</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                      <span>Full-service planning</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="w-5 h-5 text-purple-600 mr-3" />
                      <span>Dedicated support team</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-5 h-5 text-purple-600 mr-3" />
                      <span>Industry expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our talented team of event professionals is dedicated to making your vision a reality.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      {member.gender === "female" ? (
                        <User className="w-12 h-12 text-purple-600" />
                      ) : (
                        <UserCheck className="w-12 h-12 text-purple-600" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Perfect Event?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to create an unforgettable experience that you and your guests will cherish forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/register" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Your Event
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
