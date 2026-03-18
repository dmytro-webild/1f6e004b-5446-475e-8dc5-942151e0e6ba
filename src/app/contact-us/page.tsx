"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

export default function ContactUsPage() {
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
            { name: "Home", id: "/" },
            { name: "Services", id: "/#services" },
            { name: "Realtor Program", id: "/#realtor" },
            { name: "Pricing", id: "/#pricing" },
            { name: "Contact Us", id: "/contact-us" }
          ]}
          button={{ text: "Get a Quote", href: "/quote" }}
        />
      </div>

      <div id="contact" data-section="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-foreground/70">Have questions? We'd love to hear from you. Reach out to Magaly Reyes House Cleaning Services today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone Contact */}
            <div className="bg-card rounded-lg p-6 border border-foreground/10 text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <div className="space-y-2">
                <a href="tel:+18567776413" className="text-primary-cta hover:underline block font-medium">(856) 777-6413</a>
                <a href="tel:+13512447819" className="text-primary-cta hover:underline block font-medium">(351) 244-7819</a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-card rounded-lg p-6 border border-foreground/10 text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:reyeslopezmagalys@gmail.com" className="text-primary-cta hover:underline block break-all">
                reyeslopezmagalys@gmail.com
              </a>
            </div>

            {/* Service Area */}
            <div className="bg-card rounded-lg p-6 border border-foreground/10 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Service Area</h3>
              <p className="text-foreground/70">All of South New Jersey - 8 Counties</p>
            </div>

            {/* Facebook */}
            <div className="bg-card rounded-lg p-6 border border-foreground/10 text-center">
              <Facebook className="w-8 h-8 mx-auto mb-3 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <a href="https://www.facebook.com/profile.php?id=61587868057000" target="_blank" rel="noopener noreferrer" className="text-primary-cta hover:underline block">
                Visit Facebook Page
              </a>
            </div>
          </div>

          {/* Facebook Page Feed Section */}
          <div className="bg-card rounded-lg p-8 border border-foreground/10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Latest from Our Facebook</h2>
            <div className="flex justify-center items-center bg-background/50 rounded-lg p-8 min-h-96">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61587868057000&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" 
                width="500" 
                height="600" 
                style={{
                  border: 'none',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  maxWidth: '100%'
                }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>

          {/* Additional Contact Section */}
          <div className="bg-gradient-to-r from-primary-cta/10 to-accent/10 rounded-lg p-8 border border-primary-cta/20 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Fill out a quick form or give us a call for a free quote. We're available to serve all of South New Jersey and committed to exceeding your expectations with professional, reliable cleaning services.
            </p>
            <a href="/quote" className="inline-block bg-primary-cta text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-cta/90 transition duration-300">
              Request a Free Quote
            </a>
          </div>
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773327249368-z8f0w9f7.png?_wi=1"
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
                { label: "Email", href: "mailto:reyeslopezmagalys@gmail.com" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Book Now", href: "/quote" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}