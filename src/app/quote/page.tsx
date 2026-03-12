"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    propertySize: '',
    preferredDate: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        propertySize: '',
        preferredDate: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumLargeSizeMediumTitles"
      background="noise"
      cardStyle="layered-gradient"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Magaly's Cleaning"
          navItems={[
            { name: "Services", id: "/" },
            { name: "Realtor Program", id: "/" },
            { name: "Pricing", id: "/" },
            { name: "About", id: "/" }
          ]}
          button={{ text: "Get a Quote", href: "/quote" }}
          animateOnLoad={true}
        />
      </div>

      <div id="quote-request" data-section="quote-request" className="min-h-screen py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
            <p className="text-lg text-foreground/70">Fill out the form below and we'll provide you with a customized cleaning quote within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-lg border border-foreground/10">
            {/* Contact Details Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary-cta focus:ring-2 focus:ring-primary-cta/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary-cta focus:ring-2 focus:ring-primary-cta/20"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(609) 123-4567"
                  className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary-cta focus:ring-2 focus:ring-primary-cta/20"
                />
              </div>
            </div>

            {/* Service Information Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">Service Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium mb-2">Service Type *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary-cta focus:ring-2 focus:ring-primary-cta/20 bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="moveout">Move-Out Cleaning</option>
                    <option value="realtor">Realtor Program</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="propertySize" className="block text-sm font-medium mb-2">Property Size *</label>
                  <select
                    id="propertySize"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary-cta focus:ring-2 focus:ring-primary-cta/20 bg-background"
                  >
                    <option value="">Select property size</option>
                    <option value="studio">Studio / 1 Bedroom</option>
                    <option value="2bed">2-3 Bedrooms</option>
                    <option value="4bed">4-5 Bedrooms</option>
                    <option value="6plus">6+ Bedrooms</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">Preferred Service Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary-cta focus:ring-2 focus:ring-primary-cta/20"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-primary-cta hover:bg-primary-cta/90 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                {submitted ? 'Quote Request Submitted!' : 'Request Your Free Quote'}
              </button>
              {submitted && (
                <p className="text-center text-green-600 mt-4 font-medium">Thank you! We'll contact you within 24 hours with your quote.</p>
              )}
            </div>
          </form>

          {/* Contact Options */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-foreground/10 text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:+16091234567" className="text-primary-cta hover:underline">(609) 123-4567</a>
            </div>
            <div className="bg-card rounded-lg p-6 border border-foreground/10 text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@magalysreyes.com" className="text-primary-cta hover:underline">info@magalysreyes.com</a>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1772602282380-eg5rebjr.png?_wi=2"
          imageAlt="Magaly Reyes House Cleaning Services Logo"
          logoText="Magaly Reyes Cleaning"
          copyrightText="© 2025 Magaly Reyes House Cleaning Services. Proudly serving South New Jersey."
          columns={[
            {
              title: "Services",              items: [
                { label: "Residential Cleaning", href: "/#services" },
                { label: "Deep Cleaning", href: "/#services" },
                { label: "Move-Out Cleaning", href: "/#services" },
                { label: "Realtor Program", href: "/#realtor" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "/#about" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Get a Quote", href: "/quote" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone", href: "tel:+16091234567" },
                { label: "Email", href: "mailto:info@magalysreyes.com" },
                { label: "Service Area", href: "/#" },
                { label: "Book Now", href: "/quote" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}