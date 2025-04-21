
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const subjectAreas = [
  {
    category: "Engineering & Technology",
    subjects: [
      "Computer Science", "Information Technology", "Mechanical Engineering",
      "Civil Engineering", "Electrical Engineering", "Electronics",
      "Chemical Engineering", "Biotechnology", "Aerospace Engineering"
    ]
  },
  {
    category: "Medical & Life Sciences",
    subjects: [
      "Medicine", "Pharmacy", "Nursing", "Dentistry", "Ayurveda",
      "Veterinary Science", "Microbiology", "Biochemistry", "Genetics"
    ]
  },
  {
    category: "Physical Sciences",
    subjects: [
      "Physics", "Chemistry", "Mathematics", "Statistics", "Astronomy",
      "Earth Sciences", "Materials Science", "Environmental Science"
    ]
  },
  {
    category: "Humanities & Arts",
    subjects: [
      "Literature", "History", "Philosophy", "Languages", "Fine Arts",
      "Music", "Theater", "Film Studies", "Cultural Studies"
    ]
  },
  {
    category: "Social Sciences",
    subjects: [
      "Economics", "Political Science", "Sociology", "Psychology", 
      "Anthropology", "Geography", "Education", "Law", "Public Policy"
    ]
  },
  {
    category: "Business & Management",
    subjects: [
      "Finance", "Marketing", "Human Resources", "Operations Management",
      "Entrepreneurship", "Strategic Management", "International Business", "E-commerce"
    ]
  },
  {
    category: "Agriculture & Allied Fields",
    subjects: [
      "Agricultural Sciences", "Horticulture", "Forestry", "Fisheries",
      "Food Technology", "Agricultural Engineering", "Animal Husbandry"
    ]
  },
];

const Subjects = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold mb-2">Academic Subject Areas</h1>
          <p className="text-muted-foreground">Browse events by academic disciplines and subject areas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {subjectAreas.map((area, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h2 className="font-playfair text-xl font-semibold mb-4 text-[#6E59A5]">
                  {area.category}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.subjects.map((subject, sIndex) => (
                    <Badge 
                      key={sIndex} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-[#9b87f5]/10"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 border-[#9b87f5] text-[#6E59A5] hover:bg-[#9b87f5]/10"
                >
                  Browse {area.category} Events
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Subjects;
