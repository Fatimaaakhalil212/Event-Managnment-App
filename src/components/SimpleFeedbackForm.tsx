import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Star, Send } from "lucide-react";

interface SimpleFeedbackFormProps {
  onSuccess?: () => void;
}

const SimpleFeedbackForm = ({ onSuccess }: SimpleFeedbackFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
    event_type: ""
  });

  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log("🚀 Sending feedback:", formData);
      
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("✅ Feedback response:", result);

      if (res.ok) {
        toast({
          title: "Feedback Submitted!",
          description: "Thank you for your valuable feedback.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          rating: 0,
          message: "",
          event_type: ""
        });
        
        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error(result.error || "Failed to submit feedback");
      }
    } catch (err) {
      console.error("❌ Error submitting feedback:", err);
      toast({
        title: "Network Error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleRatingHover = (rating: number) => {
    setHoveredRating(rating);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  const eventTypes = [
    "Wedding",
    "Birthday Party",
    "Corporate Event",
    "Engagement Party",
    "Anniversary",
    "Other"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="event_type">Event Type</Label>
        <Select
          value={formData.event_type}
          onValueChange={(value) => setFormData({ ...formData, event_type: value })}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select event type (optional)" />
          </SelectTrigger>
          <SelectContent>
            {eventTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Rating *</Label>
        <div className="flex items-center space-x-1 mt-1">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Star
              key={rating}
              className={`w-6 h-6 cursor-pointer transition-colors ${
                rating <= (hoveredRating || formData.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => handleRatingClick(rating)}
              onMouseEnter={() => handleRatingHover(rating)}
              onMouseLeave={handleRatingLeave}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-1">Click to rate</p>
      </div>

      <div>
        <Label htmlFor="message">Your Feedback *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your experience with our services..."
          required
          className="mt-1 min-h-[100px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        disabled={formData.rating === 0}
      >
        <Send className="w-4 h-4 mr-2" />
        Submit Feedback
      </Button>
    </form>
  );
};

export default SimpleFeedbackForm;
