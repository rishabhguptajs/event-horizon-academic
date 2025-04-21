
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Map, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#faf9fc]/95 backdrop-blur shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/india-flag.svg"
              alt="India Flag"
              className="h-6 w-6 rounded shadow"
              style={{ minWidth: 24 }}
            />
            <span className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-[#6E59A5]">eventsphere</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/events" className="text-sm font-medium transition-colors hover:text-[#9b87f5]">Events</Link>
            <Link to="/calendar" className="text-sm font-medium transition-colors hover:text-[#9b87f5]">Calendar</Link>
            <Link to="/map" className="text-sm font-medium transition-colors hover:text-[#9b87f5]">Map</Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-[#9b87f5]">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/calendar">
            <Button variant="ghost" size="icon" aria-label="Calendar">
              <Calendar className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/auth/register">
            <Button className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] text-white hover:from-[#6E59A5] hover:to-[#9b87f5] px-5 py-2 rounded-lg font-bold border-none shadow-sm hidden md:inline-flex">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

