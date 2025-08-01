'use client';

import type { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to an API endpoint
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact FilterMart</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to find the perfect filter solution? Our expert team is here to help. 
            Get in touch with us today for personalized assistance.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl text-blue-700">phone</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone</h3>
              <p className="text-gray-600 mb-2">Call us during business hours</p>
              <p className="text-2xl font-bold text-blue-700">1.800.487.7493</p>
              <p className="text-gray-600">Monday - Friday: 8am - 5pm CST</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl text-yellow-600">email</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-600 mb-2">Send us an email anytime</p>
              <p className="text-xl font-bold text-blue-700">filters@filtermart.com</p>
              <p className="text-gray-600">We respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl text-green-600">location_on</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
              <p className="text-gray-600 mb-2">Visit our headquarters</p>
              <p className="text-gray-700">
                123 Filter Avenue<br />
                Dallas, TX 75201<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="pricing-quote">Pricing & Quote Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your filter needs or ask any questions..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Support */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-yellow-400">8:00 AM - 5:00 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-yellow-400">9:00 AM - 2:00 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gray-300">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">Emergency Support</h3>
              <p className="text-blue-100 mb-4">
                Need urgent filter assistance outside business hours? Our emergency support line 
                is available 24/7 for critical situations.
              </p>
              <div className="flex items-center space-x-2">
                <span className="material-icons text-yellow-400">phone</span>
                <span className="text-xl font-bold text-yellow-400">1.800.FILTERS.911</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">How do I find the right filter for my equipment?</h4>
              <p className="text-gray-600">
                Use our comprehensive search feature on the homepage. You can search by OEM brand name, 
                part number, or our FMC part number. Our database contains over 1.1 million cross-references.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Do you offer volume discounts?</h4>
              <p className="text-gray-600">
                Yes! We offer competitive volume discounts for bulk orders. Contact our sales team 
                for a custom quote based on your specific requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">What is your return policy?</h4>
              <p className="text-gray-600">
                We offer a 30-day return policy on unused filters in original packaging. 
                Custom or special-order items may have different return terms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">How fast is shipping?</h4>
              <p className="text-gray-600">
                Most orders ship within 24-48 hours. Standard shipping takes 3-5 business days, 
                with expedited options available for urgent needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}