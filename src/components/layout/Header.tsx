
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Globe, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-academic-purple" />
            <span className="font-playfair text-xl font-bold">AcademicConnect</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/events" className="text-sm font-medium transition-colors hover:text-academic-purple">
              Events
            </Link>
            <Link to="/calendar" className="text-sm font-medium transition-colors hover:text-academic-purple">
              Calendar
            </Link>
            <Link to="/map" className="text-sm font-medium transition-colors hover:text-academic-purple">
              Map
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-academic-purple">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/calendar">
            <Button variant="ghost" size="icon">
              <Calendar className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/auth/register">
            <Button className="bg-academic-purple hover:bg-academic-purple/90 hidden md:inline-flex">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
