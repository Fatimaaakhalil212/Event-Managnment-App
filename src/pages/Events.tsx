import { useState } from "react";
import { Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { Input } from "@/components/ui/input";
import { portfolioEvents } from "@/data/portfolioEvents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const eventTypes = ["all", "Wedding", "Birthday Party", "Corporate Event", "Engagement", "Anniversary"];

  const filteredEvents = portfolioEvents.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === "all" || event.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
              <p className="text-lg text-muted-foreground">
                Explore our past events and see how we've brought dreams to life for our clients
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by event type, location, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedType}>
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 lg:grid-cols-6 mb-12">
                {eventTypes.map((type) => (
                  <TabsTrigger key={type} value={type} className="text-xs sm:text-sm">
                    {type === "all" ? "All Events" : type}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedType} className="mt-0">
                {filteredEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event) => (
                      <PortfolioCard key={event.id} {...event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      No events found matching your criteria. Try adjusting your search or filters.
                    </p>
                  </div>
                )}
              </TabsContent>

            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
