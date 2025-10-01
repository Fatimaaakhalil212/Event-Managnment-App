export const eventTypes = [
  { value: "wedding", label: "Wedding" },
  { value: "birthday", label: "Birthday Party" },
  { value: "corporate", label: "Corporate Event" },
  { value: "engagement", label: "Engagement Party" },
  { value: "anniversary", label: "Anniversary" },
  { value: "other", label: "Other" }
];

export const decorationTypes = {
  wedding: [
    { value: "classic-elegant", label: "Classic Elegant" },
    { value: "rustic-charm", label: "Rustic Charm" },
    { value: "modern-minimalist", label: "Modern Minimalist" },
    { value: "romantic-floral", label: "Romantic Floral" },
    { value: "vintage-boho", label: "Vintage Boho" }
  ],
  birthday: [
    { value: "balloon-paradise", label: "Balloon Paradise" },
    { value: "themed-party", label: "Themed Party" },
    { value: "elegant-adult", label: "Elegant Adult" },
    { value: "kids-fun", label: "Kids Fun Zone" },
    { value: "photo-booth-setup", label: "Photo Booth Setup" }
  ],
  corporate: [
    { value: "professional-modern", label: "Professional Modern" },
    { value: "branded-theme", label: "Branded Theme" },
    { value: "conference-style", label: "Conference Style" },
    { value: "networking-lounge", label: "Networking Lounge" },
    { value: "stage-presentation", label: "Stage & Presentation" }
  ],
  engagement: [
    { value: "romantic-intimate", label: "Romantic & Intimate" },
    { value: "garden-party", label: "Garden Party" },
    { value: "cocktail-soiree", label: "Cocktail Soirée" },
    { value: "elegant-dinner", label: "Elegant Dinner" }
  ],
  anniversary: [
    { value: "classic-romance", label: "Classic Romance" },
    { value: "milestone-celebration", label: "Milestone Celebration" },
    { value: "elegant-gala", label: "Elegant Gala" },
    { value: "intimate-dinner", label: "Intimate Dinner" }
  ],
  other: [
    { value: "custom-theme", label: "Custom Theme" },
    { value: "standard", label: "Standard Setup" }
  ]
};

export const cateringOptions = {
  wedding: [
    { value: "plated-dinner", label: "Plated Dinner (3-5 courses)" },
    { value: "buffet-style", label: "Buffet Style" },
    { value: "cocktail-reception", label: "Cocktail Reception" },
    { value: "family-style", label: "Family Style Dining" },
    { value: "food-stations", label: "Interactive Food Stations" }
  ],
  birthday: [
    { value: "buffet", label: "Party Buffet" },
    { value: "finger-food", label: "Finger Food & Appetizers" },
    { value: "bbq-grill", label: "BBQ & Grill" },
    { value: "dessert-bar", label: "Dessert Bar" },
    { value: "pizza-party", label: "Pizza Party" }
  ],
  corporate: [
    { value: "business-lunch", label: "Business Lunch Buffet" },
    { value: "coffee-breaks", label: "Coffee & Snack Breaks" },
    { value: "networking-bites", label: "Networking Bites" },
    { value: "formal-dinner", label: "Formal Dinner" }
  ],
  engagement: [
    { value: "cocktail-appetizers", label: "Cocktails & Appetizers" },
    { value: "dinner-party", label: "Dinner Party" },
    { value: "brunch", label: "Brunch Style" },
    { value: "dessert-champagne", label: "Dessert & Champagne" }
  ],
  anniversary: [
    { value: "romantic-dinner", label: "Romantic Dinner" },
    { value: "celebration-buffet", label: "Celebration Buffet" },
    { value: "cocktail-reception", label: "Cocktail Reception" },
    { value: "gourmet-menu", label: "Gourmet Tasting Menu" }
  ],
  other: [
    { value: "custom-catering", label: "Custom Catering Plan" },
    { value: "basic-package", label: "Basic Package" }
  ]
};

export const timeSlots = [
  { value: "morning", label: "Morning (9:00 AM - 12:00 PM)" },
  { value: "afternoon", label: "Afternoon (1:00 PM - 5:00 PM)" },
  { value: "evening", label: "Evening (6:00 PM - 10:00 PM)" },
  { value: "full-day", label: "Full Day Event" }
];

export const guestRanges = [
  { value: "1-50", label: "1-50 guests" },
  { value: "51-100", label: "51-100 guests" },
  { value: "101-200", label: "101-200 guests" },
  { value: "201-300", label: "201-300 guests" },
  { value: "300+", label: "300+ guests" }
];
