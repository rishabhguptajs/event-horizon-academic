
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const API = () => {
  const handleAPIKeyGeneration = () => {
    toast({
      title: "API Integration",
      description: "API key generation will be implemented with Supabase",
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold mb-2">eventsphere API</h1>
          <p className="text-muted-foreground">Access our academic events data programmatically</p>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="font-playfair text-2xl font-semibold mb-4">API Overview</h2>
                  <p className="mb-4">
                    The eventsphere API provides programmatic access to our comprehensive database 
                    of academic events across India. Integrate our data into your applications, 
                    websites, or systems to enhance your academic services.
                  </p>
                  <p className="mb-6">
                    Our RESTful API allows you to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Query events by various parameters such as location, date, subject area, etc.</li>
                    <li>Retrieve detailed information about specific events</li>
                    <li>Access speaker and organizer information</li>
                    <li>Integrate calendar and mapping functionality</li>
                    <li>Submit new events programmatically (with appropriate authentication)</li>
                  </ul>
                  
                  <div className="flex gap-4">
                    <Button onClick={handleAPIKeyGeneration}>
                      Get API Key
                    </Button>
                    <Button variant="outline">
                      View Documentation
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">API Plans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 border rounded-md bg-white">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">Free Plan</h3>
                            <Badge>Current</Badge>
                          </div>
                          <ul className="text-sm space-y-1 mb-2">
                            <li>100 requests/day</li>
                            <li>Basic event data</li>
                            <li>Public events only</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 border rounded-md bg-white">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">Premium</h3>
                            <Badge variant="outline">Upgrade</Badge>
                          </div>
                          <ul className="text-sm space-y-1 mb-2">
                            <li>10,000 requests/day</li>
                            <li>Full event details</li>
                            <li>Advanced filtering</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 border rounded-md bg-white">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">Enterprise</h3>
                            <Badge variant="outline">Contact</Badge>
                          </div>
                          <ul className="text-sm space-y-1 mb-2">
                            <li>Unlimited requests</li>
                            <li>Custom integrations</li>
                            <li>Dedicated support</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="endpoints">
          <TabsList className="mb-4">
            <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
            <TabsTrigger value="examples">Code Examples</TabsTrigger>
            <TabsTrigger value="libraries">Client Libraries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="endpoints">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-4">Available Endpoints</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 px-2">GET</Badge>
                      <code className="text-sm font-mono">/api/v1/events</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Retrieve a list of events with optional filtering parameters
                    </p>
                    <Card className="bg-gray-50 border-gray-200">
                      <CardContent className="p-3 text-sm">
                        <pre className="whitespace-pre-wrap">
                          <code>
                            {`// Query parameters
location: string     // Filter by city or state
subject: string      // Filter by academic subject
start_date: date     // Events starting from this date
end_date: date       // Events ending by this date
type: string         // Filter by event type
page: number         // Pagination
limit: number        // Results per page`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 px-2">GET</Badge>
                      <code className="text-sm font-mono">/api/v1/events/{"{id}"}</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Get detailed information about a specific event
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800 px-2">POST</Badge>
                      <code className="text-sm font-mono">/api/v1/events</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Submit a new event (requires authentication)
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 px-2">GET</Badge>
                      <code className="text-sm font-mono">/api/v1/subjects</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      List all available academic subjects for filtering
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 px-2">GET</Badge>
                      <code className="text-sm font-mono">/api/v1/locations</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      List all available event locations for filtering
                    </p>
                  </div>
                </div>
                
                <p className="mt-6 text-sm text-muted-foreground">
                  For full documentation and detailed parameter information, 
                  please refer to our comprehensive API documentation.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="examples">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-4">Code Examples</h3>
                
                <Tabs defaultValue="javascript">
                  <TabsList className="mb-4">
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="javascript">
                    <Card className="bg-gray-50 border-gray-200">
                      <CardContent className="p-4">
                        <pre className="whitespace-pre-wrap text-sm font-mono">
                          <code>
                            {`// Fetch events from Delhi in the Computer Science field
const fetchEvents = async () => {
  const apiKey = 'your_api_key';
  const response = await fetch(
    'https://api.eventsphere.in/v1/events?location=Delhi&subject=Computer+Science',
    {
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  const data = await response.json();
  console.log(data);
};

fetchEvents();`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="python">
                    <Card className="bg-gray-50 border-gray-200">
                      <CardContent className="p-4">
                        <pre className="whitespace-pre-wrap text-sm font-mono">
                          <code>
                            {`# Fetch events from Delhi in the Computer Science field
import requests

api_key = 'your_api_key'
url = 'https://api.eventsphere.in/v1/events'
params = {
    'location': 'Delhi',
    'subject': 'Computer Science'
}

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

response = requests.get(url, params=params, headers=headers)
data = response.json()
print(data)`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="curl">
                    <Card className="bg-gray-50 border-gray-200">
                      <CardContent className="p-4">
                        <pre className="whitespace-pre-wrap text-sm font-mono">
                          <code>
                            {`# Fetch events from Delhi in the Computer Science field
curl -X GET \\
  'https://api.eventsphere.in/v1/events?location=Delhi&subject=Computer+Science' \\
  -H 'Authorization: Bearer your_api_key' \\
  -H 'Content-Type: application/json'`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
                
                <p className="mt-6 text-sm text-muted-foreground">
                  For more code examples, including libraries in other languages,
                  please refer to our GitHub repository or the API documentation.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="libraries">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-4">Client Libraries</h3>
                
                <p className="mb-6 text-muted-foreground">
                  We provide official client libraries to simplify API integration in various programming languages.
                </p>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">JavaScript/TypeScript SDK</h4>
                        <p className="text-sm text-muted-foreground">For Node.js and browser applications</p>
                      </div>
                      <Button variant="outline" size="sm">View on GitHub</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Python SDK</h4>
                        <p className="text-sm text-muted-foreground">For Python 3.6+ applications</p>
                      </div>
                      <Button variant="outline" size="sm">View on GitHub</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Java SDK</h4>
                        <p className="text-sm text-muted-foreground">For Java 8+ applications</p>
                      </div>
                      <Button variant="outline" size="sm">View on GitHub</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">PHP SDK</h4>
                        <p className="text-sm text-muted-foreground">For PHP 7.4+ applications</p>
                      </div>
                      <Button variant="outline" size="sm">View on GitHub</Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 bg-blue-50 p-4 rounded-md border border-blue-100">
                  <h4 className="font-medium text-blue-800 mb-2">Request a New SDK</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Don't see your preferred language? Let us know!
                  </p>
                  <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    Request SDK
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default API;
