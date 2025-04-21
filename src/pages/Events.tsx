
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SearchFilters from "@/components/events/SearchFilters";
import EventCard, { EventProps } from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { ListFilter, CalendarRange, Map } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCalendar from "@/components/events/EventCalendar";
import MapView from "@/components/events/MapView";
import { Badge } from "@/components/ui/badge";

// Sample events data
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

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentView, setCurrentView] = useState<"list" | "calendar" | "map">("list");
  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>(eventsData);
  const [activeFilters, setActiveFilters] = useState<{
    subject?: string;
    category?: string;
  }>({});

  useEffect(() => {
    const subject = searchParams.get("subject");
    const category = searchParams.get("category");
    
    const newActiveFilters: {
      subject?: string;
      category?: string;
    } = {};
    
    if (subject) newActiveFilters.subject = subject;
    if (category) newActiveFilters.category = category;
    
    setActiveFilters(newActiveFilters);
    
    // Filter events based on URL parameters
    let filtered = [...eventsData];
    
    if (subject) {
      filtered = filtered.filter(event => 
        event.subjects.some(s => s.toLowerCase() === subject.toLowerCase())
      );
    }
    
    // Category filtering would require mapping categories to subjects
    // This is a simplified implementation
    if (category) {
      // Simple heuristic: if category contains any of the subject keywords
      filtered = filtered.filter(event => 
        event.subjects.some(s => 
          category.toLowerCase().includes(s.toLowerCase()) || 
          s.toLowerCase().includes(category.toLowerCase())
        )
      );
    }
    
    setFilteredEvents(filtered);
  }, [searchParams]);

  const clearFilter = (filterType: 'subject' | 'category') => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(filterType);
    setSearchParams(newSearchParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="font-playfair text-3xl font-bold mb-2">Academic Events</h1>
            <p className="text-muted-foreground">Browse and filter academic events worldwide</p>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg">
            <Button
              variant={currentView === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentView("list")}
              className={currentView === "list" ? "bg-academic-purple" : ""}
            >
              <ListFilter className="h-4 w-4 mr-2" />
              List
            </Button>
            <Button
              variant={currentView === "calendar" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentView("calendar")}
              className={currentView === "calendar" ? "bg-academic-purple" : ""}
            >
              <CalendarRange className="h-4 w-4 mr-2" />
              Calendar
            </Button>
            <Button
              variant={currentView === "map" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentView("map")}
              className={currentView === "map" ? "bg-academic-purple" : ""}
            >
              <Map className="h-4 w-4 mr-2" />
              Map
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <SearchFilters />
        </div>
        
        {/* Active filters display */}
        {(activeFilters.subject || activeFilters.category) && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-gray-50 rounded-md">
            <span className="text-sm font-medium text-gray-700">Active Filters:</span>
            
            {activeFilters.subject && (
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 flex items-center gap-1 px-3 py-1">
                Subject: {activeFilters.subject}
                <button 
                  className="ml-1 hover:text-purple-900" 
                  onClick={() => clearFilter('subject')}
                >
                  ×
                </button>
              </Badge>
            )}
            
            {activeFilters.category && (
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 flex items-center gap-1 px-3 py-1">
                Category: {activeFilters.category}
                <button 
                  className="ml-1 hover:text-blue-900" 
                  onClick={() => clearFilter('category')}
                >
                  ×
                </button>
              </Badge>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 text-xs ml-auto"
              onClick={clearAllFilters}
            >
              Clear All
            </Button>
          </div>
        )}

        {currentView === "list" && (
          <>
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No Events Found</h3>
                <p className="text-muted-foreground mb-6">
                  No events match your current filter criteria.
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            )}
          </>
        )}

        {currentView === "calendar" && (
          <div className="my-6">
            <EventCalendar events={filteredEvents} />
          </div>
        )}

        {currentView === "map" && (
          <div className="my-6">
            <MapView events={filteredEvents} />
          </div>
        )}

        {filteredEvents.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-academic-purple text-academic-purple hover:bg-academic-purple/10">
              Load More Events
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;
