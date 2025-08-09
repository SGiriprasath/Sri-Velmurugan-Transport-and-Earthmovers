# Sri Velmurugan Transports - Agriculture Machinery Rental Service

A modern, responsive website for Sri Velmurugan Transports, showcasing their comprehensive range of construction materials and heavy machinery rental services.

## 🚀 Features

### Service Categories
- **Construction Materials**
  - Rough Stone
  - M Sand
  - P Sand
  - Jalli (All Sizes)
  - River Sand
  - Gravel
  - Red Soil
  - Bricks (Own Chamber)

- **Heavy Machinery**
  - JCB
  - Hitachi Excavator
  - Crane
  - Tractor

### Key Features
- ✨ **Modern UI/UX** - Beautiful, responsive design with dark/light theme toggle
- 🎯 **Service Filtering** - Filter services by category (Construction Materials, Heavy Machinery)
- 📱 **Mobile Responsive** - Optimized for all device sizes
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📞 **Contact Integration** - WhatsApp and phone call buttons
- 📝 **Contact Form** - Professional inquiry form with service selection
- 🎨 **Interactive Cards** - Hover effects and smooth animations

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Responsive Design** with mobile-first approach
- **Modern JavaScript** (ES6+)

## 📁 Project Structure

```
velmurugan-ui/
├── src/
│   ├── components/
│   │   ├── ServiceCard.tsx      # Individual service card component
│   │   └── ContactForm.tsx      # Contact form component
│   ├── App.tsx                  # Main application component
│   ├── App.css                  # Global styles
│   └── index.tsx               # Application entry point
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Earthy Red** (#A52A2A) - Primary brand color
- **Mustard Yellow** (#F5B800) - Accent color
- **Sand** (#FAF3E0) - Background color
- **Deep Blue** (#004080) - Secondary color

### Typography
- Modern, clean fonts with excellent readability
- Responsive text sizing
- Proper hierarchy with headings and body text

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd velmurugan-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎯 Service Categories

### Construction Materials
All construction materials are sourced from quality suppliers and include:
- **Rough Stone** - Various sizes for construction and landscaping
- **M Sand** - Manufactured sand for concrete work
- **P Sand** - Plastering sand for smooth finishes
- **Jalli** - Decorative stones in multiple sizes
- **River Sand** - Natural sand for construction
- **Gravel** - Multiple sizes for road construction
- **Red Soil** - Quality soil for landscaping
- **Bricks** - Manufactured in own chamber

### Heavy Machinery
Professional machinery rental services:
- **JCB** - Excavation and loading work
- **Hitachi Excavator** - Heavy construction and mining
- **Crane** - Lifting and construction work
- **Tractor** - Agricultural and construction use

## 📞 Contact Information

- **WhatsApp**: +91XXXXXXXXXX
- **Phone**: +91XXXXXXXXXX
- **Email**: info@srivelmurugantransports.com

## 🔧 Customization

### Adding New Services
To add new services, update the `services` array in `App.tsx`:

```typescript
{
  id: 'new-service',
  name: 'New Service Name',
  category: 'Category Name',
  description: 'Service description',
  icon: '🎯',
  features: ['Feature 1', 'Feature 2', 'Feature 3']
}
```

### Modifying Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  earthyRed: '#A52A2A',
  mustardYellow: '#F5B800',
  sand: '#FAF3E0',
  deepBlue: '#004080',
}
```

## 📈 Performance Features

- ⚡ **Fast Loading** - Optimized bundle size
- 🎯 **SEO Friendly** - Proper meta tags and structure
- 📱 **PWA Ready** - Service worker for offline capability
- 🔍 **Accessible** - WCAG compliant design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and inquiries:
- 📧 Email: support@srivelmurugantransports.com
- 📞 Phone: +91XXXXXXXXXX
- 💬 WhatsApp: +91XXXXXXXXXX

---

**Sri Velmurugan Transports** - Empowering Your Projects with Quality Materials and Reliable Machinery 