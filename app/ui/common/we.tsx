export default async function We() {
    return (
        <>
            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FilterMart?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We've been the trusted partner for filter solutions with unmatched expertise and comprehensive inventory.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons text-3xl text-blue-700">inventory_2</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vast Inventory</h3>
                            <p className="text-gray-600">
                                Over 1.1 million cross-references covering thousands of products from leading manufacturers worldwide.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons text-3xl text-yellow-600">verified</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Guaranteed</h3>
                            <p className="text-gray-600">
                                All filters meet or exceed OEM specifications with rigorous quality control and testing processes.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons text-3xl text-green-600">support_agent</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Support</h3>
                            <p className="text-gray-600">
                                Dedicated technical support team ready to help you find the right filter for your specific needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-blue-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
                        <p className="text-xl text-blue-100">Numbers that speak to our commitment and expertise</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-yellow-400 mb-2">1.1M+</div>
                            <div className="text-lg text-blue-100">Cross References</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-yellow-400 mb-2">50+</div>
                            <div className="text-lg text-blue-100">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-yellow-400 mb-2">10K+</div>
                            <div className="text-lg text-blue-100">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-yellow-400 mb-2">99%</div>
                            <div className="text-lg text-blue-100">Order Accuracy</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Original Four Sections */}
            <section className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 py-16 px-8 text-center group hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="material-icons text-2xl text-blue-700">local_offer</span>
                    </div>
                    <h2 className="text-4xl font-bold text-blue-700 mb-2">Volume Discounts</h2>
                    <p className="text-gray-600 flex items-center justify-center mb-4">
                        Available Upon Request
                    </p>
                    <button className="text-blue-700 hover:text-blue-900 font-medium flex items-center mx-auto">
                        Learn More
                        <span className="material-icons ml-2">arrow_forward</span>
                    </button>
                </div>
                <div className="bg-blue-700 py-16 px-8 text-center text-white group hover:bg-blue-800 transition-colors cursor-pointer">
                    <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="material-icons text-2xl text-blue-700">star</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-2">Monthly Specials</h2>
                    <p className="text-blue-200 mb-4">Find Deals on Quality Filters</p>
                    <button className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center mx-auto">
                        View Specials
                        <span className="material-icons ml-2">arrow_forward</span>
                    </button>
                </div>
            </section>
            
            <section className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-yellow-400 py-16 px-8 text-center group hover:bg-yellow-500 transition-colors cursor-pointer">
                    <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="material-icons text-2xl text-white">business</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">Apply For A</p>
                    <h2 className="text-4xl font-bold text-blue-700 mb-4">Filter Distributorship</h2>
                    <button className="text-blue-700 hover:text-blue-900 font-medium flex items-center mx-auto">
                        Apply Now
                        <span className="material-icons ml-2">arrow_forward</span>
                    </button>
                </div>
                <div className="bg-gray-200 py-16 px-8 text-center group hover:bg-gray-300 transition-colors cursor-pointer">
                    <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="material-icons text-2xl text-white">description</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">Filter Literature</p>
                    <h2 className="text-4xl font-bold text-blue-700 mb-4">General Information</h2>
                    <button className="text-blue-700 hover:text-blue-900 font-medium flex items-center mx-auto">
                        Download Resources
                        <span className="material-icons ml-2">arrow_forward</span>
                    </button>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-yellow-400">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-blue-700 mb-4">Join Our Newsletter</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Register now to get latest updates on promotions & coupons. Don't worry, we not spam!
                    </p>
                    
                    <div className="max-w-md mx-auto">
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                            />
                            <button className="bg-blue-700 text-white px-6 py-3 rounded-r-lg hover:bg-blue-800 transition duration-300 font-semibold">
                                Send
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                            By subscribing you agree to our{' '}
                            <a href="#" className="text-blue-700 hover:underline">Terms & Conditions</a>
                            {' '}and{' '}
                            <a href="#" className="text-blue-700 hover:underline">Privacy & Cookies Policy</a>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}