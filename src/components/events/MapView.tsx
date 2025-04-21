
import React from "react";
import { EventProps } from "./EventCard";
import { Card } from "@/components/ui/card";

interface MapViewProps {
  events: EventProps[];
}

const MapView = ({ events }: MapViewProps) => {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-playfair text-xl font-semibold">Event Locations</h2>
      </div>
      <div className="relative h-[500px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <p className="mb-2 text-muted-foreground">Interactive map will be implemented with a mapping service</p>
          <p className="text-sm">This will show {events.length} academic events worldwide</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Note: The interactive map will be integrated with a mapping service API.
      </p>
    </Card>
  );
};

export default MapView;
