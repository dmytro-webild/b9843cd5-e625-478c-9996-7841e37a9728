"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { CheckCircle, DollarSign, Headphones, Leaf, Percent, ShieldCheck, TrendingDown, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Benefits",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SolarHomePhil"
      button={{
        text: "Get Quote",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Power Your Home. Own Your Energy."
      description="Premium solar solutions designed for Filipino homes and businesses—efficient, sustainable, and built to last."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-person-planning-alternative-energies_23-2149205435.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/person-near-alternative-energy-plant_23-2149192727.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-office-working-environment-project_23-2148894113.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-person-planning-alternative-energies_23-2149205444.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-modern-family-retro-style_23-2150595602.jpg",
          alt: "Happy Family",
        },
      ]}
      avatarText="Join 50+ Happy Homeowners"
      buttons={[
        {
          text: "Get Free Quote",
          href: "#contact",
        },
        {
          text: "Book Consultation",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "Eco-Friendly",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "Lower Bills",
          icon: TrendingDown,
        },
        {
          type: "text-icon",
          text: "Long-Term Saving",
          icon: DollarSign,
        },
        {
          type: "text-icon",
          text: "Expert Support",
          icon: Headphones,
        },
        {
          type: "text-icon",
          text: "Fast Installation",
          icon: Zap,
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: CheckCircle,
          title: "Proven Solar Expertise",
          description: "Years of experience delivering reliable systems across the Philippines.",
        },
        {
          icon: ShieldCheck,
          title: "Durable Equipment",
          description: "High-quality, long-lasting components built for local climate.",
        },
        {
          icon: Percent,
          title: "Transparent Pricing",
          description: "Competitive rates with no hidden costs for your peace of mind.",
        },
        {
          icon: Users,
          title: "Professional Staff",
          description: "Expert team dedicated to your specific energy needs.",
        },
        {
          icon: Zap,
          title: "After-Sales Support",
          description: "Ongoing reliable support for your long-term investment.",
        },
      ]}
      title="Why Choose SolarHomePhil?"
      description="Providing expert solar integration for every Filipino home."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "s1",
          name: "Residential Systems",
          price: "Custom Pricing",
          variant: "Power your home efficiently.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-white-helmet-near-solar-panel_1157-29996.jpg",
        },
        {
          id: "s2",
          name: "Commercial Installations",
          price: "Custom Pricing",
          variant: "Scalable energy for businesses.",
          imageSrc: "http://img.b2bpic.net/free-photo/solar-power-power-station_1387-62.jpg",
        },
        {
          id: "s3",
          name: "Premium Supply",
          price: "Contact for Quote",
          variant: "Best panels and inverters.",
          imageSrc: "http://img.b2bpic.net/free-photo/photovoltaics-factory-team-evaluating-solar-cells-designs-improve-efficiency_482257-123388.jpg",
        },
      ]}
      title="Our Solar Solutions"
      description="Comprehensive energy systems designed to maximize efficiency and ROI."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Impact In Numbers"
      tag="Trusted Performance"
      metrics={[
        {
          id: "m1",
          value: "4.5+",
          description: "Verified Rating",
        },
        {
          id: "m2",
          value: "50+",
          description: "Happy Clients",
        },
        {
          id: "m3",
          value: "100%",
          description: "Quality Commitment",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Reyes",
          role: "Homeowner",
          company: "Taguig City",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-person-planning-alternative-energies_23-2149205433.jpg",
        },
        {
          id: "t2",
          name: "Mark Santos",
          role: "Business Owner",
          company: "Metro Manila",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/black-woman-inspector-explaining-new-photovoltaics-production_482257-126048.jpg",
        },
        {
          id: "t3",
          name: "Elena Cruz",
          role: "Homeowner",
          company: "Quezon City",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-relaxing-home_23-2149129087.jpg",
        },
        {
          id: "t4",
          name: "James Tan",
          role: "Manager",
          company: "Commercial Site",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/asian-women-working-hard-together-innovation_23-2148776737.jpg",
        },
        {
          id: "t5",
          name: "Maria Lopez",
          role: "Homeowner",
          company: "Taguig City",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-men-with-project_23-2148920576.jpg",
        },
      ]}
      title="Client Success Stories"
      description="Hear what our partners have to say about their solar experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How long is the installation process?",
          content: "Our expert team typically completes installations within 3-5 days after site assessment.",
        },
        {
          id: "q2",
          title: "Do you offer warranty?",
          content: "Yes, we provide industry-leading warranties on all our solar panels and inverters.",
        },
        {
          id: "q3",
          title: "Can solar help reduce my monthly bill?",
          content: "Absolutely. Most of our clients see significant reductions in monthly electricity costs within the first month.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get Started"
      title="Start Saving with Solar Today"
      description="Ready to own your energy? Contact us today for a free consultation at our Taguig office or call us directly."
      buttons={[
        {
          text: "Call Now: 0906 270 2344",
          href: "tel:09062702344",
        },
        {
          text: "Get Free Quote",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="SolarHomePhil"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
