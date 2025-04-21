
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#e7f9e7] via-[#F2FCE2] to-[#FFE29F] border-t shadow-inner">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/india-flag.svg"
                alt="India Flag"
                className="h-6 w-6 rounded shadow"
                style={{ minWidth: 24 }}
              />
              <span className="font-playfair text-2xl font-bold text-[#6E59A5]">eventsphere</span>
            </Link>
            <p className="mt-4 text-sm text-[#6E59A5]/90">
              India’s academic event gateway – connecting students, faculty, & researchers nationwide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#6E59A5]">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/events" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">All Events</Link></li>
              <li><Link to="/calendar" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">Calendar</Link></li>
              <li><Link to="/map" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">Map View</Link></li>
              <li><Link to="/subjects" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">Subject Areas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#6E59A5]">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/auth/login" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">Log In</Link></li>
              <li><Link to="/auth/register" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">Sign Up</Link></li>
              <li><Link to="/profile" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">My Profile</Link></li>
              <li><Link to="/saved-events" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">Saved Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#6E59A5]">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">Contact</Link></li>
              <li><Link to="/api" className="text-muted-foreground hover:text-[#9b87f5] transition-colors">API Access</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-sm text-[#221F26]/70">
          <p>
            &copy; {new Date().getFullYear()} eventsphere • Made with <span className="text-[#F97316]">♥</span> in India • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
