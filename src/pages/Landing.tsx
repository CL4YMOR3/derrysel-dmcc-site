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
      {/* Minimal Navbar */}
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
              <span className="text-[#1A1A1A]">DERRYSELL</span>
              <br />
              <span className="text-[#CBA135] text-sm">MANAGEMENT</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-12">
              {["HOME", "MARKETPLACE", "INTERNALS"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xs font-medium tracking-widest text-[#1A1A1A] hover:text-[#CBA135] transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero / About Us Section - Split Screen */}
      <section id="home" className="relative min-h-screen flex items-center pt-24">
        {/* Golden geometric pattern - top right */}
        <div className="absolute top-24 right-0 w-64 h-64 opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-hero)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 relative z-10"
            >
              <h1
                className="text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About Us
              </h1>
              
              <div className="space-y-4 text-[#1A1A1A] leading-relaxed max-w-xl">
                <p className="text-sm">
                  Derrysell DMCC is a trusted business consultancy and service provider under the Dubai Multi Commodities Centre (DMCC). We specialize in delivering customized commercial, strategic, and research-driven solutions that help clients navigate complex markets with confidence.
                </p>
                <p className="text-sm">
                  Our expertise combines global insight, local market understanding, and a commitment to integrity and excellence.
                </p>
              </div>

              <Button
                onClick={() => scrollToSection("marketplace")}
                className="bg-[#CBA135] hover:bg-[#B8912F] text-white px-8 py-6 text-sm tracking-wide cursor-pointer"
              >
                READ MORE
              </Button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/732cc831-9363-4103-91f2-ae4573e559f3"
                  alt="Professional"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Golden geometric pattern - bottom left */}
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-hero-bottom" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-hero-bottom)" />
          </svg>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section id="marketplace" className="py-32 bg-[#F7F7F7] relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2
              className="text-5xl font-serif text-[#1A1A1A] mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mission Statement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">
                  Notre Mission
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To empower businesses with actionable intelligence, strategic clarity, and measurable growth. We deliver customized solutions that combine global insight with local market understanding.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">
                  Exclycorporée
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To be the preferred consultancy partner for innovation-led, sustainable business success across industries. We strive for excellence in every engagement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Inverted Split */}
      <section id="internals" className="relative min-h-screen flex items-center py-24 bg-white">
        {/* Golden geometric pattern - top right */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-services" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-services)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/732cc831-9363-4103-91f2-ae4573e559f3"
                  alt="Professional Services"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 relative z-10 order-1 lg:order-2"
            >
              <h2
                className="text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About Us
              </h2>
              
              <div className="space-y-4 text-[#1A1A1A] leading-relaxed max-w-xl">
                <p className="text-sm">
                  Derrysell DMCC delivers comprehensive consultancy solutions designed to help your business grow, innovate, and thrive. Our expertise spans commercial information services, marketing management, strategic planning, and specialized research.
                </p>
                <p className="text-sm">
                  We combine data-driven insights with practical implementation strategies to ensure measurable results for our clients across diverse industries.
                </p>
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#CBA135] hover:bg-[#B8912F] text-white px-8 py-6 text-sm tracking-wide cursor-pointer"
              >
                READ MORE
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Golden geometric pattern - bottom left */}
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#CBA135]">
            <pattern id="pattern-services-bottom" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
            <rect width="200" height="200" fill="url(#pattern-services-bottom)" />
          </svg>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#F7F7F7] relative">
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
              Team Toall
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Derrysell Derrysell", role: "Managing Director" },
              { name: "Derrysell Derrysell", role: "Senior Partner" },
              { name: "Derrysell Derrysell", role: "Consultant Lead" },
              { name: "Derrysell Derrysell", role: "Research Director" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gray-200 aspect-square mb-4 rounded-sm overflow-hidden">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/732cc831-9363-4103-91f2-ae4573e559f3"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-[#1A1A1A]">{member.name}</h3>
                <p className="text-xs text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white relative">
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
            <p className="text-sm text-gray-600">
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
                  className="w-full bg-[#CBA135] hover:bg-[#B8912F] text-white py-6 text-sm tracking-wide cursor-pointer"
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
                  <MapPin className="w-5 h-5 text-[#CBA135] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A] tracking-wide mb-1">OFFICE ADDRESS</p>
                    <p className="text-sm text-gray-600">
                      Office 2104, Jumeirah Lakes Towers<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#CBA135] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A] tracking-wide mb-1">PHONE</p>
                    <p className="text-sm text-gray-600">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#CBA135] flex-shrink-0 mt-1" />
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
                    className="w-10 h-10 bg-[#CBA135] hover:bg-[#B8912F] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="mailto:info@derrysell.com"
                    className="w-10 h-10 bg-[#CBA135] hover:bg-[#B8912F] flex items-center justify-center transition-colors cursor-pointer"
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
      <footer className="bg-[#F7F7F7] py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center text-xs text-gray-600 tracking-wide">
            <p>&copy; {new Date().getFullYear()} DERRYSELL DMCC. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}