import React, { useState, useEffect } from 'react';
import './App.css';
import ServiceCard from './components/ServiceCard';
import ContactForm, { ContactFormData } from './components/ContactForm';
import { initGA, trackPageView, trackButtonClick, trackEvent } from './config/analytics';

// Import local images
import roughStoneImage from './assets/images/Rough Stone.jpeg';
import mSandImage from './assets/images/M Sand.jpeg';
import pSandImage from './assets/images/P Sand.jpeg';
import jalliImage from './assets/images/Jalli.jpeg';
import riverSandImage from './assets/images/River Sand.jpg';
import gravelImage from './assets/images/Gravel.jpeg';
import redSoilImage from './assets/images/Red Soil.jpeg';
import bricksImage from './assets/images/Bricks.jpeg';
import jcbImage from './assets/images/JCB.jpeg';
import hitachiImage from './assets/images/Hitachi Excavator.jpeg';
import craneImage from './assets/images/Crane.jpeg';
import agriculturalMachineryImage from './assets/images/Agricultural Machinery.jpeg';

// Service data structure
interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
  price?: string;
}

const services: Service[] = [
  // Construction Materials
  {
    id: 'bricks',
    name: 'Bricks (Own Chamber)',
    category: 'Construction Materials',
    description: 'High-quality bricks manufactured in our own chamber',
    icon: '🧱',
    features: ['Own manufacturing', 'Quality control', 'Bulk supply'],
    image: bricksImage,
    price: '₹8/unit'
  },
  {
    id: 'rough-stone',
    name: 'Rough Stone',
    category: 'Construction Materials',
    description: 'High-quality rough stones for construction and landscaping projects',
    icon: '🪨',
    features: ['Various sizes available', 'Quality assured', 'Bulk supply'],
    image: roughStoneImage,
    price: '₹2,500/ton'
  },
  {
    id: 'm-sand',
    name: 'M Sand',
    category: 'Construction Materials',
    description: 'Manufactured sand for concrete and construction work',
    icon: '🏗️',
    features: ['Fine quality', 'Consistent grading', 'Ready for use'],
    image: mSandImage,
    price: '₹1,800/ton'
  },
  {
    id: 'p-sand',
    name: 'P Sand',
    category: 'Construction Materials',
    description: 'Plastering sand for smooth finish and wall applications',
    icon: '🧱',
    features: ['Smooth finish', 'Perfect for plastering', 'Clean quality'],
    image: pSandImage,
    price: '₹2,200/ton'
  },
  {
    id: 'jalli',
    name: 'Jalli (All Sizes)',
    category: 'Construction Materials',
    description: 'Decorative jalli stones in various sizes for architectural use',
    icon: '🎨',
    features: ['Multiple sizes', 'Decorative options', 'Architectural grade'],
    image: jalliImage,
    price: '₹3,500/ton'
  },
  {
    id: 'river-sand',
    name: 'River Sand',
    category: 'Construction Materials',
    description: 'Natural river sand for construction and concrete work',
    icon: '🌊',
    features: ['Natural quality', 'Washed clean', 'Construction ready'],
    image: riverSandImage,
    price: '₹2,800/ton'
  },
  {
    id: 'gravel',
    name: 'Gravel',
    category: 'Construction Materials',
    description: 'Various sizes of gravel for construction and road work',
    icon: '🪨',
    features: ['Multiple sizes', 'Road construction', 'Drainage use'],
    image: gravelImage,
    price: '₹1,500/ton'
  },
  {
    id: 'red-soil',
    name: 'Red Soil',
    category: 'Construction Materials',
    description: 'Quality red soil for landscaping and construction',
    icon: '🌱',
    features: ['Landscaping', 'Garden use', 'Construction fill'],
    image: redSoilImage,
    price: '₹800/ton'
  },
  
  // Heavy Machinery
  {
    id: 'jcb',
    name: 'JCB',
    category: 'Heavy Machinery',
    description: 'JCB excavators for digging, loading, and construction work',
    icon: '🚜',
    features: ['Excavation', 'Loading', 'Versatile use'],
    image: jcbImage,
    price: '₹2,500/hour'
  },
  {
    id: 'hitachi',
    name: 'Hitachi Excavator',
    category: 'Heavy Machinery',
    description: 'Hitachi excavators for heavy construction and mining work',
    icon: '⛏️',
    features: ['Heavy duty', 'Mining capable', 'High performance'],
    image: hitachiImage,
    price: '₹3,200/hour'
  },
  {
    id: 'crane',
    name: 'Crane',
    category: 'Heavy Machinery',
    description: 'Mobile and tower cranes for lifting and construction work',
    icon: '🏗️',
    features: ['Heavy lifting', 'Construction', 'Industrial use'],
    image: craneImage,
    price: '₹4,500/hour'
  },
  {
    id: 'agricultural-machinery',
    name: 'Agricultural Machinery',
    category: 'Heavy Machinery',
    description: 'Agricultural and construction tractors for various applications',
    icon: '🚜',
    features: ['Agriculture', 'Construction', 'Transport'],
    image: agriculturalMachineryImage,
    
  }
];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Initialize Google Analytics
    initGA();
    
    // Track initial page view
    trackPageView(window.location.pathname);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const categories = ['all', ...Array.from(new Set(services.map(service => service.category)))];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleGetQuote = (serviceId: string) => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUsClick = () => {
    trackButtonClick('Contact Us');
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewServicesClick = () => {
    trackButtonClick('View Services');
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (formData: ContactFormData) => {
    console.log('Contact form submitted:', formData);
    // Track form submission
    trackEvent('Form', 'Submit', 'Contact Form', 1);
    // Removed alert - the success modal will handle the notification
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-300">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg border-b border-neutral-200 dark:border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">V</span>
              </div>
              <div className="flex flex-col sm:flex-row leading-tight">
                <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Sri Velmurugan Transport
                </span>
                <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent sm:ml-1">
                  and Earthmovers
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <button
                onClick={handleContactUsClick}
                className="px-2 sm:px-6 py-2 bg-gradient-to-r from-primary-700 to-secondary-900 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow text-xs sm:text-base"
              >
                <span className="hidden sm:inline">Contact Us</span>
                <span className="sm:hidden">Contact</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced UI */}
      <section className="relative min-h-screen py-8 px-2 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Construction Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f2761a' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Machinery Icons with Enhanced Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 text-8xl opacity-20 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}>🚜</div>
          <div className="absolute top-40 right-32 text-6xl opacity-20 animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}>🏗️</div>
          <div className="absolute bottom-40 left-32 text-5xl opacity-20 animate-float" style={{ animationDelay: '4s', animationDuration: '7s' }}>🚛</div>
          <div className="absolute bottom-20 right-20 text-6xl opacity-20 animate-float" style={{ animationDelay: '6s', animationDuration: '9s' }}>⚒️</div>
          <div className="absolute top-1/3 right-1/4 text-4xl opacity-15 animate-float" style={{ animationDelay: '3s', animationDuration: '10s' }}>🔧</div>
          <div className="absolute bottom-1/3 left-1/4 text-5xl opacity-15 animate-float" style={{ animationDelay: '5s', animationDuration: '11s' }}>🏭</div>
        </div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/20 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent-500/20 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-success-500/20 to-transparent animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        </div>
        
                {/* Main Content - Clean & Organized */}
        <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
            {/* Left Side - Clean Content */}
            <div className="text-center lg:text-left animate-fade-in space-y-4 sm:space-y-6">
              {/* Clean Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary-700/20 backdrop-blur-md rounded-full gap-2 animate-slide-down border border-primary-700/30">
                <span className="text-base sm:text-lg">🏆</span>
                <span className="text-primary-300 text-xs sm:text-sm font-medium">Industry Leader Since 2010</span>
              </div>
              
              {/* Clean Headline */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-primary-700 via-white to-secondary-900 bg-clip-text text-transparent animate-gradient-x">
                    Build Your Dreams
                  </span>
                  <br className="sm:hidden" />
                  <span className="bg-gradient-to-r from-primary-700 via-white to-secondary-900 bg-clip-text text-transparent animate-gradient-x"> With Our Machinery</span>
                </h1>
              </div>
              
              {/* Clean Description */}
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                From construction materials to heavy machinery, we provide everything you need to bring your projects to life. 
                <span className="text-primary-700 font-semibold"> Quality, reliability, and professional service guaranteed.</span>
              </p>
                
                {/* Clean Service Highlights */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 bg-primary-700 rounded-full animate-pulse"></div>
                  <span className="text-neutral-200 text-xs font-medium">Materials</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 bg-secondary-900 rounded-full animate-pulse"></div>
                  <span className="text-neutral-200 text-xs font-medium">Machinery</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                  <span className="text-neutral-200 text-xs font-medium">Service</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-neutral-200 text-xs font-medium">24/7</span>
                </div>
              </div>
              
              {/* Clean CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button 
                  onClick={handleContactUsClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-700 to-secondary-900 hover:from-primary-700 hover:to-secondary-700 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">Get Free Quote</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button 
                  onClick={handleViewServicesClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-700/30 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-primary-700/10 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">View Services</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Right Side - Clean Stats */}
            <div className="text-center lg:text-right animate-slide-up space-y-4 sm:space-y-6">
              {/* Clean Trust Badge */}
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 animate-bounce">⭐</div>
                <div className="text-white font-bold text-lg sm:text-xl mb-1">Trusted by 100+ Clients</div>
                <div className="text-neutral-400 text-xs sm:text-sm">Across the Region</div>
              </div>
              
              {/* Clean Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-primary-700 mb-1">100+</div>
                  <div className="text-neutral-300 text-xs sm:text-sm font-medium">Happy Clients</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-secondary-900 mb-1">20+</div>
                  <div className="text-neutral-300 text-xs sm:text-sm font-medium">Machinery Types</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-accent-400 mb-1">24/7</div>
                  <div className="text-neutral-300 text-xs sm:text-sm font-medium">Support Available</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-success-400 mb-1">100%</div>
                  <div className="text-neutral-300 text-xs sm:text-sm font-medium">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-700 to-secondary-900 text-white shadow-lg shadow-glow'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-gradient-to-r hover:from-primary-700/20 hover:to-secondary-900/20 dark:hover:from-primary-700/20 dark:hover:to-secondary-900/20'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category === 'all' ? 'All Services' : category}
            </button>
          ))}
        </div>
      </section>

      {/* Service Cards Grid */}
      <section id="services-section" className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-fade-in">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-sm sm:max-w-none mx-auto sm:mx-0">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard 
                service={service} 
                onGetQuote={handleGetQuote}
              />
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 sm:py-20 px-4 max-w-4xl mx-auto">
        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-neutral-200 dark:border-neutral-700 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="text-center space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Sri Velmurugan Transport is your trusted partner for all construction and agricultural needs. 
              We provide high-quality materials and reliable machinery rental services across the region.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              With years of experience in the industry, we ensure timely delivery, quality products, 
              and professional service for all your project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-fade-in">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: '🚚', title: 'Timely Delivery', desc: 'We ensure on-time delivery of all materials and machinery' },
            { icon: '⭐', title: 'Quality Assured', desc: 'All our products meet the highest quality standards' },
            { icon: '💰', title: 'Competitive Pricing', desc: 'Best prices in the market with no hidden costs' },
            { icon: '🛠️', title: 'Expert Support', desc: 'Professional guidance and support for your projects' }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 animate-float">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary-600 dark:text-primary-400">{item.title}</h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Happy Clients Section */}
      {/* <section className="py-12 sm:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-fade-in">
          Trusted by Great Companies
        </h2>
        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-neutral-200 dark:border-neutral-700">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center">
            {[
              { name: 'SUN ELECTRONICS & FURNITURES', logo: '🏢' },
              { name: 'Smart dropZ', logo: '🔥' },
              { name: 'SKS', logo: '🌿' },
              { name: 'S.J.ASSOCIATES', logo: '🏗️' },
              { name: 'Shuttert OF VIMA', logo: '🏠' },
              { name: 'Timbers', logo: '🪵' },
              { name: 'ENSTEIN', logo: '⚡' },
              { name: 'ELLVIN KANTO', logo: '🏢' },
              { name: 'Dwarka GARDENS', logo: '🌱' },
              { name: 'd6 ARCHITECTS', logo: '🏛️' }
            ].map((client, index) => (
              <div 
                key={index}
                className="text-center p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900/20 dark:hover:to-secondary-900/20 transition-all duration-300 transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 animate-float">{client.logo}</div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm">{client.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact-section" className="py-12 sm:py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-fade-in">
          Contact Us
        </h2>
        <ContactForm 
          services={services} 
          onSubmit={handleContactSubmit}
        />
      </section>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50">
        <a 
          href="https://wa.me/+919788303040" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-success-500 to-success-600 hover:from-success-600 hover:to-success-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float"
          title="WhatsApp"
        >
          <span className="text-xl sm:text-2xl">💬</span>
        </a>
        <a 
          href="tel:+919788303040" 
          className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float"
          title="Call Us"
          style={{ animationDelay: '1s' }}
        >
          <span className="text-white text-xl filter brightness-0 invert">📞</span>
        </a>

      </div>

      {/* Copyright Footer */}
      <footer className="py-6 sm:py-8 px-4 bg-gradient-to-r from-primary-700 to-secondary-900 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0">
            <span className="text-white text-sm sm:text-base text-center">
              © 2025 Sri Velmurugan Transport
            </span>
            <span className="text-white text-sm sm:text-base text-center sm:ml-1">
              and Earthmovers. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
