
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { EventProps } from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowLeft, Bookmark } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample events data (will be replaced with Supabase data)
const eventsData: EventProps[] = [
  {
    id: "1",
    title: "International Conference on Machine Learning",
    organizer: "Stanford University",
    location: "San Francisco, USA",
    startDate: "2025-06-10",
    endDate: "2025-06-15",
    eventType: "Conference",
    subjects: ["Computer Science", "Artificial Intelligence", "Data Science"],
    academicLevel: "Graduate",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: "2",
    title: "European Symposium on Quantum Physics",
    organizer: "ETH Zurich",
    location: "Zurich, Switzerland",
    startDate: "2025-07-05",
    endDate: "2025-07-08",
    eventType: "Symposium",
    subjects: ["Physics", "Quantum Mechanics", "Materials Science"],
    academicLevel: "Doctoral",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: "3",
    title: "Workshop on Sustainable Engineering",
    organizer: "MIT",
    location: "Boston, USA",
    startDate: "2025-05-22",
    endDate: "2025-05-24",
    eventType: "Workshop",
    subjects: ["Engineering", "Environmental Science", "Sustainability"],
    academicLevel: "Faculty",
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: "4",
    title: "Annual Medical Research Conference",
    organizer: "Johns Hopkins University",
    location: "Baltimore, USA",
    startDate: "2025-09-15",
    endDate: "2025-09-18",
    eventType: "Conference",
    subjects: ["Medicine", "Healthcare", "Biotechnology"],
    academicLevel: "All Levels",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: "5",
    title: "Humanities and Social Sciences Seminar",
    organizer: "University of Oxford",
    location: "Oxford, UK",
    startDate: "2025-08-10",
    endDate: "2025-08-12",
    eventType: "Seminar",
    subjects: ["Humanities", "Social Sciences", "History"],
    academicLevel: "Graduate",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: "6",
    title: "International Symposium on Climate Change",
    organizer: "University of Tokyo",
    location: "Tokyo, Japan",
    startDate: "2025-10-05",
    endDate: "2025-10-09",
    eventType: "Symposium",
    subjects: ["Environmental Science", "Climate Studies", "Geography"],
    academicLevel: "Researcher",
    imageUrl: "https://images.unsplash.com/photo-1618477462146-050d2767eac4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  }
];

// Extended event interface with additional details
interface ExtendedEventProps extends EventProps {
  description?: string;
  website?: string;
  fees?: string;
  contactEmail?: string;
  registrationDeadline?: string;
  capacity?: number;
  isVirtual?: boolean;
  virtualLink?: string;
}

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [event, setEvent] = useState<ExtendedEventProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch event details
    setIsLoading(true);
    setTimeout(() => {
      // Find the event by ID from our mock data
      const foundEvent = eventsData.find(e => e.id === id);
      
      if (foundEvent) {
        // Add additional mock data for the extended event
        const extendedEvent: ExtendedEventProps = {
          ...foundEvent,
          description: "This prestigious event brings together researchers, academics, and industry professionals to discuss the latest advancements and challenges in the field. Featuring keynote speeches, panel discussions, paper presentations, and networking opportunities, this event is essential for anyone looking to stay at the forefront of academic innovation.",
          website: "https://eventsphere.example.com/events/" + foundEvent.id,
          fees: foundEvent.eventType === "Conference" ? "₹15,000 - ₹25,000" : "₹5,000 - ₹10,000",
          contactEmail: "contact@eventsphere.example.com",
          registrationDeadline: "2025-05-01",
          capacity: 500,
          isVirtual: Math.random() > 0.5,
          virtualLink: "https://eventsphere.example.com/virtual"
        };
        setEvent(extendedEvent);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get event type color
  const getEventTypeBadgeColor = (type: string) => {
    switch (type?.toLowerCase()) {
      case "conference":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "workshop":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "seminar":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "symposium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const handleSaveEvent = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Event removed from saved events" : "Event saved successfully",
      description: isSaved ? "This event has been removed from your saved events." : "This event has been added to your saved events.",
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-8">
          <div className="flex items-center space-x-2 mb-8">
            <Button variant="ghost" size="sm" onClick={() => navigate('/events')}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Events
            </Button>
          </div>
          <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg mb-8"></div>
          <div className="w-2/3 h-8 bg-gray-200 animate-pulse rounded-md mb-4"></div>
          <div className="w-1/3 h-6 bg-gray-200 animate-pulse rounded-md mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="w-full h-32 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="w-full h-64 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-64 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="w-full h-32 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!event) {
    return (
      <Layout>
        <div className="container py-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
            <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/events')}>
              Browse All Events
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        {/* Back Button */}
        <div className="flex items-center space-x-2 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate('/events')}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Events
          </Button>
        </div>
        
        {/* Event Header */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-8">
          <img
            src={event.imageUrl || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className={getEventTypeBadgeColor(event.eventType)}>
                {event.eventType}
              </Badge>
              <Badge variant="outline" className="bg-white/30 backdrop-blur-sm">
                {event.academicLevel}
              </Badge>
              {event.isVirtual && (
                <Badge variant="outline" className="bg-indigo-100 text-indigo-800">
                  Virtual Option Available
                </Badge>
              )}
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
            <p className="text-lg opacity-90">{event.organizer}</p>
          </div>
        </div>
        
        {/* Event Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Event Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white shadow-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="rounded-full bg-purple-100 p-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Date & Time</h3>
                  <p className="font-medium">
                    {formatDate(event.startDate)} {event.endDate && `- ${formatDate(event.endDate)}`}
                  </p>
                </div>
              </div>
              
              <div className="bg-white shadow-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="rounded-full bg-purple-100 p-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-4">About This Event</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {event.description}
                </p>
                {event.isVirtual && (
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium text-indigo-800 mb-2">Virtual Attendance Option</h3>
                    <p className="text-indigo-700 text-sm">
                      This event offers a virtual attendance option for those who cannot attend in person. 
                      Virtual attendees will receive a link to join the event online.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Subjects */}
            <div>
              <h2 className="font-playfair text-xl font-bold mb-3">Subject Areas</h2>
              <div className="flex flex-wrap gap-2">
                {event.subjects.map((subject, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Action Card */}
          <div>
            <div className="bg-white shadow-sm rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-medium mb-2">Registration Fee</h3>
                <p className="text-xl font-bold text-purple-800">{event.fees}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Registration Deadline</h3>
                <p>{event.registrationDeadline ? formatDate(event.registrationDeadline) : "TBD"}</p>
              </div>
              
              {event.capacity && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Event Capacity</h3>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <p>{event.capacity} Attendees</p>
                  </div>
                </div>
              )}
              
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5]">
                  Register Now
                </Button>
                
                <Button 
                  variant="outline" 
                  className={`w-full ${isSaved ? 'bg-purple-50' : ''}`} 
                  onClick={handleSaveEvent}
                >
                  <Bookmark className={`h-4 w-4 mr-2 ${isSaved ? 'fill-purple-600 text-purple-600' : ''}`} />
                  {isSaved ? "Saved" : "Save Event"}
                </Button>
              </div>
              
              {event.website && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium mb-2">More Information</h3>
                  <a 
                    href={event.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-600 hover:text-purple-800 flex items-center"
                  >
                    Visit Event Website
                  </a>
                </div>
              )}
              
              {event.contactEmail && (
                <div className="mt-3">
                  <a 
                    href={`mailto:${event.contactEmail}`}
                    className="text-purple-600 hover:text-purple-800 flex items-center"
                  >
                    Contact Organizer
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
