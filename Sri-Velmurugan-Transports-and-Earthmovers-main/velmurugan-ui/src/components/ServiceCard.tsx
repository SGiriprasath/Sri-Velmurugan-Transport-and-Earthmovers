import React from 'react';

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

interface ServiceCardProps {
  service: Service;
  onGetQuote: (serviceId: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onGetQuote }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Section */}
      <div className="relative h-56 sm:h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Category Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
          <span className="px-2 sm:px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full shadow-lg">
            {service.category}
          </span>
        </div>
        {/* Icon Overlay */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-neutral-800/90 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-lg sm:text-2xl">{service.icon}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 sm:p-6 z-10">
        {/* Service Name */}
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-3 text-neutral-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {service.name}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm mb-4 sm:mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 sm:space-y-2 mb-6 sm:mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>



        {/* Action Button */}
        <button 
          onClick={() => onGetQuote(service.id)}
          className="w-full bg-gradient-to-r from-primary-700 to-secondary-900 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow group-hover:shadow-glow-lg text-sm sm:text-base"
        >
          <span className="flex items-center justify-center">
            <span className="mr-2">Get Quote</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Hover Effects */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
};

export default ServiceCard; 