"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
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
          brandName="MRCS"
          navItems={[
            { name: "Services", id: "/#services" },
            { name: "Realtor Program", id: "/#realtor" },
            { name: "Pricing", id: "/#pricing" },
            { name: "About", id: "/#about" }
          ]}
          button={{ text: "Get a Quote", href: "/quote" }}
          animateOnLoad={true}
        />
      </div>

      {/* Contact Options */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto px-4 py-20">
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

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773342508316-ailc11lw.png"
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
                { label: "Service Area", href: "/#about" },
                { label: "Book Now", href: "/quote" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
