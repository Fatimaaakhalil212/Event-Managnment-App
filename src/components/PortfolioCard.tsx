import { Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PortfolioCardProps {
  title: string;
  type: string;
  description: string;
  image: string;
  guests: number;
  location: string;
}

const PortfolioCard = ({ title, type, description, image, guests, location }: PortfolioCardProps) => {
  // Dynamic import for images
  const getImageUrl = (imageName: string) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  return (
    <Card className="group overflow-hidden hover:shadow-[0_10px_40px_-10px_hsl(263_70%_50%/0.3)] transition-all duration-300 border-border/50">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={getImageUrl(image)}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground shadow-lg">
            {type}
          </span>
        </div>
      </div>
      <CardContent className="p-6 space-y-3">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{guests} guests</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
