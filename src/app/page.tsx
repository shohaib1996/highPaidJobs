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


export default function Home() {
  return (
    <>
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
