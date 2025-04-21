
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "What is eventsphere?",
    answer: "eventsphere is India's premier online platform for discovering, organizing, and participating in academic events across the nation. We aggregate conferences, workshops, seminars, and symposiums from universities and research institutions throughout India."
  },
  {
    question: "Who can use eventsphere?",
    answer: "eventsphere is designed for students, researchers, faculty members, and professionals interested in academic events. Anyone can browse events, but creating an account allows you to save events, receive personalized recommendations, and get email notifications."
  },
  {
    question: "How can I register for an event I found on eventsphere?",
    answer: "eventsphere provides information and links to event registration pages. When you find an event you're interested in, you can click on the event details to find registration information. Most events will have a direct link to the official registration page managed by the event organizers."
  },
  {
    question: "Is there a fee to use eventsphere?",
    answer: "No, eventsphere is completely free to use. We don't charge users for creating accounts, browsing events, or saving events to their profiles. Event registration fees are determined by the event organizers and are not collected through our platform."
  },
  {
    question: "How can I list my institution's event on eventsphere?",
    answer: "If you're an event organizer or represent an academic institution, you can submit your event through our 'Submit Event' form. After verification, your event will be listed on our platform. For bulk event listings or API access, please contact us directly."
  },
  {
    question: "How accurate is the event information on eventsphere?",
    answer: "We strive to provide the most accurate and up-to-date information about academic events. Our data comes directly from event organizers and official sources. However, details might change, so we always recommend checking the official event website for the latest information."
  },
  {
    question: "Can I get notifications about events in my field of interest?",
    answer: "Yes, after creating an account, you can set your academic interests and notification preferences. You'll receive personalized event recommendations and email alerts about new events in your fields of interest."
  },
  {
    question: "Does eventsphere offer mobile apps?",
    answer: "Currently, eventsphere is available as a responsive web application that works well on both desktop and mobile devices. Dedicated mobile apps for iOS and Android are in development and will be released soon."
  }
];

const FAQ = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8 text-center">
          <h1 className="font-playfair text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find answers to common questions about eventsphere and how it works. If you can't find what you're looking for, please contact us.
          </p>
        </div>
        
        <div className="mb-8 max-w-md mx-auto">
          <div className="flex gap-2">
            <Input placeholder="Search FAQ..." className="flex-1" />
            <Button>Search</Button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-medium text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              We're here to help. Contact our support team for assistance.
            </p>
            <Button asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
