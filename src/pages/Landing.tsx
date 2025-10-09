import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  FileText, 
  Sprout,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowRight,
  BarChart3,
  Megaphone,
  Building2,
  ClipboardCheck,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-serif tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-[#1A1A1A]">DERRYSEL</span>
              <br />
              <span className="text-[#D4AF37] text-sm">MANAGEMENT</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-12">
              {[
                { label: "HOME", id: "home" },
                { label: "SERVICES", id: "services" },
                { label: "ABOUT", id: "about" },
                { label: "CONTACT", id: "contact" }
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-medium tracking-widest text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
        {/* Enhanced Arabic geometric pattern - top left */}
        <div className="absolute top-20 left-0 w-96 h-96 opacity-15 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-hero-left" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M20 5 L20 35 M5 20 L35 20" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-hero-left)" />
          </svg>
        </div>

        {/* Enhanced Arabic geometric pattern - bottom right */}
        <div className="absolute bottom-20 right-0 w-96 h-96 opacity-15 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-hero-right" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-hero-right)" />
          </svg>
        </div>

        {/* Additional arabesque pattern - top right */}
        <div className="absolute top-40 right-20 w-64 h-64 opacity-10 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-hero-top-right" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25 0 Q35 10 25 25 Q15 35 0 25 Q10 15 25 0 Z" fill="none" stroke="currentColor" strokeWidth="0.4"/>
              <path d="M50 25 Q40 35 25 25 Q15 15 25 0 Q35 10 50 25 Z" fill="none" stroke="currentColor" strokeWidth="0.4"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-hero-top-right)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 relative z-10"
            >
              <h1
                className="text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-tight uppercase"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Luxury<br />
                Consultancy<br />
                Dubai
              </h1>
              
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] hover:from-[#E5C130] hover:to-[#C5A028] text-white px-10 py-6 text-sm tracking-widest cursor-pointer rounded-full uppercase font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Concept
              </Button>
            </motion.div>

            {/* Right Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 relative">
                {/* Top row - 2 images */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative h-64 bg-[#F5F5F5] rounded-sm overflow-hidden"
                >
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/732cc831-9363-4103-91f2-ae4573e559f3"
                    alt="Professional 1"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative h-64 bg-[#F5F5F5] rounded-sm overflow-hidden"
                >
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/732cc831-9363-4103-91f2-ae4573e559f3"
                    alt="Professional 2"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Golden wave divider */}
                <div className="col-span-2 relative h-12 -my-2">
                  <svg viewBox="0 0 400 50" className="w-full h-full" preserveAspectRatio="none">
                    <path
                      d="M0 25 Q100 10, 200 25 T400 25"
                      fill="none"
                      stroke="#CBA135"
                      strokeWidth="3"
                    />
                  </svg>
                </div>

                {/* Bottom row - 2 cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative bg-white border border-gray-200 rounded-sm p-6 shadow-sm"
                >
                  <h3 className="text-sm font-serif text-[#1A1A1A] mb-2 uppercase tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                    SESCT MONTS<br />DUBEN
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Comprehensive business solutions for growth and innovation.
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] hover:from-[#E5C130] hover:to-[#C5A028] text-white text-xs px-4 py-2 rounded-full cursor-pointer uppercase tracking-wide"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Explore
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative bg-white border border-gray-200 rounded-sm p-6 shadow-sm"
                >
                  <h3 className="text-sm font-serif text-[#1A1A1A] mb-2 uppercase tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                    SESUT MONTS<br />DUBLN
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Strategic consultancy for sustainable success.
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] hover:from-[#E5C130] hover:to-[#C5A028] text-white text-xs px-4 py-2 rounded-full cursor-pointer uppercase tracking-wide"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Contact
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#F5F5F5] relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl font-serif text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Expertise
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Comprehensive consultancy solutions designed to help your business grow, innovate, and thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Commercial Information Services",
                description: "Market intelligence, competitor benchmarking, and feasibility insights."
              },
              {
                title: "Marketing Management",
                description: "Strategic campaigns for brand positioning and customer engagement."
              },
              {
                title: "Management Consultancies",
                description: "Operational optimization and strategic business planning."
              },
              {
                title: "Feasibility Studies Consultancies",
                description: "Financial and market viability assessments for new ventures."
              },
              {
                title: "Agricultural Research and Consultancies",
                description: "Innovative agri-solutions and sustainability-focused research."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-3 uppercase tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Arabic geometric patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-services" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M0 15 L15 0 L30 15 L15 30 Z" fill="none" stroke="currentColor" strokeWidth="0.4"/>
              <path d="M7.5 15 L15 7.5 L22.5 15 L15 22.5 Z" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.4"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-services)" />
          </svg>
        </div>

        {/* Additional Islamic star pattern - bottom left */}
        <div className="absolute bottom-10 left-10 w-48 h-48 opacity-10 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-services-star" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 5 L23 17 L35 17 L25 24 L28 36 L20 29 L12 36 L15 24 L5 17 L17 17 Z" fill="none" stroke="currentColor" strokeWidth="0.4"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-services-star)" />
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        {/* Arabic calligraphy-inspired pattern - left side */}
        <div className="absolute top-20 left-0 w-72 h-72 opacity-10 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-about-left" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M10 25 Q15 15 25 15 Q35 15 40 25 Q35 35 25 35 Q15 35 10 25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-about-left)" />
          </svg>
        </div>

        {/* Moroccan tile pattern - right side */}
        <div className="absolute bottom-20 right-0 w-72 h-72 opacity-10 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-about-right" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L30 10 L20 20 L10 10 Z" fill="none" stroke="currentColor" strokeWidth="0.4"/>
              <path d="M0 20 L10 30 L20 20 L10 10 Z" fill="none" stroke="currentColor" strokeWidth="0.4"/>
              <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-about-right)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-5xl font-serif text-[#1A1A1A] mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Derrysel DMCC
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Derrysel DMCC is a trusted business consultancy and service provider under the Dubai Multi Commodities Centre (DMCC).
              </p>
              <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                We specialize in delivering customized commercial, strategic, and research-driven solutions that help clients navigate complex markets with confidence.
              </p>
              <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our expertise combines global insight, local market understanding, and a commitment to integrity and excellence.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/732cc831-9363-4103-91f2-ae4573e559f3"
                alt="Professional Office"
                className="w-full h-auto rounded-sm"
              />
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
          >
            <div className="bg-white p-8 rounded-sm">
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Mission Statement
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                To empower businesses with actionable intelligence, strategic clarity, and measurable growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm">
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Vision
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                To be the preferred consultancy partner for innovation-led, sustainable business success across industries.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#F5F5F5] relative overflow-hidden">
        {/* Islamic geometric border pattern - top */}
        <div className="absolute top-0 left-0 right-0 h-2 opacity-30 z-0">
          <svg viewBox="0 0 1200 20" className="w-full h-full" preserveAspectRatio="none">
            <pattern id="pattern-contact-border" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L30 0 L40 10" fill="none" stroke="#CBA135" strokeWidth="1.5"/>
              <path d="M0 10 L10 20 L20 10 L30 20 L40 10" fill="none" stroke="#CBA135" strokeWidth="1.5"/>
            </pattern>
            <rect width="1200" height="20" fill="url(#pattern-contact-border)" />
          </svg>
        </div>

        {/* Arabesque corner ornament - top left */}
        <div className="absolute top-10 left-10 w-40 h-40 opacity-15 z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#CBA135]">
            <path d="M50 10 Q60 20 50 30 Q40 40 30 30 Q20 20 30 10 Q40 0 50 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M50 30 Q55 35 50 40 Q45 45 40 40 Q35 35 40 30 Q45 25 50 30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
          </svg>
        </div>

        {/* Arabesque corner ornament - bottom right */}
        <div className="absolute bottom-10 right-10 w-40 h-40 opacity-15 z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#CBA135]">
            <path d="M50 90 Q60 80 50 70 Q40 60 30 70 Q20 80 30 90 Q40 100 50 90" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M50 70 Q55 65 50 60 Q45 55 40 60 Q35 65 40 70 Q45 75 50 70" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="70" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl font-serif text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h2>
            <p className="text-base text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Let's discuss how we can help your business thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-2 tracking-wide">
                    NAME
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-2 tracking-wide">
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-2 tracking-wide">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] hover:from-[#E5C130] hover:to-[#C5A028] text-white py-6 text-sm tracking-wide cursor-pointer"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  SEND MESSAGE
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A] tracking-wide mb-1">OFFICE ADDRESS</p>
                    <p className="text-sm text-gray-600">
                      Office 2104, Jumeirah Lakes Towers<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A] tracking-wide mb-1">PHONE</p>
                    <p className="text-sm text-gray-600">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A] tracking-wide mb-1">EMAIL</p>
                    <p className="text-sm text-gray-600">info@derrysell.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-xs font-medium text-[#1A1A1A] mb-4 tracking-wide">FOLLOW US</p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] hover:from-[#E5C130] hover:to-[#C5A028] flex items-center justify-center transition-colors cursor-pointer rounded-sm"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="mailto:info@derrysell.com"
                    className="w-10 h-10 bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] hover:from-[#E5C130] hover:to-[#C5A028] flex items-center justify-center transition-colors cursor-pointer rounded-sm"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center text-xs text-gray-600 tracking-wide">
            <p style={{ fontFamily: "'Poppins', sans-serif" }}>&copy; {new Date().getFullYear()} DERRYSEL DMCC. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}