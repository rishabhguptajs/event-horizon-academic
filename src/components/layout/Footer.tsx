
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-academic-purple" />
              <span className="font-playfair text-xl font-bold">AcademicConnect</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting academics worldwide with conferences, workshops, seminars, and symposia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/events" className="text-muted-foreground hover:text-academic-purple transition-colors">All Events</Link></li>
              <li><Link to="/calendar" className="text-muted-foreground hover:text-academic-purple transition-colors">Calendar</Link></li>
              <li><Link to="/map" className="text-muted-foreground hover:text-academic-purple transition-colors">Map View</Link></li>
              <li><Link to="/subjects" className="text-muted-foreground hover:text-academic-purple transition-colors">Subject Areas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/auth/login" className="text-muted-foreground hover:text-academic-purple transition-colors">Log In</Link></li>
              <li><Link to="/auth/register" className="text-muted-foreground hover:text-academic-purple transition-colors">Sign Up</Link></li>
              <li><Link to="/profile" className="text-muted-foreground hover:text-academic-purple transition-colors">My Profile</Link></li>
              <li><Link to="/saved-events" className="text-muted-foreground hover:text-academic-purple transition-colors">Saved Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-academic-purple transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-academic-purple transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-academic-purple transition-colors">Contact</Link></li>
              <li><Link to="/api" className="text-muted-foreground hover:text-academic-purple transition-colors">API Access</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AcademicConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
