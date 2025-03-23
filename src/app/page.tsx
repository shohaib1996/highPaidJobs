import ContactForm from "@/components/ContactForm/ContactForm";
import FAQSection from "@/components/FAQSection/FAQSection";
import Hero from "@/components/Hero/Hero";
import HighPay from "@/components/highPay/HighPay";
import CTASection from "@/components/home/cta-section";
import { SiteFooter } from "@/components/home/site-footer";
import SuccessStories from "@/components/home/SuccessStories/SuccessStories";
import NewPath from "@/components/NewPath/NewPath";
import RecentOffer from "@/components/offer/RecentOffer";
import PricingSection from "@/components/pricingSection/PricingSection";
import TicketToSuccess from "@/components/ticketToSuccess/TicketToSuccess";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>High Paid Jobs</title>
        <meta name="description" content="Join us for the best learning experience and high-paying career opportunities!" />
        
        {/* Open Graph Meta Tags (for social media preview) */}
        <meta property="og:title" content="High Paid Jobs" />
        <meta property="og:description" content="Join us for the best learning experience and high-paying career opportunities!" />
        <meta property="og:image" content="https://www.highpaidjobs.us/high-paid-jobs.png" />
        <meta property="og:url" content="https://www.highpaidjobs.us/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags (for Twitter preview) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="High Paid Jobs" />
        <meta name="twitter:description" content="Join us for the best learning experience and high-paying career opportunities!" />
        <meta name="twitter:image" content="https://www.highpaidjobs.us/high-paid-jobs.png" />
      </Head>

      <Hero />
      <TicketToSuccess />
      <HighPay />
      <NewPath />
      <SuccessStories />
      <WhyChooseUs />
      <PricingSection />
      <FAQSection />
      <RecentOffer />
      <ContactForm />
      <CTASection />
      <SiteFooter />
    </>
  );
}
