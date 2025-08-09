import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { trackEvent } from '../config/analytics';
import instagramIcon from '../assets/icons/instagram.png';
import whatsappIcon from '../assets/icons/whatsapp.png';

interface ContactFormProps {
  services: Array<{ id: string; name: string }>;
  onSubmit: (formData: ContactFormData) => void;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ services, onSubmit }) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    // Test EmailJS connection
    console.log('EmailJS initialized with public key:', EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Set the current time in the hidden field
    const timeField = document.getElementById('time-field') as HTMLInputElement;
    if (timeField) {
      timeField.value = new Date().toLocaleString();
    }

    console.log('Sending email with config:', {
      serviceId: EMAILJS_CONFIG.SERVICE_ID,
      templateId: EMAILJS_CONFIG.TEMPLATE_ID,
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY
    });

    // EmailJS configuration
    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      form.current!,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        setShowSuccessModal(true);
        // Track successful form submission
        trackEvent('Form', 'Success', 'Contact Form', 1);
        onSubmit(formData);
      }, (error) => {
        console.log('FAILED...', error);
        console.error('EmailJS Error Details:', error);
        setSubmitStatus('error');
        // Track failed form submission
        trackEvent('Form', 'Error', 'Contact Form', 0);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Map EmailJS field names to state properties
    const fieldMapping: { [key: string]: string } = {
      'user_name': 'name',
      'user_phone': 'phone',
      'user_message': 'message'
    };
    
    const stateField = fieldMapping[name] || name;
    setFormData(prev => ({ ...prev, [stateField]: value }));
  };

  return (
    <>
      <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden animate-fade-in">
        <div className="bg-gradient-to-r from-primary-700 to-secondary-900 p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
          <p className="text-primary-100">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        
        <div className="p-8">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden fields for EmailJS template */}
            <input type="hidden" name="title" value="Contact Form Submission" />
            <input type="hidden" name="time" id="time-field" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                  Name *
                </label>
                <input 
                  type="text" 
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all duration-300 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm" 
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                  Phone *
                </label>
                <input 
                  type="tel" 
                  name="user_phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all duration-300 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm" 
                  placeholder="Your phone number"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                Message
              </label>
              <textarea 
                rows={5} 
                name="user_message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all duration-300 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-700 to-secondary-900 hover:from-primary-700 hover:to-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow text-lg"
            >
              <span className="flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="mr-2">Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </span>
            </button>

            {/* Status Messages - Hidden for success, only show error */}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Failed to send message. Please try again.
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Failed to send message. Please try again.
                </div>
              </div>
            )}
          </form>
          
          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="animate-slide-up">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl filter brightness-0 invert">📞</span>
                </div>
                <h4 className="font-semibold text-neutral-800 dark:text-white mb-1 text-sm">Call Us</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs">+91 9788303040</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-neutral-800 dark:text-white mb-1 text-sm">WhatsApp</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs">+91 9788303040</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">📧</span>
                </div>
                <h4 className="font-semibold text-neutral-800 dark:text-white mb-1 text-sm">Email</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs break-words">Srivelmurugan.trans.earthmovers@gmail.com</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-neutral-800 dark:text-white mb-1 text-sm">Instagram</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs break-words">srivelmurugan_earthmovers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-700 max-w-md w-full mx-4 transform animate-scale-in">
            <div className="p-8 text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Success Message */}
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-3">
                Thank You!
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-lg">
                Thank you for your inquiry! We will contact you soon.
              </p>
              
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-primary-700 to-secondary-900 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm; 