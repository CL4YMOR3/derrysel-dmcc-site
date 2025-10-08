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
  ArrowRight
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
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-serif font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-[#1A1A1A]">Derrysell</span>
              <span className="text-[#CBA135]"> DMCC</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {["Home", "Services", "About", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[#CBA135] ${
                    isScrolled ? "text-[#1A1A1A]" : "text-white"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
              alt="Business professionals"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>

        {/* Golden geometric pattern - top right */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern)" />
          </svg>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Empowering Businesses to Succeed
            <span className="block text-[#CBA135] mt-2">with Insight and Integrity</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Trusted business consultancy registered under DMCC — delivering data-driven solutions for growth and innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-[#CBA135] hover:bg-[#B8912F] text-white px-8 py-6 text-lg font-medium rounded-lg transition-all transform hover:scale-105 cursor-pointer"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-[#CBA135] rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-[#CBA135] rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative">
        {/* Golden geometric pattern - bottom left */}
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern2)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive consultancy solutions designed to help your business grow, innovate, and thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Commercial Information Services",
                description: "Market intelligence, competitor benchmarking, and feasibility insights.",
                delay: 0
              },
              {
                icon: TrendingUp,
                title: "Marketing Management",
                description: "Strategic campaigns for brand positioning and customer engagement.",
                delay: 0.1
              },
              {
                icon: Users,
                title: "Management Consultancies",
                description: "Operational optimization and strategic business planning.",
                delay: 0.2
              },
              {
                icon: FileText,
                title: "Feasibility Studies Consultancies",
                description: "Financial and market viability assessments for new ventures.",
                delay: 0.3
              },
              {
                icon: Sprout,
                title: "Agricultural Research and Consultancies",
                description: "Innovative agri-solutions and sustainability-focused research.",
                delay: 0.4
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border border-gray-200 hover:border-[#CBA135] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-[#CBA135]/10 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-[#CBA135]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F7F7F7] relative">
        {/* Golden geometric pattern - top right */}
        <div className="absolute top-0 right-0 w-56 h-56 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern3" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern3)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Derrysell DMCC
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Derrysell DMCC is a trusted business consultancy and service provider under the Dubai Multi Commodities Centre (DMCC).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in delivering customized commercial, strategic, and research-driven solutions that help clients navigate complex markets with confidence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expertise combines global insight, local market understanding, and a commitment to integrity and excellence.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-300 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#CBA135] mb-2 tracking-tight">
                    Mission Statement
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower businesses with actionable intelligence, strategic clarity, and measurable growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#CBA135] mb-2 tracking-tight">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the preferred consultancy partner for innovation-led, sustainable business success across industries.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/732cc831-9363-4103-91f2-ae4573e559f3"
                  alt="Dubai Business Professional"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative">
        {/* Golden geometric pattern - bottom left */}
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern4" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern4)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Let's discuss how we can help your business thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
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
                  className="w-full bg-[#CBA135] hover:bg-[#B8912F] text-white py-6 text-lg font-medium cursor-pointer transition-all transform hover:scale-105"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
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
              <div className="bg-[#F7F7F7] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#CBA135]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#CBA135]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1A1A]">Office Address</p>
                      <p className="text-gray-600">
                        Office 2104, Jumeirah Lakes Towers<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#CBA135]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#CBA135]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1A1A]">Phone</p>
                      <p className="text-gray-600">+971 4 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#CBA135]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#CBA135]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1A1A]">Email</p>
                      <p className="text-gray-600">info@derrysell.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <p className="text-sm font-medium text-[#1A1A1A] mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#CBA135] hover:bg-[#B8912F] rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="mailto:info@derrysell.com"
                      className="w-10 h-10 bg-[#CBA135] hover:bg-[#B8912F] rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F7F7F7] py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Derrysell DMCC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}