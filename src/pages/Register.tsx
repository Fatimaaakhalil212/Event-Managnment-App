import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Calendar as CalendarIcon } from "lucide-react";
import { eventTypes, decorationTypes, cateringOptions, timeSlots, guestRanges } from "@/data/bookingOptions";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.date({
    required_error: "Please select a date for your event",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  guestCount: z.string().min(1, "Please select expected guest count"),
  decorationType: z.string().min(1, "Please select a decoration type"),
  catering: z.string().min(1, "Please select a catering option"),
  venue: z.string().trim().min(3, "Please provide venue information").max(200),
  specialRequests: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState<string>("");
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      timeSlot: "",
      guestCount: "",
      decorationType: "",
      catering: "",
      venue: "",
      specialRequests: "",
    },
  });

const onSubmit = async (data: FormValues) => {
  console.log("📦 Booking data before sending:", data);

  // Prepare payload for backend
  const payload = {
    name: data.name,
    email: data.email,
    phone_number: data.phone,
    event_type: data.eventType,
    event_date: data.eventDate ? data.eventDate.toISOString().split("T")[0] : null,
    event_time: data.timeSlot,
    guests_count: data.guestCount,
    venue_location: data.venue,
    decoration_style: data.decorationType,
    catering_option: data.catering,
    special_requests: data.specialRequests || "",
  };

  try {
    console.log("🚀 Attempting to send request to:", "http://localhost:5000/api/bookings");
    console.log("📦 Payload being sent:", payload);
    
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    
    console.log("📡 Response received:", res);
    console.log("📊 Response status:", res.status);
    console.log("📊 Response ok:", res.ok);

    const result = await res.json();
    console.log("✅ Response from backend:", result);

    if (res.ok) {
      toast({
        title: "Booking Request Submitted!",
        description: `Thank you! We've received your booking for ${payload.event_date}. Our team will contact you at ${payload.email}`,
      });

      setIsSubmitted(true);
      form.reset();
      setSelectedEventType("");
      setTimeout(() => setIsSubmitted(false), 7000);
    } else {
      toast({
        title: "Submission Failed",
        description: result.message || "Something went wrong while saving booking",
        variant: "destructive",
      });
    }
  } catch (err) {
    console.error("❌ Error submitting booking:", err);
    console.error("Error details:", {
      message: err.message,
      name: err.name,
      stack: err.stack
    });
    
    let errorMessage = "Could not connect to server. Please try again later.";
    if (err instanceof TypeError && err.message.includes("fetch")) {
      errorMessage = "Network error: Unable to reach the server. Please check if the backend is running.";
    }
    
    toast({
      title: "Network Error",
      description: errorMessage,
      variant: "destructive",
    });
  }
};


  const handleEventTypeChange = (value: string) => {
    setSelectedEventType(value);
    // Reset dependent fields when event type changes
    form.setValue("decorationType", "");
    form.setValue("catering", "");
  };

  const getDecorationOptions = () => {
    if (!selectedEventType) return [];
    return decorationTypes[selectedEventType as keyof typeof decorationTypes] || [];
  };

  const getCateringOptions = () => {
    if (!selectedEventType) return [];
    return cateringOptions[selectedEventType as keyof typeof cateringOptions] || [];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Event</h1>
              <p className="text-lg text-muted-foreground">
                Fill out the form below with your event details and we'll create a perfect experience for you
              </p>
            </div>

            {isSubmitted && (
              <Card className="mb-8 border-primary/50 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 text-primary">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Booking request submitted successfully!</p>
                      <p className="text-sm text-muted-foreground">Our team will review your request and get back to you soon.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Event Booking Form</CardTitle>
                <CardDescription>
                  Please provide detailed information about your event so we can serve you better
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Contact Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+92 123 4567894" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Event Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Event Details</h3>
                      
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Type *</FormLabel>
                            <Select 
                              onValueChange={(value) => {
                                field.onChange(value);
                                handleEventTypeChange(value);
                              }} 
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type of event" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-popover z-50">
                                {eventTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="eventDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Event Date *</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-popover z-50" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormDescription>
                                Select your preferred event date
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeSlot"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Time Slot *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-popover z-50">
                                  {timeSlots.map((slot) => (
                                    <SelectItem key={slot.value} value={slot.value}>
                                      {slot.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="guestCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expected Guest Count *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select guest range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-popover z-50">
                                  {guestRanges.map((range) => (
                                    <SelectItem key={range.value} value={range.value}>
                                      {range.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="venue"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Venue/Location *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter venue or location" {...field} />
                              </FormControl>
                              <FormDescription>
                                Own venue or need suggestions?
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Customization Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Customization</h3>
                      
                      <FormField
                        control={form.control}
                        name="decorationType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Decoration Style *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              value={field.value}
                              disabled={!selectedEventType}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={
                                    selectedEventType 
                                      ? "Select decoration style" 
                                      : "Select event type first"
                                  } />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-popover z-50">
                                {getDecorationOptions().map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="catering"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Catering Options *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              value={field.value}
                              disabled={!selectedEventType}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={
                                    selectedEventType 
                                      ? "Select catering option" 
                                      : "Select event type first"
                                  } />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-popover z-50">
                                {getCateringOptions().map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requests or Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific requirements, themes, dietary restrictions, or special requests..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Help us understand your vision better (optional)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Submit Booking Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6">
              By submitting this form, you agree to be contacted by our team regarding your event booking
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
