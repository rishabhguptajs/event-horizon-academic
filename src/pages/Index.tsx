import { CalendarDays, Globe, Search, Users, Book, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { EventProps } from "@/components/events/EventCard";

// India-centric event data
const sampleEvents: EventProps[] = [
  {
    id: "1",
    title: "International Conference on Emerging Trends in Engineering",
    organizer: "IIT Bombay",
    location: "Mumbai, India",
    startDate: "2025-08-21",
    endDate: "2025-08-24",
    eventType: "Conference",
    subjects: ["Engineering", "Technology"],
    academicLevel: "Faculty",
  },
  {
    id: "2",
    title: "National Symposium on Life Sciences",
    organizer: "AIIMS Delhi",
    location: "New Delhi, India",
    startDate: "2025-09-12",
    endDate: "2025-09-14",
    eventType: "Symposium",
    subjects: ["Biology", "Medicine"],
    academicLevel: "Graduate",
  },
  {
    id: "3",
    title: "Workshop on Data Science & AI",
    organizer: "IISc Bangalore",
    location: "Bengaluru, India",
    startDate: "2025-11-03",
    endDate: "2025-11-05",
    eventType: "Workshop",
    subjects: ["Computer Science", "AI"],
    academicLevel: "Undergraduate",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-[#FDE1D3] via-[#FEC6A1] to-[#F2FCE2] text-[#221F26]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #fae6cc 0%, #ffa99f 40%, #e3ffd6 100%)",
        }}
      >
        <div className="container py-20 md:py-32 px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow tracking-tight">
              Explore India’s Academic Events with <span className="text-[#6E59A5]">eventsphere</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-[#333]/80">
              Discover conferences, symposiums, workshops, and seminars across India’s top institutes.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#6E59A5]" />
              <input
                type="text"
                placeholder="Search for events, institutes, or locations in India..."
                className="w-full h-12 pl-12 pr-32 rounded-full bg-white/95 border-2 border-[#6E59A5]/20 text-[#221F26] placeholder:text-[#6E59A5]/60 shadow transition focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search events"
              />
              <Button
                className="absolute right-2 top-1.5 bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:from-[#6E59A5] hover:to-[#9b87f5] text-white rounded-full py-2 px-6 font-bold"
                size="sm"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Categories */}
      <section className="py-16 bg-[#F1F0FB]">
        <div className="container px-4">
          <h2 className="font-playfair text-3xl font-bold mb-10 text-center text-[#6E59A5]">
            Browse Events by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 - Academic Level */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#D6BCFA] hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-[#D3E4FD] w-12 h-12 flex items-center justify-center rounded-lg">
                <Users className="text-[#0EA5E9] h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Academic Level</h3>
              <p className="text-muted-foreground mb-4">
                Find events for undergraduate students, researchers, or faculty in India.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/events?level=Undergraduate" className="text-xs bg-[#FEC6A1]/70 hover:bg-[#FEC6A1] px-3 py-1 rounded-full">
                  Undergraduate
                </Link>
                <Link to="/events?level=Graduate" className="text-xs bg-[#F2FCE2]/70 hover:bg-[#F2FCE2] px-3 py-1 rounded-full">
                  Graduate
                </Link>
                <Link to="/events?level=Doctoral" className="text-xs bg-[#FFE29F]/70 hover:bg-[#FFE29F] px-3 py-1 rounded-full">
                  Doctoral
                </Link>
                <Link to="/events?level=Faculty" className="text-xs bg-[#D6BCFA]/70 hover:bg-[#D6BCFA] px-3 py-1 rounded-full">
                  Faculty
                </Link>
              </div>
            </div>

            {/* Category 2 - Event Type */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#FFA99F] hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-[#FFE29F] w-12 h-12 flex items-center justify-center rounded-lg">
                <Book className="text-[#F97316] h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Event Type</h3>
              <p className="text-muted-foreground mb-4">
                Conference, symposium, seminar, or workshop—see all formats.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/events?type=Conference" className="text-xs bg-[#E5DEFF]/70 hover:bg-[#E5DEFF] px-3 py-1 rounded-full">
                  Conferences
                </Link>
                <Link to="/events?type=Workshop" className="text-xs bg-[#FFDEE2]/70 hover:bg-[#FFDEE2] px-3 py-1 rounded-full">
                  Workshops
                </Link>
                <Link to="/events?type=Seminar" className="text-xs bg-[#FDE1D3]/70 hover:bg-[#FDE1D3] px-3 py-1 rounded-full">
                  Seminars
                </Link>
                <Link to="/events?type=Symposium" className="text-xs bg-[#F2FCE2]/70 hover:bg-[#F2FCE2] px-3 py-1 rounded-full">
                  Symposia
                </Link>
              </div>
            </div>

            {/* Category 3 - Time Period */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#FEC6A1] hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-[#FEC6A1] w-12 h-12 flex items-center justify-center rounded-lg">
                <CalendarDays className="text-[#F97316] h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Time Period</h3>
              <p className="text-muted-foreground mb-4">
                See what's happening this month, next month, or plan ahead.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/events?when=this-week" className="text-xs bg-[#F2FCE2]/70 hover:bg-[#F2FCE2] px-3 py-1 rounded-full">
                  This Week
                </Link>
                <Link to="/events?when=this-month" className="text-xs bg-[#FFDEE2]/70 hover:bg-[#FFDEE2] px-3 py-1 rounded-full">
                  This Month
                </Link>
                <Link to="/events?when=next-month" className="text-xs bg-[#FFE29F]/70 hover:bg-[#FFE29F] px-3 py-1 rounded-full">
                  Next Month
                </Link>
                <Link to="/events?when=future" className="text-xs bg-[#D3E4FD]/70 hover:bg-[#D3E4FD] px-3 py-1 rounded-full">
                  Future
                </Link>
              </div>
            </div>

            {/* Category 4 - Subject Areas */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#F2FCE2] hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-[#E5DEFF] w-12 h-12 flex items-center justify-center rounded-lg">
                <MapPin className="text-[#6E59A5] h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Subject Areas</h3>
              <p className="text-muted-foreground mb-4">
                Explore trending disciplines—science, engineering, medicine, humanities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/events?subject=Engineering" className="text-xs bg-[#F2FCE2]/70 hover:bg-[#F2FCE2] px-3 py-1 rounded-full">
                  Engineering
                </Link>
                <Link to="/events?subject=Medicine" className="text-xs bg-[#FFE29F]/70 hover:bg-[#FFE29F] px-3 py-1 rounded-full">
                  Medicine
                </Link>
                <Link to="/events?subject=Computer+Science" className="text-xs bg-[#D3E4FD]/70 hover:bg-[#D3E4FD] px-3 py-1 rounded-full">
                  Computer Science
                </Link>
                <Link to="/events?subject=Social+Sciences" className="text-xs bg-[#FFDEE2]/70 hover:bg-[#FFDEE2] px-3 py-1 rounded-full">
                  Social Sciences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gradient-to-b from-[#fff8f5] to-[#e7f9e7]">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-playfair text-3xl font-bold text-[#6E59A5]">Featured Events</h2>
            <Link to="/events" className="text-[#6E59A5] hover:text-[#9b87f5] flex items-center gap-1 font-semibold">
              View All <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Event Cards */}
            {sampleEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all">
                <div className="h-48 bg-gradient-to-br from-[#F2FCE2] via-[#D6BCFA] to-[#FEC6A1] flex items-center justify-center">
                  <Globe className="h-10 w-10 text-[#6E59A5]" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-xl font-semibold">{event.title}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-[#F2FCE2] text-[#6E59A5] font-bold">
                      {event.eventType}
                    </span>
                  </div>
                  <p className="text-sm text-[#555] mb-4">{event.organizer}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarDays className="h-4 w-4 text-[#F97316]" />
                      <p>
                        {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-[#6E59A5]" />
                      <p>{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {event.subjects.map((subject, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-full bg-[#FFA99F]/70">
                          {subject}
                        </span>
                      ))}
                    </div>
                    <Link to={`/events/${event.id}`} className="text-[#6E59A5] hover:text-[#9b87f5] font-semibold">
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
      <section className="py-16 bg-[#F1F0FB]">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4 text-[#6E59A5]">
              Why Use <span className="text-[#9b87f5]">eventsphere</span>?
            </h2>
            <p className="text-lg text-[#555]">
              India’s only centralized portal for all academic events—accurate, updated, and India focused!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-[#FFE29F]/70 rounded-full flex items-center justify-center mb-4">
                <Search className="h-7 w-7 text-[#F97316]" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Curated Listings</h3>
              <p className="text-[#6E59A5]/80">
                Authentic events handpicked for India’s academic community.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-[#D3E4FD]/70 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-[#0EA5E9]" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Personalized Alerts</h3>
              <p className="text-[#6E59A5]/80">
                Never miss out—get notified when Indian events match your interests.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-[#E5DEFF]/70 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-[#6E59A5]" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">All India Coverage</h3>
              <p className="text-[#6E59A5]/80">
                Events from main metros and regional excellence across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-gradient-to-br from-[#6E59A5] to-[#9b87f5] text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Join India’s Academic Community on <span className="text-[#FFE29F]">eventsphere</span>
            </h2>
            <p className="text-lg mb-8">
              Register now! Save your favorite events, get custom recommendations, and direct alerts—India’s brightest await you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button size="lg" className="bg-[#FFE29F] text-[#6E59A5] hover:bg-[#FFF7CD] w-full sm:w-auto font-bold">
                  Sign Up for Free
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto font-bold"
                >
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
