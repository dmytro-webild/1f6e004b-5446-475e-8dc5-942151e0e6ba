"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ContactUsPage() {
  const [fbSDKLoaded, setFbSDKLoaded] = useState(false);

  useEffect(() => {
    // Load Facebook SDK
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = function() {
        FB.init({
          appId: 'YOUR_APP_ID',
          xfbml: true,
          version: 'v18.0'
        });
        FB.XFBML.parse();
        setFbSDKLoaded(true);
      };
    }

    // Load Facebook SDK script
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=YOUR_APP_ID';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    } else {
      setFbSDKLoaded(true);
    }

    // Set up interval to refresh Facebook feed
    const refreshInterval = setInterval(() => {
      if (window.FB) {
        FB.XFBML.parse();
      }
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(refreshInterval);
  }, []);

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
            <div className="flex justify-center items-start bg-background/50 rounded-lg p-8 min-h-screen" id="facebook-feed" data-section="facebook-feed">
              <div 
                className="fb-page" 
                data-href="https://www.facebook.com/profile.php?id=61587868057000" 
                data-tabs="timeline" 
                data-width="100%" 
                data-height="800"
                data-small-header="false" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true"
              />
            </div>
            <p className="text-center text-sm text-foreground/60 mt-4">Facebook feed automatically updates with new posts from our page</p>
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
                { label: "Phone", href: "tel:+18567776413" },
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