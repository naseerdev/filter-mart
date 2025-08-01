import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FilterMart - Your Trusted Filter Solutions Partner",
  description: "Learn about FilterMart's history, mission, and commitment to providing quality filter solutions for over 50 years.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About FilterMart</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            For over five decades, we've been the industry leader in filter solutions, 
            providing unmatched quality and service to customers worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1973, FilterMart has grown from a small filter distributor to become 
                the industry's most comprehensive source for filtration products. Our commitment 
                to quality, innovation, and customer service has made us the preferred partner 
                for businesses across various industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we maintain over 1.1 million cross-references covering thousands of products 
                from leading manufacturers worldwide. Our state-of-the-art facilities and experienced 
                team ensure that we can meet any filtration challenge with precision and reliability.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">50+</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">1.1M+</div>
                  <div className="text-sm text-gray-600">Product Cross-References</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">10K+</div>
                  <div className="text-sm text-gray-600">Satisfied Customers</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="bg-blue-700 w-full h-64 rounded-lg flex items-center justify-center">
                <span className="material-icons text-white text-6xl">business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-2xl text-blue-700">track_changes</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide superior filtration solutions that exceed customer expectations through 
                innovative products, exceptional service, and unwavering commitment to quality. 
                We strive to be the most trusted partner in the filtration industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-2xl text-yellow-600">visibility</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in filtration technology, continuously advancing industry 
                standards while maintaining our core values of integrity, innovation, and customer 
                satisfaction. We envision a world where clean air and water are accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl text-blue-700">verified</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product meets or exceeds industry standards 
                through rigorous testing and quality control processes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl text-green-600">handshake</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen, understand, and 
                deliver solutions that exceed expectations every time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl text-yellow-600">lightbulb</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in research and development to bring cutting-edge 
                filtration technologies to market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Our experienced leadership team brings decades of industry expertise and a passion for excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-3xl text-blue-700">person</span>
              </div>
              <h3 className="text-xl font-bold mb-2">John Anderson</h3>
              <p className="text-blue-200 mb-4">Chief Executive Officer</p>
              <p className="text-blue-100 text-sm">
                25+ years of industry experience leading FilterMart's strategic vision and growth.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-3xl text-blue-700">person</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Mitchell</h3>
              <p className="text-blue-200 mb-4">Chief Technology Officer</p>
              <p className="text-blue-100 text-sm">
                Expert in filtration technology with 20+ years developing innovative solutions.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-3xl text-blue-700">person</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mike Rodriguez</h3>
              <p className="text-blue-200 mb-4">Vice President of Operations</p>
              <p className="text-blue-100 text-sm">
                Operations expert ensuring efficient delivery and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the FilterMart difference. Contact us today to discuss your filtration needs 
            and discover why thousands of customers trust us for their filter solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
              Contact Us Today
            </button>
            <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition duration-300">
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}