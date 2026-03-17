"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, Zap, Briefcase, DollarSign, Heart, Phone, Home, Star, MapPin, CheckCircle, Shield } from 'lucide-react';

export default function LandingPage() {
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
            { name: "Services", id: "#services" },
            { name: "Realtor Program", id: "#realtor" },
            { name: "Pricing", id: "#pricing" },
            { name: "Contact Us", id: "/contact-us" }
          ]}
          button={{ text: "Get a Quote", href: "#quote" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Home Cleaning for South New Jersey"
          description="Reclaim 10+ hours monthly while your South New Jersey home stays immaculate. Our residential cleaning services handle the work, so you have more time for what matters. No hassle, no contracts—just reliable, professional care."
          tag="Premium Cleaning Services"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Get Free Quote in 2 Minutes", href: "#quote" },
            { text: "Learn More", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/sweet-home_1098-16153.jpg?_wi=1", imageAlt: "Clean bright living room" },
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-house_53876-30618.jpg?_wi=1", imageAlt: "Professional residential cleaning" },
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?_wi=1", imageAlt: "Sparkling clean kitchen" },
            { imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-with-bottle-spray-cleanser-cleaning-oven-home-kitchen_231208-13610.jpg?_wi=1", imageAlt: "Deep professional cleaning service" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-house_53876-30618.jpg?_wi=2", imageAlt: "Move-out cleaning service" },
            { imageSrc: "http://img.b2bpic.net/free-photo/smiling-real-estate-agent-talking-with-couple-interested-buying-new-home_637285-6081.jpg?_wi=1", imageAlt: "Realtor program partnership" },
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?_wi=2", imageAlt: "Professional kitchen cleaning" },
            { imageSrc: "http://img.b2bpic.net/free-photo/sweet-home_1098-16153.jpg?_wi=2", imageAlt: "Immaculate living spaces" }
          ]}
          carouselPosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Magaly Reyes has been transforming homes and businesses across South New Jersey with professional cleaning expertise since 2015. We're committed to exceptional service, sustainable practices, and customer satisfaction."
          metrics={[
            { icon: Home, label: "Homes Cleaned", value: "2,500+" },
            { icon: Star, label: "Customer Rating", value: "4.9★" },
            { icon: MapPin, label: "Counties Served", value: "8" },
            { icon: CheckCircle, label: "Years Experience", value: "10+" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSeven
          title="Our Professional Services"
          description="Comprehensive cleaning solutions tailored to your home or business needs. From routine maintenance to specialized deep cleaning and move-out preparation."
          tag="What We Offer"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Residential Cleaning",              description: "Regular home cleaning tailored to your schedule. Weekly, bi-weekly, or monthly service options with experienced professionals who treat your home like their own.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-house_53876-30618.jpg?_wi=3",              imageAlt: "Residential cleaning service"
            },
            {
              id: 2,
              title: "Deep Cleaning",              description: "Thorough, detailed cleaning of every corner. Perfect for seasonal refreshes, post-renovation cleanup, or when your home needs professional restoration.",              imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-with-bottle-spray-cleanser-cleaning-oven-home-kitchen_231208-13610.jpg?_wi=2",              imageAlt: "Professional deep cleaning"
            },
            {
              id: 3,
              title: "Move-Out Cleaning",              description: "Complete end-of-lease cleaning that ensures you get your full security deposit back. We handle every detail with meticulous attention.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-house_53876-30618.jpg?_wi=4",              imageAlt: "Move-out cleaning specialist"
            }
          ]}
        />
      </div>

      <div id="realtor" data-section="realtor">
        <ProductCardOne
          title="Realtor Program"
          description="Special professional cleaning packages designed specifically for real estate professionals. Enhance property showings and prepare homes for sale with our premium service."
          tag="For Real Estate Professionals"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",              name: "Pre-Showing Refresh",              price: "Starting $199",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-real-estate-agent-talking-with-couple-interested-buying-new-home_637285-6081.jpg?_wi=2",              imageAlt: "Pre-showing home cleaning"
            },
            {
              id: "2",              name: "Full Staging Clean",              price: "Starting $399",              imageSrc: "http://img.b2bpic.net/free-photo/sweet-home_1098-16153.jpg?_wi=3",              imageAlt: "Full home staging cleaning"
            },
            {
              id: "3",              name: "Post-Close Turnover",              price: "Starting $299",              imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-house_53876-30618.jpg?_wi=5",              imageAlt: "Post-closing property cleaning"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardFive
          title="Transparent Pricing"
          description="Flexible Plans Starting at $150 — Pay Only for What You Need, No Contracts Required"
          tag="Affordable Excellence"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          plans={[
            {
              id: "basic",              tag: "Starter Package",              tagIcon: CheckCircle,
              price: "$150",              period: "/service",              description: "Perfect for small homes and reliable regular maintenance.",              button: { text: "Schedule Now", href: "#quote" },
              featuresTitle: "Included Services:",              features: [
                "Kitchen and bathroom cleaning",                "Bedroom and living area dusting",                "Floor vacuuming and mopping",                "Trash removal"
              ]
            },
            {
              id: "professional",              tag: "Professional Package",              tagIcon: CheckCircle,
              price: "$275",              period: "/service",              description: "Comprehensive cleaning for larger homes. Most Popular choice for complete home care.",              button: { text: "Schedule Now", href: "#quote" },
              featuresTitle: "Included Services:",              features: [
                "All Starter services included",                "Deep appliance cleaning",                "Window and mirror cleaning",                "Detailed baseboard cleaning",                "Laundry assistance"
              ]
            },
            {
              id: "premium",              tag: "Premium Deep Clean",              tagIcon: Shield,
              price: "$450",              period: "/service",              description: "Thorough deep cleaning and specialized services. Best Value for maximum results and peace of mind.",              button: { text: "Schedule Now", href: "#quote" },
              featuresTitle: "Included Services:",              features: [
                "All Professional services included",                "Carpet shampooing",                "Wall and light fixture cleaning",                "Garage or storage area cleaning",                "Post-construction cleanup",                "Spring/fall refresh service"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted by South Jersey Homeowners"
          description="Real feedback from satisfied customers who trust Magaly Reyes for their home cleaning needs."
          tag="Customer Testimonials"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              title: "Transformed My Home",              quote: "Magaly and her team completely transformed my home. The attention to detail is incredible—every corner is spotless. Highly professional and reliable.",              name: "Sarah Johnson",              role: "Homeowner, Camden County",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",              title: "Perfect for Property Showings",              quote: "As a realtor, I've worked with many cleaning companies. Magaly's team delivers exceptional results that make properties shine. My clients always notice the difference.",              name: "Michael Torres",              role: "Real Estate Agent, Burlington County",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-listening-senior-man_1262-1970.jpg",              imageAlt: "Michael Torres"
            },
            {
              id: "3",              title: "Dependable Service",              quote: "I've been using their monthly service for two years now. Consistent quality, professional team, and they always arrive on time. Couldn't ask for better.",              name: "Jennifer Martinez",              role: "Homeowner, Gloucester County",              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",              imageAlt: "Jennifer Martinez"
            },
            {
              id: "4",              title: "Outstanding Move-Out Clean",              quote: "They cleaned my apartment after I moved out. Got my full security deposit back thanks to their thorough work. Excellent service!",              name: "David Chen",              role: "Satisfied Customer, Atlantic County",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",              imageAlt: "David Chen"
            },
            {
              id: "5",              title: "Professional and Trustworthy",              quote: "I trust Magaly and her team completely. They're respectful of my home, professional in every interaction, and the results are always exceptional.",              name: "Lisa Anderson",              role: "Homeowner, Salem County",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-attractive-woman-showing-thumb-up-outdoors_1262-12526.jpg",              imageAlt: "Lisa Anderson"
            },
            {
              id: "6",              title: "Best Decision Ever",              quote: "Hiring them for regular cleaning was the best decision. More time with family, less stress, and a perfectly clean home. Highly recommended!",              name: "Robert Williams",              role: "Homeowner, Cumberland County",              imageSrc: "http://img.b2bpic.net/free-photo/happy-elegant-female-tourist-using-tablet_1262-19148.jpg",              imageAlt: "Robert Williams"
            }
          ]}
        />
      </div>

      <div id="quote" data-section="quote">
        <ContactCTA
          tag="Get Started Today"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Ready for a Spotless Home?"
          description="Free quote in under 2 minutes. Call now at (609) 123-4567 or get your quote online—no commitment required. Contact Magaly Reyes House Cleaning Services for your free quote. We serve all of South New Jersey and are committed to exceeding your expectations."
          buttons={[
            { text: "Request a Free Quote", href: "#quote" },
            { text: "Email Us", href: "mailto:reyeslopezmagalys@gmail.com" },
            { text: "Follow Us on Facebook", href: "https://www.facebook.com/profile.php?id=61587868057000" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ3abHj7nJoV9DleXcQnubKTBh/uploaded-1773327249368-z8f0w9f7.png?_wi=2"
          imageAlt="Magaly Reyes House Cleaning Services Logo"
          logoText="Magaly Reyes Cleaning"
          copyrightText="© 2025 Magaly Reyes House Cleaning Services. Proudly serving South New Jersey."
          columns={[
            {
              title: "Services",              items: [
                { label: "Residential Cleaning", href: "#services" },
                { label: "Deep Cleaning", href: "#services" },
                { label: "Move-Out Cleaning", href: "#services" },
                { label: "Realtor Program", href: "#realtor" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Pricing", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Get a Quote", href: "#quote" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone", href: "tel:+16091234567" },
                { label: "Email", href: "mailto:reyeslopezmagalys@gmail.com" },
                { label: "Service Area", href: "#about" },
                { label: "Book Now", href: "#quote" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
