export interface PortfolioEvent {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
  guests: number;
  location: string;
}

export const portfolioEvents: PortfolioEvent[] = [
  {
    id: 1,
    title: "Sarah & Michael's Dream Wedding",
    type: "Wedding",
    description: "An elegant outdoor ceremony followed by a luxurious reception. Complete with floral arrangements, custom lighting, and gourmet catering for 200 guests.",
    image: "wedding-1.jpg",
    guests: 200,
    location: "Riverside Garden Estate"
  },
  {
    id: 2,
    title: "Grand Wedding Reception",
    type: "Wedding",
    description: "Spectacular indoor wedding reception featuring crystal chandeliers, premium table settings, and a five-course dinner experience.",
    image: "wedding-2.jpg",
    guests: 300,
    location: "Grand Ballroom Hotel"
  },
  {
    id: 3,
    title: "Emma's 30th Birthday Bash",
    type: "Birthday Party",
    description: "A vibrant and colorful celebration with custom decorations, dessert bar, DJ entertainment, and photo booth for all guests.",
    image: "party-1.jpg",
    guests: 80,
    location: "Private Event Space"
  },
  {
    id: 4,
    title: "Tech Corp Annual Summit",
    type: "Corporate Event",
    description: "Professional corporate gathering with stage setup, AV equipment, branded materials, and networking lunch for executives.",
    image: "corporate-1.jpg",
    guests: 150,
    location: "Convention Center"
  },
  {
    id: 5,
    title: "Romantic Engagement Celebration",
    type: "Engagement",
    description: "Intimate engagement party with sophisticated decor, ambient lighting, cocktail service, and personalized details.",
    image: "engagement-1.jpg",
    guests: 60,
    location: "Rooftop Venue"
  },
  {
    id: 6,
    title: "25th Anniversary Gala",
    type: "Anniversary",
    description: "Elegant anniversary celebration featuring romantic ambiance, live music, premium catering, and custom floral arrangements.",
    image: "anniversary-1.jpg",
    guests: 100,
    location: "Country Club"
  }
];
