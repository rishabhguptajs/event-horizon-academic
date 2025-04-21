
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold mb-2">About eventsphere</h1>
          <p className="text-muted-foreground">India's premier platform for academic events and networking</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-playfair text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4">
                  eventsphere is dedicated to connecting India's academic community through a comprehensive 
                  platform for discovering, organizing, and participating in scholarly events across the nation.
                </p>
                <p className="mb-4">
                  Founded in 2025, our mission is to bridge the gap between academic institutions, researchers, 
                  faculty members, and students by providing a centralized hub for all academic events in India.
                </p>
                <p className="mb-4">
                  We believe that knowledge sharing and collaborative learning are essential for advancing 
                  education and research in our country. By making academic events more accessible and visible, 
                  we aim to foster a culture of continuous learning and innovation.
                </p>
                
                <h2 className="font-playfair text-2xl font-semibold mb-4 mt-8">What We Offer</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive database of academic conferences, workshops, seminars, and symposia across India</li>
                  <li>Advanced search and filtering capabilities to find relevant events</li>
                  <li>Calendar and map views for intuitive event discovery</li>
                  <li>Personalized event recommendations based on academic interests</li>
                  <li>Networking opportunities with fellow academics and researchers</li>
                  <li>Platform for institutions to showcase their academic events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="font-playfair text-xl font-semibold mb-4">Our Team</h2>
                <p className="mb-4">
                  eventsphere is developed and maintained by a dedicated team of academics, 
                  developers, and designers passionate about improving India's academic landscape.
                </p>
                <p>
                  Our team members come from diverse academic backgrounds and institutions across India, 
                  bringing together expertise in education technology, event management, and digital platforms.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="font-playfair text-xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                  We welcome your feedback, suggestions, and inquiries. 
                  Please feel free to reach out to us:
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> info@eventsphere.in
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> Innovation Centre, Koramangala, Bangalore, India
                </p>
                <p>
                  <strong>Phone:</strong> +91 9876543210
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
