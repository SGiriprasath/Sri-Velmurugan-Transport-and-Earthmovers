# Google Analytics Setup Guide

## 🎯 **What's Been Implemented:**

### ✅ **Analytics Features:**
- **Page View Tracking**: Automatically tracks all page views
- **Form Submission Tracking**: Tracks contact form submissions (success/error)
- **Button Click Tracking**: Tracks navigation button clicks
- **Custom Event Tracking**: Ready for additional custom events
- **Development Mode**: Debug mode enabled for development

### 📊 **Events Being Tracked:**
- **Page Views**: Every page load
- **Contact Form**: Submissions, successes, and errors
- **Navigation**: "Contact Us" and "View Services" button clicks
- **Service Interactions**: Ready for service-specific tracking

## 🔧 **Setup Instructions:**

### **Step 1: Create Google Analytics Account**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create a new GA4 property for your website
4. Get your **Measurement ID** (starts with "G-")

### **Step 2: Update Configuration**
1. Open `src/config/analytics.ts`
2. Replace `'G-XXXXXXXXXX'` with your actual Measurement ID:
   ```typescript
   MEASUREMENT_ID: 'G-XXXXXXXXXX', // Replace with your actual GA4 Measurement ID
   ```

### **Step 3: Test Analytics**
1. Start your development server: `npm start`
2. Open browser console to see analytics logs
3. Navigate through your website
4. Submit the contact form
5. Check Google Analytics dashboard for data

## 📈 **What You'll See in Analytics:**

### **Real-Time Reports:**
- Active users on your site
- Page views in real-time
- Event tracking (form submissions, button clicks)

### **Standard Reports:**
- **Audience**: Who visits your site
- **Acquisition**: How people find your site
- **Behavior**: What people do on your site
- **Conversions**: Form submissions and goals

## 🎯 **Custom Events Available:**

### **Form Tracking:**
```typescript
trackEvent('Form', 'Submit', 'Contact Form', 1);
trackEvent('Form', 'Success', 'Contact Form', 1);
trackEvent('Form', 'Error', 'Contact Form', 0);
```

### **Button Tracking:**
```typescript
trackButtonClick('Contact Us');
trackButtonClick('View Services');
```

### **Service Tracking:**
```typescript
trackServiceInteraction('Bricks', 'View');
trackServiceInteraction('JCB', 'Quote Request');
```

## 🔍 **Debug Mode:**

In development, analytics events are logged to console:
- ✅ "Google Analytics initialized with ID: G-XXXXXXXXXX"
- ✅ "Page view tracked: /"
- ✅ "Event tracked: Form Submit Contact Form"

## 🚀 **Next Steps:**

1. **Replace Measurement ID** in `analytics.ts`
2. **Deploy to production** to start collecting real data
3. **Set up goals** in Google Analytics dashboard
4. **Create custom reports** for your business needs

## 📱 **Mobile Analytics:**

The setup automatically works on mobile devices and tracks:
- Mobile vs desktop usage
- Device types and screen sizes
- Mobile-specific user behavior

## 🎨 **Privacy Compliance:**

The implementation respects user privacy:
- No personal data is sent to Google Analytics
- Only anonymous usage data is collected
- Complies with GDPR and privacy regulations

---

**Need Help?** Check the Google Analytics documentation or contact support for advanced features. 