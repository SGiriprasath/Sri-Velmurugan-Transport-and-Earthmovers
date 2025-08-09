# Sri Velmurugan Transports and Earthmovers

A modern, responsive website for Sri Velmurugan Transports and Earthmovers - a leading construction and earthmoving company.

## 🚀 **Live Demo**
[Website URL will be added after deployment]

## 🎯 **Features**

### ✅ **Modern Design**
- **Responsive Layout**: Works perfectly on all devices
- **Dark/Light Theme**: Toggle between themes
- **Smooth Animations**: Professional animations and transitions
- **Modern UI**: Clean, professional design with Tailwind CSS

### 📱 **Fully Responsive**
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout on tablets
- **Desktop Experience**: Enhanced desktop experience
- **Cross-Browser**: Works on all modern browsers

### 📧 **Contact System**
- **EmailJS Integration**: Send emails directly from the website
- **Custom Success Modal**: Beautiful success notifications
- **Form Validation**: Complete form validation
- **Multiple Contact Methods**: Phone, WhatsApp, Email, Instagram

### 📊 **Analytics**
- **Google Analytics 4**: Complete visitor tracking
- **Event Tracking**: Form submissions, button clicks
- **Page View Tracking**: Automatic page view tracking
- **Conversion Tracking**: Contact form conversion tracking

### 🏗️ **Services Showcase**
- **Construction Materials**: Bricks, Sand, Stones, Gravel
- **Machinery Services**: JCB, Excavators, Cranes
- **Agricultural Equipment**: Tractors and farming machinery
- **Detailed Service Cards**: Complete service information

## 🛠️ **Technology Stack**

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **EmailJS**: Client-side email sending
- **Google Analytics 4**: Website analytics
- **Vite**: Fast build tool

## 📦 **Installation**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn

### **Setup Steps**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sri-velmurugan-transports-and-earthmovers.git
   cd sri-velmurugan-transports-and-earthmovers
   ```

2. **Install dependencies**
   ```bash
   cd velmurugan-ui
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Update EmailJS configuration in `src/config/emailjs.ts`
   - Update Google Analytics ID in `src/config/analytics.ts`

4. **Start development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ **Configuration**

### **EmailJS Setup**
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up email service and template
3. Update configuration in `src/config/emailjs.ts`:
   ```typescript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID: 'your_template_id',
     PUBLIC_KEY: 'your_public_key',
   };
   ```

### **Google Analytics Setup**
1. Create Google Analytics 4 property
2. Get your Measurement ID (starts with "G-")
3. Update configuration in `src/config/analytics.ts`:
   ```typescript
   export const GA_CONFIG = {
     MEASUREMENT_ID: 'G-XXXXXXXXXX',
     DEBUG_MODE: process.env.NODE_ENV === 'development',
   };
   ```

## 📁 **Project Structure**

```
velmurugan-ui/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, logos
│   │   ├── images/        # Service images
│   │   ├── icons/         # Custom icons
│   │   └── logos/         # Company logos
│   ├── components/        # React components
│   │   ├── ContactForm.tsx
│   │   └── ServiceCard.tsx
│   ├── config/           # Configuration files
│   │   ├── analytics.ts  # Google Analytics config
│   │   └── emailjs.ts    # EmailJS config
│   ├── App.tsx           # Main application component
│   └── index.tsx         # Application entry point
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 **Customization**

### **Colors and Branding**
- Update colors in `tailwind.config.js`
- Replace images in `src/assets/`
- Update company information in `src/App.tsx`

### **Services**
- Modify services array in `src/App.tsx`
- Add/remove service cards
- Update service images in `src/assets/images/`

### **Contact Information**
- Update phone numbers, email, social media links
- Modify contact form fields
- Customize success/error messages

## 📊 **Analytics Events**

The website tracks the following events:
- **Page Views**: Automatic tracking
- **Form Submissions**: Contact form submissions
- **Button Clicks**: Navigation and CTA buttons
- **Service Interactions**: Service card interactions

## 🚀 **Deployment**

### **Netlify (Recommended)**
1. Connect your GitHub repository to Netlify
2. Set build command: `cd velmurugan-ui && npm run build`
3. Set publish directory: `velmurugan-ui/build`
4. Deploy!

### **Vercel**
1. Import your GitHub repository to Vercel
2. Set root directory to `velmurugan-ui`
3. Deploy automatically!

### **GitHub Pages**
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings

## 📞 **Contact Information**

- **Phone**: +91 9788303040
- **WhatsApp**: +91 9788303040
- **Email**: Srivelmurugan.trans.earthmovers@gmail.com
- **Instagram**: @srivelmurugan_earthmovers

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License.

## 🙏 **Acknowledgments**

- **Tailwind CSS** for the utility-first CSS framework
- **EmailJS** for client-side email functionality
- **React** for the amazing frontend library
- **Google Analytics** for website analytics

---

**Built with ❤️ for Sri Velmurugan Transports and Earthmovers** 