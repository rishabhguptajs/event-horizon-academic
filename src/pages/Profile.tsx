
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

const sampleEvents = [
  {
    id: "1",
    title: "National Conference on Machine Learning and AI",
    date: "June 10-15, 2025",
    location: "New Delhi, India"
  },
  {
    id: "2",
    title: "Workshop on Sustainable Engineering Practices",
    date: "May 22-24, 2025",
    location: "Mumbai, India" 
  },
  {
    id: "3",
    title: "Symposium on Quantum Physics Applications",
    date: "July 5-8, 2025",
    location: "Bangalore, India"
  }
];

const Profile = () => {
  const [name, setName] = useState("Arjun Sharma");
  const [email, setEmail] = useState("arjun.sharma@example.com");
  const [bio, setBio] = useState("PhD Candidate in Computer Science at IIT Delhi with focus on Machine Learning and AI applications in healthcare.");
  const [institution, setInstitution] = useState("Indian Institute of Technology Delhi");
  const [interests, setInterests] = useState(["Machine Learning", "Artificial Intelligence", "Healthcare Technology", "Data Science"]);
  const [newInterest, setNewInterest] = useState("");

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile changes have been saved successfully",
    });
  };

  const handleAddInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest));
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold mb-2">Your Profile</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="events">Saved Events</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src="https://i.pravatar.cc/150?img=68" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <h2 className="text-xl font-semibold mb-1">{name}</h2>
                      <p className="text-sm text-muted-foreground mb-4">{institution}</p>
                      <Button variant="outline" size="sm">Change Photo</Button>
                      
                      <div className="w-full border-t border-gray-200 mt-6 pt-6">
                        <h3 className="font-medium mb-2">Academic Interests</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {interests.map((interest, index) => (
                            <Badge key={index} variant="outline" className="flex gap-1 items-center">
                              {interest}
                              <button 
                                className="ml-1 text-gray-500 hover:text-red-500"
                                onClick={() => handleRemoveInterest(interest)}
                              >
                                ×
                              </button>
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input 
                            value={newInterest}
                            onChange={(e) => setNewInterest(e.target.value)}
                            placeholder="Add interest"
                            className="text-sm h-8"
                          />
                          <Button size="sm" onClick={handleAddInterest}>Add</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution/Organization</Label>
                        <Input 
                          id="institution" 
                          value={institution}
                          onChange={(e) => setInstitution(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="role">Academic Role</Label>
                        <Select defaultValue="student">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="faculty">Faculty Member</SelectItem>
                            <SelectItem value="professional">Industry Professional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          rows={4} 
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={handleSaveProfile} className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5]">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Saved Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg flex justify-between items-center hover:bg-gray-50">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="text-sm text-muted-foreground">
                          <p>{event.date} • {event.location}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Configure how and when you receive notifications about events and platform updates.</p>
                <div className="space-y-6">
                  {/* Notification settings will be implemented with Supabase */}
                  <p className="text-center text-muted-foreground italic">
                    Notification settings will be implemented with Supabase integration
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
                <div className="space-y-6">
                  {/* Account settings will be implemented with Supabase */}
                  <p className="text-center text-muted-foreground italic">
                    Account settings will be implemented with Supabase integration
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
