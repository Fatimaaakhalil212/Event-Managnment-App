import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    event_type: "",
    event_date: "",
    event_time: "",
    guests_count: "",
    venue_location: "",
    decoration_style: "",
    catering_option: "",
    special_requests: ""
  });

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Format only event_date to YYYY-MM-DD
    const formattedData = {
      ...formData,
      event_date: formData.event_date
        ? new Date(formData.event_date).toISOString().split("T")[0]
        : null,
    };

    console.log("📦 Sending payload:", formattedData);

    try {
      console.log("🚀 Attempting to send request to:", "http://localhost:5000/api/bookings");
      console.log("📦 Payload being sent:", formattedData);
      
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });
      
      console.log("📡 Response received:", res);
      console.log("📊 Response status:", res.status);
      console.log("📊 Response ok:", res.ok);

      const data = await res.json();
      console.log("✅ Response from server:", data);
      alert(data.message);

      // Reset form
      setFormData({
        name: "",
        phone_number: "",
        email: "",
        event_type: "",
        event_date: "",
        event_time: "",
        guests_count: "",
        venue_location: "",
        decoration_style: "",
        catering_option: "",
        special_requests: ""
      });
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      console.error("Error details:", {
        message: err.message,
        name: err.name,
        stack: err.stack
      });
      
      let errorMessage = "Failed to submit booking. Check console for details.";
      if (err instanceof TypeError && err.message.includes("fetch")) {
        errorMessage = "Network error: Unable to reach the server. Please check if the backend is running.";
      }
      
      alert(errorMessage);
    }
  };

  // Handles input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Event Booking Form</h2>
      <p>Please provide detailed information about your event so we can serve you better.</p>

      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="phone_number"
        placeholder="+92 123 4567894"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        name="event_type"
        placeholder="Event Type"
        value={formData.event_type}
        onChange={handleChange}
        required
      />

      <input
        name="event_date"
        type="date"
        value={formData.event_date}
        onChange={handleChange}
        required
      />

      <input
        name="event_time"
        type="time"
        value={formData.event_time}
        onChange={handleChange}
        required
      />

      <input
        name="guests_count"
        type="number"
        placeholder="Expected Guest Count"
        value={formData.guests_count}
        onChange={handleChange}
        required
      />

      <input
        name="venue_location"
        placeholder="Venue / Location"
        value={formData.venue_location}
        onChange={handleChange}
        required
      />

      <input
        name="decoration_style"
        placeholder="Decoration Style"
        value={formData.decoration_style}
        onChange={handleChange}
      />

      <input
        name="catering_option"
        placeholder="Catering Options"
        value={formData.catering_option}
        onChange={handleChange}
      />

      <textarea
        name="special_requests"
        placeholder="Special Requests or Notes"
        value={formData.special_requests}
        onChange={handleChange}
      />

      <button type="submit">Submit Booking</button>
    </form>
  );
}
