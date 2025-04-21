
import { useState } from "react";
import { Calendar, ChevronDown, Filter, MapPin, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Sample data for filters - these would come from API in production
const eventTypes = ["Conference", "Workshop", "Seminar", "Symposium", "Webinar"];
const academicLevels = ["All Levels", "Undergraduate", "Graduate", "Doctoral", "Faculty", "Researcher"];
const subjects = [
  "Computer Science",
  "Medicine",
  "Engineering",
  "Biology",
  "Physics",
  "Chemistry",
  "Mathematics",
  "Economics",
  "Psychology",
  "Sociology",
  "History",
  "Literature",
  "Philosophy",
];

interface FilterState {
  search: string;
  location: string;
  startDate: string;
  endDate: string;
  eventType: string[];
  academicLevel: string;
  subjects: string[];
}

interface SearchFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    location: "",
    startDate: "",
    endDate: "",
    eventType: [],
    academicLevel: "",
    subjects: [],
  });

  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    
    // Calculate active filters count
    let count = 0;
    if (updatedFilters.location) count++;
    if (updatedFilters.startDate) count++;
    if (updatedFilters.endDate) count++;
    if (updatedFilters.eventType.length > 0) count++;
    if (updatedFilters.academicLevel) count++;
    if (updatedFilters.subjects.length > 0) count++;
    
    setActiveFiltersCount(count);

    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  const clearFilters = () => {
    setFilters({
      ...filters,
      location: "",
      startDate: "",
      endDate: "",
      eventType: [],
      academicLevel: "",
      subjects: [],
    });
    setActiveFiltersCount(0);
    if (onFilterChange) {
      onFilterChange({
        ...filters,
        location: "",
        startDate: "",
        endDate: "",
        eventType: [],
        academicLevel: "",
        subjects: [],
      });
    }
  };

  const toggleEventType = (type: string) => {
    const updatedTypes = filters.eventType.includes(type)
      ? filters.eventType.filter((t) => t !== type)
      : [...filters.eventType, type];
    
    handleFilterChange({ eventType: updatedTypes });
  };

  const toggleSubject = (subject: string) => {
    const updatedSubjects = filters.subjects.includes(subject)
      ? filters.subjects.filter((s) => s !== subject)
      : [...filters.subjects, subject];
    
    handleFilterChange({ subjects: updatedSubjects });
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-4">
      <div className="flex flex-col space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by event name or keyword"
            className="pl-10"
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
          />
        </div>

        {/* Filters row */}
        <div className="flex flex-wrap gap-2 items-center">
          {/* Location filter */}
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Location"
              className="pl-10 max-w-[200px]"
              value={filters.location}
              onChange={(e) => handleFilterChange({ location: e.target.value })}
            />
          </div>

          {/* Date range */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="date"
                placeholder="Start date"
                className="pl-10 w-[150px]"
                value={filters.startDate}
                onChange={(e) => handleFilterChange({ startDate: e.target.value })}
              />
            </div>
            <span className="text-sm">to</span>
            <Input
              type="date"
              placeholder="End date"
              className="w-[150px]"
              value={filters.endDate}
              onChange={(e) => handleFilterChange({ endDate: e.target.value })}
            />
          </div>

          {/* Event Type filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Event Type
                <ChevronDown className="h-4 w-4" />
                {filters.eventType.length > 0 && (
                  <Badge className="ml-1 bg-academic-purple text-white">
                    {filters.eventType.length}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-2">
                <h4 className="font-medium">Event Type</h4>
                <Separator />
                <div className="space-y-2">
                  {eventTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`event-type-${type}`} 
                        checked={filters.eventType.includes(type)}
                        onCheckedChange={() => toggleEventType(type)}
                      />
                      <Label htmlFor={`event-type-${type}`}>{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Academic Level filter */}
          <Select 
            value={filters.academicLevel}
            onValueChange={(value) => handleFilterChange({ academicLevel: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Academic Level" />
            </SelectTrigger>
            <SelectContent>
              {academicLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Subjects filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Subjects
                <ChevronDown className="h-4 w-4" />
                {filters.subjects.length > 0 && (
                  <Badge className="ml-1 bg-academic-purple text-white">
                    {filters.subjects.length}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-2">
                <h4 className="font-medium">Subject Areas</h4>
                <Input placeholder="Search subjects..." className="mb-2" />
                <Separator />
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {subjects.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`subject-${subject}`} 
                        checked={filters.subjects.includes(subject)}
                        onCheckedChange={() => toggleSubject(subject)}
                      />
                      <Label htmlFor={`subject-${subject}`}>{subject}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Clear filters */}
          {activeFiltersCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground"
              onClick={clearFilters}
            >
              <X className="h-4 w-4 mr-1" /> Clear filters
            </Button>
          )}
        </div>

        {/* Active filters */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {filters.location && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {filters.location}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange({ location: "" })}
                />
              </Badge>
            )}
            
            {filters.startDate && (
              <Badge variant="secondary" className="flex items-center gap-1">
                From {new Date(filters.startDate).toLocaleDateString()}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange({ startDate: "" })}
                />
              </Badge>
            )}
            
            {filters.endDate && (
              <Badge variant="secondary" className="flex items-center gap-1">
                To {new Date(filters.endDate).toLocaleDateString()}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange({ endDate: "" })}
                />
              </Badge>
            )}
            
            {filters.academicLevel && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {filters.academicLevel}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange({ academicLevel: "" })}
                />
              </Badge>
            )}
            
            {filters.eventType.map((type) => (
              <Badge key={type} variant="secondary" className="flex items-center gap-1">
                {type}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => toggleEventType(type)}
                />
              </Badge>
            ))}
            
            {filters.subjects.map((subject) => (
              <Badge key={subject} variant="secondary" className="flex items-center gap-1">
                {subject}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => toggleSubject(subject)}
                />
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;
