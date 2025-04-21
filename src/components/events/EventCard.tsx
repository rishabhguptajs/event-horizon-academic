
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface EventProps {
  id: string;
  title: string;
  organizer: string;
  location: string;
  startDate: string;
  endDate: string;
  eventType: string;
  subjects: string[];
  academicLevel: string;
  imageUrl?: string;
}

const EventCard = ({ 
  id, 
  title, 
  organizer, 
  location, 
  startDate, 
  endDate, 
  eventType, 
  subjects,
  academicLevel,
  imageUrl 
}: EventProps) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get event type color
  const getEventTypeBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
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

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className={getEventTypeBadgeColor(eventType)}>
            {eventType}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
            {academicLevel}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="flex flex-col gap-1">
          <Link to={`/events/${id}`} className="hover:text-academic-purple transition-colors">
            <h3 className="font-playfair text-lg font-semibold line-clamp-2">{title}</h3>
          </Link>
          <p className="text-sm text-muted-foreground">{organizer}</p>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0 pb-2 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-academic-blue" />
          <p>{formatDate(startDate)} {endDate && `- ${formatDate(endDate)}`}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-academic-blue" />
          <p className="truncate">{location}</p>
        </div>
        <div className="flex flex-wrap gap-1 pt-2">
          {subjects.slice(0, 3).map((subject, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {subject}
            </Badge>
          ))}
          {subjects.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{subjects.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2 flex justify-between">
        <Button variant="ghost" size="sm" className="text-academic-purple">
          Learn More
        </Button>
        <Button variant="outline" size="sm">
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
