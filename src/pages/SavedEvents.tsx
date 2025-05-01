
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Tag, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const savedEvents = [
  {
    id: "1",
    title: "National Conference on Machine Learning and AI",
    organizer: "Indian Institute of Technology Delhi",
    location: "New Delhi, India",
    startDate: "2025-06-10",
    endDate: "2025-06-15",
    eventType: "Conference",
    subjects: ["Computer Science", "Artificial Intelligence", "Data Science"],
    isPriority: true,
    isRegistered: false,
    notes: "Need to present my research paper"
  },
  {
    id: "2",
    title: "Workshop on Sustainable Engineering Practices",
    organizer: "IIT Bombay",
    location: "Mumbai, India",
    startDate: "2025-05-22",
    endDate: "2025-05-24",
    eventType: "Workshop",
    subjects: ["Engineering", "Environmental Science", "Sustainability"],
    isPriority: false,
    isRegistered: true,
    notes: ""
  },
  {
    id: "3",
    title: "Symposium on Quantum Physics Applications",
    organizer: "Indian Institute of Science",
    location: "Bangalore, India",
    startDate: "2025-07-05",
    endDate: "2025-07-08",
    eventType: "Symposium",
    subjects: ["Physics", "Quantum Mechanics", "Materials Science"],
    isPriority: false,
    isRegistered: false,
    notes: "Interested in the quantum computing sessions"
  },
  {
    id: "4",
    title: "Annual Medical Research Conference",
    organizer: "All India Institute of Medical Sciences",
    location: "Delhi, India",
    startDate: "2025-09-15",
    endDate: "2025-09-18",
    eventType: "Conference",
    subjects: ["Medicine", "Healthcare", "Biotechnology"],
    isPriority: true,
    isRegistered: true,
    notes: "Looking for research collaborations"
  }
];

// Format date for display
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const SavedEvents = () => {
  const handleRemoveEvent = (id: string) => {
    toast({
      title: "Event removed",
      description: "This functionality will be implemented with Supabase",
    });
  };

  const handleTogglePriority = (id: string) => {
    toast({
      title: "Priority updated",
      description: "This functionality will be implemented with Supabase",
    });
  };

  const handleSaveNotes = (id: string) => {
    toast({
      title: "Notes saved",
      description: "This functionality will be implemented with Supabase",
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold mb-2">Your Saved Events</h1>
          <p className="text-muted-foreground">Manage events you've saved for later</p>
        </div>
        
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="priority">Priority</TabsTrigger>
            <TabsTrigger value="registered">Registered</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-4">
              {savedEvents.map((event) => (
                <Card key={event.id} className={event.isPriority ? "border-[#9b87f5]/30" : ""}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <h3 className="font-playfair text-lg font-semibold">{event.title}</h3>
                          {event.isPriority && (
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground">{event.organizer}</p>
                        
                        <div className="flex flex-col gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-[#6E59A5]" />
                            <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#6E59A5]" />
                            <span>{event.location}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Tag className="h-4 w-4 text-[#6E59A5]" />
                            <div className="flex gap-2">
                              {event.subjects.map((subject, index) => (
                                <span key={index} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleTogglePriority(event.id)}
                          className={event.isPriority ? "bg-yellow-50" : ""}
                        >
                          {event.isPriority ? "Remove Priority" : "Make Priority"}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleRemoveEvent(event.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    
                    {event.isRegistered && (
                      <div className="mt-4 bg-green-50 text-green-700 px-3 py-1 rounded-md text-sm inline-block">
                        You're registered for this event
                      </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <label className="text-sm font-medium">Your Notes:</label>
                        <Button size="sm" onClick={() => handleSaveNotes(event.id)}>Save Notes</Button>
                      </div>
                      <textarea 
                        className="w-full p-2 text-sm border rounded-md resize-none"
                        rows={2}
                        defaultValue={event.notes}
                        placeholder="Add your notes about this event..."
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="priority">
            <div className="space-y-4">
              {savedEvents
                .filter(event => event.isPriority)
                .map((event) => (
                  <Card key={event.id} className="border-[#9b87f5]/30">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <h3 className="font-playfair text-lg font-semibold">{event.title}</h3>
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                          
                          <p className="text-sm text-muted-foreground">{event.organizer}</p>
                          
                          <div className="flex flex-col gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-[#6E59A5]" />
                              <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-[#6E59A5]" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleTogglePriority(event.id)}
                            className="bg-yellow-50"
                          >
                            Remove Priority
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleRemoveEvent(event.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="registered">
            <div className="space-y-4">
              {savedEvents
                .filter(event => event.isRegistered)
                .map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <h3 className="font-playfair text-lg font-semibold">{event.title}</h3>
                            {event.isPriority && (
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            )}
                          </div>
                          
                          <p className="text-sm text-muted-foreground">{event.organizer}</p>
                          
                          <div className="flex flex-col gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-[#6E59A5]" />
                              <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-[#6E59A5]" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-green-50 text-green-700 px-3 py-1 rounded-md text-sm inline-block">
                        You're registered for this event
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SavedEvents;
