import { motion } from "framer-motion";
import { useRef } from "react";
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
  Leaf,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Section refs for smooth scrolling
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/01e4b1b7-a536-41e4-9744-6b6e343f54bc"
                alt="Derrysel DMCC Logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
              <div className="text-base sm:text-lg md:text-xl font-serif tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-[#1A1A1A]">DERRYSEL</span>
                <br />
                <span className="text-[#D4AF37] text-xs sm:text-sm">DMCC</span>
              </div>
            </motion.div>
            
            <div className="hidden md:flex space-x-12">
              {[
                { label: "HOME", id: "home" },
                { label: "SERVICES", id: "services" },
                { label: "CONTACT", id: "contact" }
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-medium tracking-widest text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  {[
                    { label: "HOME", id: "home" },
                    { label: "SERVICES", id: "services" },
                    { label: "CONTACT", id: "contact" }
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        scrollToSection(item.id);
                        // Close the sheet after navigation
                        document.querySelector('[data-slot="sheet-close"]')?.dispatchEvent(new Event('click', { bubbles: true }));
                      }}
                      className="text-left text-sm font-medium tracking-widest text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10 relative z-10"
            >
              <h1
                className="text-5xl lg:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                DERRYSEL DMCC
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
              >
                Cultivating Excellence Through Strategic Vision
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("services")}
                  className="bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] hover:from-[#E5C130] hover:to-[#C5A028] text-white px-12 py-7 text-sm tracking-widest cursor-pointer rounded-full uppercase font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Logo Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/3758d696-d7aa-4293-b003-d9ad9dc08b13"
                alt="Derrysel DMCC Logo"
                className="w-full max-w-md h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-32 bg-[#F5F5F5] relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
              Comprehensive consultancy solutions designed to help your business grow, innovate, and thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-0 bg-gradient-to-b from-[#F4D03F] to-[#D4AF37] group-hover:h-full transition-all duration-500 ease-out"></div>
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-32 bg-[#F5F5F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
              Let's discuss how we can help your business thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
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
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] hover:from-[#E5C130] hover:to-[#C5A028] text-white py-6 text-sm tracking-widest cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                  >
                    SEND MESSAGE
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A] tracking-wide mb-1">OFFICE ADDRESS</p>
                    <p className="text-sm text-gray-600">
                      Unit No: 262, DMCC Business Centre<br />
                      Level No. 5, Jewellery & Gemplex 2<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A] tracking-wide mb-1">PHONE</p>
                    <p className="text-sm text-gray-600">
                      +971 52 118 9998<br />
                      +971 4 432 7810
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A] tracking-wide mb-1">EMAIL</p>
                    <p className="text-sm text-gray-600">info@derrysel.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center text-xs text-gray-600 tracking-wide space-y-2">
            <p style={{ fontFamily: "'Poppins', sans-serif" }}>&copy; {new Date().getFullYear()} DERRYSEL DMCC. ALL RIGHTS RESERVED.</p>
            <p style={{ fontFamily: "'Poppins', sans-serif" }}>
              The Company is registered and licensed as a FREEZONE Company under the Rules & Regulations of DMCCA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}