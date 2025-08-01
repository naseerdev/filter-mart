import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filter Products - Industrial, Residential & Commercial | FilterMart",
  description: "Browse our comprehensive selection of filters for industrial, residential, and commercial applications. Quality filters from trusted manufacturers.",
};

// Server-side component to fetch product data
async function getProductCategories() {
  // This would typically fetch from a database or API
  // For now, we'll return static data
  return [
    {
      id: 1,
      name: "Industrial Filters",
      description: "Heavy-duty filters for industrial applications, machinery, and equipment.",
      image: "industrial",
      productCount: 15420,
      subcategories: ["Air Filters", "Oil Filters", "Hydraulic Filters", "Fuel Filters"]
    },
    {
      id: 2,
      name: "Residential Filters",
      description: "Home filtration solutions for HVAC systems, air purifiers, and water filtration.",
      image: "residential",
      productCount: 8750,
      subcategories: ["HVAC Filters", "Water Filters", "Air Purifier Filters", "Furnace Filters"]
    },
    {
      id: 3,
      name: "Commercial Filters",
      description: "Professional-grade filters for office buildings, retail spaces, and commercial facilities.",
      image: "commercial",
      productCount: 12340,
      subcategories: ["Building HVAC", "Restaurant Equipment", "Medical Facility", "Retail Space"]
    },
    {
      id: 4,
      name: "Automotive Filters",
      description: "Comprehensive range of automotive filters for cars, trucks, and heavy vehicles.",
      image: "automotive",
      productCount: 25600,
      subcategories: ["Engine Air Filters", "Cabin Air Filters", "Oil Filters", "Fuel Filters"]
    },
    {
      id: 5,
      name: "Pool & Spa Filters",
      description: "Keep your pool and spa water clean with our premium filtration products.",
      image: "pool",
      productCount: 3200,
      subcategories: ["Pool Cartridges", "Spa Filters", "Sand Filters", "DE Filters"]
    },
    {
      id: 6,
      name: "Specialty Filters",
      description: "Custom and specialty filters for unique applications and specific requirements.",
      image: "specialty",
      productCount: 5890,
      subcategories: ["Custom Filters", "High-Temperature", "Chemical Resistant", "Food Grade"]
    }
  ];
}

export default async function ProductsPage() {
  const categories = await getProductCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Filter Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality filters for every application. 
            With over 1.1 million cross-references, we have the right filter for your needs.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Find Your Filter Fast</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search by brand name..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800">
                    <span className="material-icons">search</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search by part number..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800">
                    <span className="material-icons">search</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search by FMC number..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800">
                    <span className="material-icons">search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">Browse our extensive range of filter solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-600 h-48 flex items-center justify-center">
                  <span className="material-icons text-white text-6xl">filter_alt</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-700">
                      {category.productCount.toLocaleString()} Products Available
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Subcategories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.map((sub, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
                    Browse {category.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Filters?</h2>
            <p className="text-xl text-gray-600">Quality and performance you can trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-2xl text-blue-700">verified</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">OEM Quality</h3>
              <p className="text-gray-600 text-sm">Meets or exceeds original equipment specifications</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-2xl text-green-600">eco</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">Environmentally responsible materials and processes</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-2xl text-yellow-600">speed</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">Quick delivery to keep your operations running</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-2xl text-purple-600">support_agent</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Technical assistance from filtration specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">1.1M+</div>
              <div className="text-blue-100">Cross References</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
              <div className="text-blue-100">Filter SKUs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-100">Brands Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-blue-100">Availability Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Need Help Finding the Right Filter?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Our filtration experts are here to help you find the perfect filter for your specific application. 
            Contact us for personalized recommendations and technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
              Contact Our Experts
            </button>
            <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}