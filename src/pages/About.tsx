import { Link } from "react-router-dom"

const About = () => {
  const what = "Some code to be generated"

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-gray-700">
                We are dedicated to providing a platform that connects academics and researchers, facilitating the exchange of ideas and fostering collaboration across disciplines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
              <p className="text-gray-700">
                Founded in 2023, our platform was created to address the
                challenges faced by academics in finding relevant events and
                networking opportunities. We believe in the power of community
                and knowledge sharing to drive innovation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
              <p className="text-gray-700">
                Our diverse team consists of academics, developers, and
                designers who are passionate about creating tools that serve the
                academic community.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="border rounded p-4">
                  <h3 className="font-medium">Dr. Jane Smith</h3>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                </div>
                <div className="border rounded p-4">
                  <h3 className="font-medium">Prof. John Doe</h3>
                  <p className="text-sm text-gray-600">
                    Chief Academic Officer
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t">
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};