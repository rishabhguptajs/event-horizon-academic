
import Layout from "@/components/layout/Layout";
import MapView from "@/components/events/MapView";
import { EventProps } from "@/components/events/EventCard";

// Sample events data (same as in Events.tsx but India-focused)
const eventsData: EventProps[] = [
  {
    id: "1",
    title: "National Conference on Machine Learning and AI",
    organizer: "Indian Institute of Technology Delhi",
    location: "New Delhi, India",
    startDate: "2025-06-10",
    endDate: "2025-06-15",
    eventType: "Conference",
    subjects: ["Computer Science", "Artificial Intelligence", "Data Science"],
    academicLevel: "Graduate",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: "2",
    title: "Symposium on Quantum Physics Applications",
    organizer: "Indian Institute of Science",
    location: "Bangalore, India",
    startDate: "2025-07-05",
    endDate: "2025-07-08",
    eventType: "Symposium",
    subjects: ["Physics", "Quantum Mechanics", "Materials Science"],
    academicLevel: "Doctoral",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: "3",
    title: "Workshop on Sustainable Engineering Practices",
    organizer: "IIT Bombay",
    location: "Mumbai, India",
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
    organizer: "All India Institute of Medical Sciences",
    location: "Delhi, India",
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
    organizer: "University of Delhi",
    location: "Delhi, India",
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
    organizer: "Indian Meteorological Society",
    location: "Chennai, India",
    startDate: "2025-10-05",
    endDate: "2025-10-09",
    eventType: "Symposium",
    subjects: ["Environmental Science", "Climate Studies", "Geography"],
    academicLevel: "Researcher",
    imageUrl: "https://images.unsplash.com/photo-1618477462146-050d2767eac4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  }
];

const Map = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold mb-2">Academic Events Map</h1>
          <p className="text-muted-foreground">Explore academic events across India by location</p>
        </div>
        
        <div className="my-6">
          <MapView events={eventsData} />
        </div>
      </div>
    </Layout>
  );
};

export default Map;
