
import { CalendarDays, Globe, ListFilter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { EventProps } from "@/components/events/EventCard";

// Sample event data for demonstration
const sampleEvents: EventProps[] = [
  {
    id: "1",
    title: "International Conference on Machine Learning",
    organizer: "Stanford University",
    location: "San Francisco, USA",
    startDate: "2025-06-10",
    endDate: "2025-06-15",
    eventType: "Conference",
    subjects: ["Computer Science", "Artificial Intelligence"],
    academicLevel: "Graduate",
  },
  {
    id: "2",
    title: "European Symposium on Quantum Physics",
    organizer: "ETH Zurich",
    location: "Zurich, Switzerland",
    startDate: "2025-07-05",
    endDate: "2025-07-08",
    eventType: "Symposium",
    subjects: ["Physics", "Quantum Mechanics"],
    academicLevel: "Doctoral",
  },
  {
    id: "3",
    title: "Workshop on Sustainable Engineering",
    organizer: "MIT",
    location: "Boston, USA",
    startDate: "2025-05-22",
    endDate: "2025-05-24",
    eventType: "Workshop",
    subjects: ["Engineering", "Environmental Science"],
    academicLevel: "Faculty",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-academic-purple/90 to-academic-blue/90 text-white">
        <div className="container py-20 md:py-32 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Academic Events Worldwide
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/90">
              Connect with conferences, workshops, seminars, and symposia tailored to your academic interests.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/70" />
              <input
                type="text"
                placeholder="Search for events, disciplines, or locations..."
                className="w-full h-12 pl-12 pr-32 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                className="absolute right-1.5 top-1.5 bg-white text-academic-purple hover:bg-white/90 rounded-full"
                size="sm"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="font-playfair text-3xl font-bold mb-10 text-center">
            Find Events by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 - Academic Level */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg">
                <Globe className="text-academic-blue h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Academic Level</h3>
              <p className="text-muted-foreground mb-4">
                Browse events by academic level, from undergraduate to faculty research.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/events?level=Undergraduate" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Undergraduate
                </Link>
                <Link to="/events?level=Graduate" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Graduate
                </Link>
                <Link to="/events?level=Doctoral" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Doctoral
                </Link>
                <Link to="/events?level=Faculty" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Faculty
                </Link>
              </div>
            </div>

            {/* Category 2 - Event Type */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 bg-purple-50 w-12 h-12 flex items-center justify-center rounded-lg">
                <ListFilter className="text-academic-purple h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Event Type</h3>
              <p className="text-muted-foreground mb-4">
                Find events by format, from large conferences to specialized workshops.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/events?type=Conference" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Conferences
                </Link>
                <Link to="/events?type=Workshop" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Workshops
                </Link>
                <Link to="/events?type=Seminar" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Seminars
                </Link>
                <Link to="/events?type=Symposium" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Symposia
                </Link>
              </div>
            </div>

            {/* Category 3 - Time Period */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 bg-orange-50 w-12 h-12 flex items-center justify-center rounded-lg">
                <CalendarDays className="text-academic-orange h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Time Period</h3>
              <p className="text-muted-foreground mb-4">
                Discover events happening this week, month, or plan for the future.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/events?when=this-week" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  This Week
                </Link>
                <Link to="/events?when=this-month" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  This Month
                </Link>
                <Link to="/events?when=next-month" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Next Month
                </Link>
                <Link to="/events?when=future" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Future
                </Link>
              </div>
            </div>

            {/* Category 4 - Subject Areas */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 bg-green-50 w-12 h-12 flex items-center justify-center rounded-lg">
                <Globe className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Subject Areas</h3>
              <p className="text-muted-foreground mb-4">
                Explore events by academic discipline and research area.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/events?subject=Computer+Science" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Computer Science
                </Link>
                <Link to="/events?subject=Medicine" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Medicine
                </Link>
                <Link to="/events?subject=Engineering" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Engineering
                </Link>
                <Link to="/events?subject=Physics" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
                  Physics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-playfair text-3xl font-bold">Featured Events</h2>
            <Link to="/events" className="text-academic-purple hover:text-academic-purple/80 flex items-center gap-1">
              View All <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Event Cards */}
            {sampleEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-xl font-semibold">{event.title}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {event.eventType}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{event.organizer}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarDays className="h-4 w-4 text-academic-blue" />
                      <p>
                        {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4 text-academic-blue" />
                      <p>{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {event.subjects.map((subject, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100">
                          {subject}
                        </span>
                      ))}
                    </div>
                    <Link to={`/events/${event.id}`} className="text-academic-purple hover:text-academic-purple/80">
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Why Use AcademicConnect?
            </h2>
            <p className="text-lg text-muted-foreground">
              We bring together academic events from across the globe, making it easier for you to discover and engage with opportunities in your field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-7 w-7 text-academic-blue" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Comprehensive Database</h3>
              <p className="text-muted-foreground">
                Access thousands of academic events across disciplines, verified for accuracy and relevance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CalendarDays className="h-7 w-7 text-academic-purple" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Personalized Alerts</h3>
              <p className="text-muted-foreground">
                Receive notifications for events matching your research interests and academic profile.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-academic-orange" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Global Coverage</h3>
              <p className="text-muted-foreground">
                Find academic events worldwide, with detailed information on locations, dates, and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-academic-purple text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Join the Academic Community
            </h2>
            <p className="text-lg mb-8">
              Register today to save your favorite events, receive personalized recommendations, and get email alerts for upcoming deadlines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button size="lg" className="bg-white text-academic-purple hover:bg-white/90 w-full sm:w-auto">
                  Sign Up for Free
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
