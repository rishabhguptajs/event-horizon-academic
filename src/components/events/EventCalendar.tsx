
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { EventProps } from "./EventCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CalendarEvent {
  date: Date;
  events: EventProps[];
}

interface EventCalendarProps {
  events: EventProps[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  
  // Generate calendar events for the current month
  useEffect(() => {
    if (!events || events.length === 0) return;

    // Process events into calendar format
    const eventsByDate: { [key: string]: EventProps[] } = {};
    
    events.forEach(event => {
      const startDate = new Date(event.startDate);
      const endDate = event.endDate ? new Date(event.endDate) : startDate;
      
      // Create an entry for each day this event spans
      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const dateKey = currentDate.toISOString().split('T')[0];
        
        if (!eventsByDate[dateKey]) {
          eventsByDate[dateKey] = [];
        }
        
        eventsByDate[dateKey].push(event);
        
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });
    
    // Convert to calendar events array
    const calEvents: CalendarEvent[] = Object.keys(eventsByDate).map(dateStr => ({
      date: new Date(dateStr),
      events: eventsByDate[dateStr],
    }));
    
    setCalendarEvents(calEvents);
  }, [events]);
  
  // Custom day renderer for the calendar
  const renderDay = (props: { date: Date; isSelected: boolean }) => {
    const { date } = props;
    const formattedDay = date.toISOString().split('T')[0];
    const eventsForDay = calendarEvents.find(
      e => e.date.toISOString().split('T')[0] === formattedDay
    );
    
    const dayHasEvents = eventsForDay && eventsForDay.events.length > 0;
    
    return (
      <div className={`relative w-full h-full p-2 ${dayHasEvents ? 'font-medium' : ''}`}>
        <span>{date.getDate()}</span>
        {dayHasEvents && (
          <div className="absolute bottom-1 left-0 right-0 flex justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-academic-purple"></div>
          </div>
        )}
      </div>
    );
  };

  // Filter events for the selected date
  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    
    const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
    const eventsForDay = calendarEvents.find(
      e => e.date.toISOString().split('T')[0] === formattedSelectedDate
    );
    
    return eventsForDay ? eventsForDay.events : [];
  };

  // Previous and next month navigation
  const goToPreviousMonth = () => {
    const previousMonth = new Date(date);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setDate(nextMonth);
  };

  // Format date for display
  const formatDateForDisplay = (date: Date | undefined) => {
    if (!date) return "";
    
    return date.toLocaleDateString("en-US", {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <Card className="flex-1">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-playfair text-lg font-semibold">Event Calendar</h3>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={goToNextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            month={date}
            onMonthChange={setDate}
            className="rounded-md border"
            modifiers={{
              hasEvents: calendarEvents.map(ce => ce.date)
            }}
            modifiersClassNames={{
              hasEvents: "font-medium relative"
            }}
          />
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardContent className="p-4">
          <div className="flex items-center mb-4">
            <CalendarIcon className="mr-2 h-5 w-5 text-academic-purple" />
            <h3 className="font-playfair text-lg font-semibold">
              {selectedDate ? formatDateForDisplay(selectedDate) : "Select a date to view events"}
            </h3>
          </div>

          {selectedDate ? (
            <>
              {getEventsForSelectedDate().length > 0 ? (
                <div className="space-y-4">
                  {getEventsForSelectedDate().map((event, index) => (
                    <div key={index} className="border rounded-md p-3 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.organizer}</p>
                        </div>
                        <Badge className={
                          event.eventType.toLowerCase() === "conference" ? "bg-blue-100 text-blue-800" :
                          event.eventType.toLowerCase() === "workshop" ? "bg-green-100 text-green-800" :
                          event.eventType.toLowerCase() === "seminar" ? "bg-purple-100 text-purple-800" :
                          event.eventType.toLowerCase() === "symposium" ? "bg-amber-100 text-amber-800" :
                          "bg-gray-100 text-gray-800"
                        }>
                          {event.eventType}
                        </Badge>
                      </div>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm flex items-center gap-1.5">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          {new Date(event.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          {event.endDate && ` - ${new Date(event.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                        </p>
                        <p className="text-sm flex items-center gap-1.5">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  No events scheduled for this date.
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              Select a date from the calendar to view events.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCalendar;
