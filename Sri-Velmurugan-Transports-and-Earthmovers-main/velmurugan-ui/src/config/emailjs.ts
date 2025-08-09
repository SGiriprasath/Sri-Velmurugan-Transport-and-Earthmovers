// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_kjbq069',
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_469p4pd',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'mN8usPtiBdt7PDSUv',
};

// Alternative configuration - you can replace the above with these if needed
export const EMAILJS_CONFIG_ALTERNATIVE = {
    SERVICE_ID: 'service_kjbq069', // Your EmailJS service ID (should be the actual service ID from dashboard)
    TEMPLATE_ID: 'template_469p4pd', // Your EmailJS template ID
    PUBLIC_KEY: 'mN8usPtiBdt7PDSUv', // Your EmailJS public key
};

// Initialize EmailJS
export const initEmailJS = () => {
  // You can initialize EmailJS here if needed
  // emailjs.init(PUBLIC_KEY);
}; 