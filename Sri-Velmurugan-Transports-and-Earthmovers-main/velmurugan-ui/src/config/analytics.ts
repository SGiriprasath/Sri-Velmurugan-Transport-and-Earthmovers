import ReactGA from 'react-ga4';

// Google Analytics Configuration
export const GA_CONFIG = {
  MEASUREMENT_ID: process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-FRZ6VPMG8M',
  DEBUG_MODE: process.env.NODE_ENV === 'development',
};

// Initialize Google Analytics
export const initGA = () => {
  if (GA_CONFIG.MEASUREMENT_ID && GA_CONFIG.MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(GA_CONFIG.MEASUREMENT_ID, {
      testMode: GA_CONFIG.DEBUG_MODE,
    });
    console.log('Google Analytics initialized with ID:', GA_CONFIG.MEASUREMENT_ID);
  } else {
    console.warn('Google Analytics not initialized - please set your Measurement ID');
  }
};

// Track page views
export const trackPageView = (path: string) => {
  if (GA_CONFIG.MEASUREMENT_ID && GA_CONFIG.MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (GA_CONFIG.MEASUREMENT_ID && GA_CONFIG.MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('Form', 'Submit', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('Button', 'Click', buttonName);
};

// Track service interactions
export const trackServiceInteraction = (serviceName: string, action: string) => {
  trackEvent('Service', action, serviceName);
};

// Track contact interactions
export const trackContactInteraction = (method: string) => {
  trackEvent('Contact', 'Click', method);
}; 