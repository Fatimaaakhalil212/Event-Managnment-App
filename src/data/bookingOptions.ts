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
    { value: "vintage-boho", label: "Vintage Boho" },
    { value: "garden-wedding", label: "Garden Wedding" },
    { value: "beach-wedding", label: "Beach Wedding" },
    { value: "royal-luxury", label: "Royal Luxury" },
    { value: "rustic-barn", label: "Rustic Barn" },
    { value: "industrial-chic", label: "Industrial Chic" }
  ],
  birthday: [
    { value: "balloon-paradise", label: "Balloon Paradise" },
    { value: "themed-party", label: "Themed Party" },
    { value: "elegant-adult", label: "Elegant Adult" },
    { value: "kids-fun", label: "Kids Fun Zone" },
    { value: "photo-booth-setup", label: "Photo Booth Setup" },
    { value: "princess-party", label: "Princess Party" },
    { value: "superhero-theme", label: "Superhero Theme" },
    { value: "sports-party", label: "Sports Party" },
    { value: "art-craft-party", label: "Art & Craft Party" },
    { value: "dance-party", label: "Dance Party" }
  ],
  corporate: [
    { value: "professional-modern", label: "Professional Modern" },
    { value: "branded-theme", label: "Branded Theme" },
    { value: "conference-style", label: "Conference Style" },
    { value: "networking-lounge", label: "Networking Lounge" },
    { value: "stage-presentation", label: "Stage & Presentation" },
    { value: "tech-innovation", label: "Tech Innovation" },
    { value: "luxury-corporate", label: "Luxury Corporate" },
    { value: "casual-networking", label: "Casual Networking" },
    { value: "awards-ceremony", label: "Awards Ceremony" },
    { value: "product-launch", label: "Product Launch" }
  ],
  engagement: [
    { value: "romantic-intimate", label: "Romantic & Intimate" },
    { value: "garden-party", label: "Garden Party" },
    { value: "cocktail-soiree", label: "Cocktail Soirée" },
    { value: "elegant-dinner", label: "Elegant Dinner" },
    { value: "rooftop-celebration", label: "Rooftop Celebration" },
    { value: "beach-engagement", label: "Beach Engagement" },
    { value: "vintage-romantic", label: "Vintage Romantic" },
    { value: "modern-chic", label: "Modern Chic" },
    { value: "rustic-romantic", label: "Rustic Romantic" },
    { value: "luxury-intimate", label: "Luxury Intimate" }
  ],
  anniversary: [
    { value: "classic-romance", label: "Classic Romance" },
    { value: "milestone-celebration", label: "Milestone Celebration" },
    { value: "elegant-gala", label: "Elegant Gala" },
    { value: "intimate-dinner", label: "Intimate Dinner" },
    { value: "golden-anniversary", label: "Golden Anniversary" },
    { value: "silver-celebration", label: "Silver Celebration" },
    { value: "diamond-luxury", label: "Diamond Luxury" },
    { value: "vintage-elegance", label: "Vintage Elegance" },
    { value: "modern-romance", label: "Modern Romance" },
    { value: "family-gathering", label: "Family Gathering" }
  ],
  other: [
    { value: "custom-theme", label: "Custom Theme" },
    { value: "standard", label: "Standard Setup" },
    { value: "festival-celebration", label: "Festival Celebration" },
    { value: "religious-ceremony", label: "Religious Ceremony" },
    { value: "graduation-party", label: "Graduation Party" },
    { value: "retirement-party", label: "Retirement Party" },
    { value: "baby-shower", label: "Baby Shower" },
    { value: "housewarming", label: "Housewarming" },
    { value: "farewell-party", label: "Farewell Party" },
    { value: "reunion-party", label: "Reunion Party" }
  ]
};

