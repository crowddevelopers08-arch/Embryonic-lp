import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import VideoTestimonials from "@/components/VideoTestimonials";
import TreatmentsCarousel from "@/components/TreatmentsCarousel";
import ProcessTimeline from "@/components/ProcessTimeline";
import DoctorProfile from "@/components/DoctorProfile";
import AwardsCarousel from "@/components/AwardsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <StatsBar />
      <VideoTestimonials />
      <TreatmentsCarousel />
      <ProcessTimeline />
      <DoctorProfile />
      <AwardsCarousel />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  );
}
