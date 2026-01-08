import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail, Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, Clock } from 'lucide-react';

const NavigationLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate page load optimization
  const handlePageChange = (pageId) => {
    setIsLoading(true);
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate fast loading
    setTimeout(() => setIsLoading(false), 300);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const pageContent = {
    home: {
      title: 'Welcome to Our Professional Website',
      subtitle: 'Experience Excellence in Every Click',
      content: 'Discover a seamless digital experience crafted with cutting-edge technology and user-centric design. Our platform ensures fast performance, intuitive navigation, and a consistent brand experience across all devices.',
      features: [
        { title: 'Lightning Fast', description: 'Optimized for speed on all devices', icon: '⚡' },
        { title: 'Mobile Ready', description: 'Perfect experience on any screen', icon: '📱' },
        { title: 'Secure & Reliable', description: 'Your data is always protected', icon: '🔒' }
      ]
    },
    about: {
      title: 'About Our Company',
      subtitle: 'Building Digital Excellence Since Day One',
      content: 'We are a team of passionate professionals dedicated to creating exceptional web experiences. Our commitment to quality, innovation, and customer satisfaction drives everything we do. With years of expertise in web development and design, we transform ideas into powerful digital solutions.',
      features: [
        { title: 'Expert Team', description: 'Skilled professionals at your service', icon: '👥' },
        { title: 'Quality Focus', description: 'Excellence in every detail', icon: '⭐' },
        { title: 'Innovation', description: 'Cutting-edge solutions', icon: '💡' }
      ]
    },
    services: {
      title: 'Our Comprehensive Services',
      subtitle: 'Solutions Tailored to Your Needs',
      content: 'From responsive web design to performance optimization, we offer a complete suite of services to elevate your digital presence. Our solutions are designed to increase engagement, improve user experience, and drive measurable results for your business.',
      features: [
        { title: 'Web Development', description: 'Custom solutions built to scale', icon: '💻' },
        { title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces', icon: '🎨' },
        { title: 'Optimization', description: 'Maximum speed and performance', icon: '🚀' }
      ]
    },
    contact: {
      title: 'Get In Touch With Us',
      subtitle: "We'd Love to Hear From You",
      content: "Ready to start your next project? Have questions about our services? Our team is here to help you achieve your digital goals. Reach out today and let's create something amazing together.",
      features: [
        { title: '24/7 Support', description: 'Always here when you need us', icon: '🕐' },
        { title: 'Quick Response', description: 'Fast replies to your inquiries', icon: '⚡' },
        { title: 'Expert Guidance', description: 'Professional consultation', icon: '🎯' }
      ]
    }
  };

  const currentContent = pageContent[currentPage];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold">BRAND</h1>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      currentPage === item.id
                        ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg transform scale-105'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-3 pb-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                      currentPage === item.id
                        ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={22} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
      {/* Main Content Area */}
      <main className="flex-grow mt-20">
        {/* Loading Indicator */}
        {isLoading && (
          <div className="fixed top-20 left-0 right-0 h-1 bg-blue-100 z-40">
            <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 transform transition-all duration-300 hover:shadow-2xl">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {currentPage.toUpperCase()}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {currentContent.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-medium mb-4">
                  {currentContent.subtitle}
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 lg:mb-8">
                  {currentContent.content}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                    Get Started
                  </button>
                  <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                  Quick Navigation
                </h3>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handlePageChange(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          currentPage === item.id
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                            : 'text-blue-700 hover:bg-white hover:shadow-md'
                        }`}
                      >
                        → {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <Phone size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">123 Business St, City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Feature Grid System */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-12">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 text-white mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Impact in Numbers</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">500+</div>
                <div className="text-sm sm:text-base text-blue-100">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">1000+</div>
                <div className="text-sm sm:text-base text-blue-100">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">50+</div>
                <div className="text-sm sm:text-base text-blue-100">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">99%</div>
                <div className="text-sm sm:text-base text-blue-100">Satisfaction</div>
              </div>
            </div>
          </div>
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">John Doe</h4>
                  <p className="text-sm text-gray-600">CEO, Tech Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Outstanding service and exceptional results. The website loads incredibly fast and looks amazing on all devices!"</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SM
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Miller</h4>
                  <p className="text-sm text-gray-600">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Professional, responsive, and user-friendly. Our engagement has increased significantly since launch!"</p>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                <h3 className="text-xl font-bold">BRAND</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Delivering exceptional digital experiences with cutting-edge technology and innovative design solutions.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handlePageChange(item.id)}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      → {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal & Policies</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    → Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    → Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    → Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    → Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    → Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <Mail size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">info@company.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">123 Business Street<br />City, State 12345</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Mon - Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Your Company Name. All rights reserved. | Designed with ❤️ for excellence
              </p>
              <p className="text-gray-500 text-xs text-center sm:text-right">
                Built with React, Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NavigationLayout;