export const cateringOptions = {
  wedding: [
    { value: "plated-dinner", label: "Plated Dinner (3-5 courses)" },
    { value: "buffet-style", label: "Buffet Style" },
    { value: "cocktail-reception", label: "Cocktail Reception" },
    { value: "family-style", label: "Family Style Dining" },
    { value: "food-stations", label: "Interactive Food Stations" },
    { value: "brunch-wedding", label: "Brunch Wedding" },
    { value: "tea-party", label: "Afternoon Tea Party" },
    { value: "gourmet-tasting", label: "Gourmet Tasting Menu" },
    { value: "international-cuisine", label: "International Cuisine" },
    { value: "vegetarian-vegan", label: "Vegetarian & Vegan Options" }
  ],
  birthday: [
    { value: "buffet", label: "Party Buffet" },
    { value: "finger-food", label: "Finger Food & Appetizers" },
    { value: "bbq-grill", label: "BBQ & Grill" },
    { value: "dessert-bar", label: "Dessert Bar" },
    { value: "pizza-party", label: "Pizza Party" },
    { value: "taco-bar", label: "Taco Bar" },
    { value: "pasta-station", label: "Pasta Station" },
    { value: "sandwich-lunch", label: "Sandwich Lunch" },
    { value: "ice-cream-party", label: "Ice Cream Party" },
    { value: "candy-buffet", label: "Candy Buffet" }
  ],
  corporate: [
    { value: "business-lunch", label: "Business Lunch Buffet" },
    { value: "coffee-breaks", label: "Coffee & Snack Breaks" },
    { value: "networking-bites", label: "Networking Bites" },
    { value: "formal-dinner", label: "Formal Dinner" },
    { value: "continental-breakfast", label: "Continental Breakfast" },
    { value: "working-lunch", label: "Working Lunch" },
    { value: "cocktail-hour", label: "Cocktail Hour" },
    { value: "boxed-lunches", label: "Boxed Lunches" },
    { value: "healthy-options", label: "Healthy Options" },
    { value: "international-buffet", label: "International Buffet" }
  ],
  engagement: [
    { value: "cocktail-appetizers", label: "Cocktails & Appetizers" },
    { value: "dinner-party", label: "Dinner Party" },
    { value: "brunch", label: "Brunch Style" },
    { value: "dessert-champagne", label: "Dessert & Champagne" },
    { value: "tapas-style", label: "Tapas Style" },
    { value: "wine-pairing", label: "Wine Pairing Dinner" },
    { value: "seafood-feast", label: "Seafood Feast" },
    { value: "mediterranean-cuisine", label: "Mediterranean Cuisine" },
    { value: "fusion-menu", label: "Fusion Menu" },
    { value: "romantic-dinner", label: "Romantic Dinner" }
  ],
  anniversary: [
    { value: "romantic-dinner", label: "Romantic Dinner" },
    { value: "celebration-buffet", label: "Celebration Buffet" },
    { value: "cocktail-reception", label: "Cocktail Reception" },
    { value: "gourmet-menu", label: "Gourmet Tasting Menu" },
    { value: "vintage-dinner", label: "Vintage Dinner" },
    { value: "champagne-brunch", label: "Champagne Brunch" },
    { value: "family-style", label: "Family Style Feast" },
    { value: "luxury-catering", label: "Luxury Catering" },
    { value: "traditional-cuisine", label: "Traditional Cuisine" },
    { value: "surprise-menu", label: "Surprise Menu" }
  ],
  other: [
    { value: "custom-catering", label: "Custom Catering Plan" },
    { value: "basic-package", label: "Basic Package" },
    { value: "potluck-style", label: "Potluck Style" },
    { value: "food-truck", label: "Food Truck" },
    { value: "catered-lunch", label: "Catered Lunch" },
    { value: "snack-breaks", label: "Snack Breaks" },
    { value: "beverage-service", label: "Beverage Service Only" },
    { value: "dessert-only", label: "Dessert Only" },
    { value: "appetizer-party", label: "Appetizer Party" },
    { value: "coffee-cart", label: "Coffee Cart Service" }
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
