
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission - will be replaced with Supabase
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "We've received your message and will respond soon. This functionality will be implemented with Supabase.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1000);
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground">Get in touch with the eventsphere team</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-playfair text-xl font-semibold mb-4">Reach Out to Us</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-[#6E59A5] mb-1">Email</h3>
                    <p className="text-sm">info@eventsphere.in</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-[#6E59A5] mb-1">Phone</h3>
                    <p className="text-sm">+91 9876543210</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-[#6E59A5] mb-1">Address</h3>
                    <p className="text-sm">
                      Innovation Centre<br />
                      Koramangala<br />
                      Bangalore, India 560034
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-[#6E59A5] mb-1">Office Hours</h3>
                    <p className="text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-[#6E59A5] mb-1">Connect With Us</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-gray-500 hover:text-[#6E59A5]">
                        Twitter
                      </a>
                      <a href="#" className="text-gray-500 hover:text-[#6E59A5]">
                        LinkedIn
                      </a>
                      <a href="#" className="text-gray-500 hover:text-[#6E59A5]">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-playfair text-xl font-semibold mb-4">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select onValueChange={setSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="event-submission">Event Submission</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-gradient-to-r from-[#9b87f5] to-[#6E59A5]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">For Event Organizers</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're looking to list your academic event on our platform,
                    please use our dedicated event submission form for faster processing.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Submit an Event
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
