import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeedbackButton = () => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate('/services');
    // Scroll to feedback section after navigation
    setTimeout(() => {
      const feedbackSection = document.getElementById('feedback-section');
      if (feedbackSection) {
        feedbackSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Button 
      onClick={handleFeedbackClick}
      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300"
      size="lg"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Feedback
    </Button>
  );
};

export default FeedbackButton;
