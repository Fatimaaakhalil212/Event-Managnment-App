export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Tech Innovation Summit 2025",
    date: "March 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "San Francisco Convention Center",
    description: "Join industry leaders and innovators for a full day of insights into the latest technology trends, AI advancements, and digital transformation strategies.",
    category: "Technology"
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    date: "March 22, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual Event",
    description: "Learn cutting-edge digital marketing strategies from experts. Topics include SEO, social media marketing, content creation, and analytics.",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    date: "April 5, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Innovation Hub, New York",
    description: "Watch promising startups pitch their ideas to investors. Network with entrepreneurs, investors, and innovators in the startup ecosystem.",
    category: "Business"
  },
  {
    id: 4,
    title: "Web Development Workshop",
    date: "April 12, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Campus, Seattle",
    description: "Hands-on workshop covering modern web development with React, TypeScript, and best practices for building scalable applications.",
    category: "Technology"
  },
  {
    id: 5,
    title: "Creative Design Conference",
    date: "April 20, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Design Center, Los Angeles",
    description: "Explore the latest trends in UI/UX design, branding, and creative thinking. Features workshops, talks, and portfolio reviews.",
    category: "Design"
  },
  {
    id: 6,
    title: "AI & Machine Learning Expo",
    date: "May 3, 2025",
    time: "10:00 AM - 7:00 PM",
    location: "Tech Park, Boston",
    description: "Discover the future of AI and machine learning with live demos, expert talks, and networking opportunities with AI professionals.",
    category: "Technology"
  }
];
