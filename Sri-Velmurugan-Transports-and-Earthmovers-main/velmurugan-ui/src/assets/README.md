# Assets Folder

This folder contains all static assets for the Sri Velmurugan Transports application.

## Folder Structure

```
assets/
├── images/          # Product photos, service images, backgrounds
├── icons/           # Custom icons and UI elements
└── logos/           # Company logos and branding materials
```

## Usage

### Importing Images
```typescript
// Import images from the assets folder
import productImage from '../assets/images/product-photo.jpg';
import companyLogo from '../assets/logos/company-logo.png';
import customIcon from '../assets/icons/custom-icon.svg';
```

### Supported File Types
- **Images**: .jpg, .jpeg, .png, .gif, .webp
- **Icons**: .svg, .png
- **Logos**: .png, .svg, .jpg

## Guidelines

1. **Naming Convention**: Use kebab-case for file names (e.g., `product-photo.jpg`)
2. **File Size**: Optimize images for web use to reduce loading times
3. **Organization**: Keep related assets in appropriate subfolders
4. **Version Control**: Large files should be added to .gitignore if needed

## Common Use Cases

- **Product Photos**: Store in `images/` folder
- **Service Images**: Store in `images/services/` folder
- **Company Branding**: Store in `logos/` folder
- **UI Icons**: Store in `icons/` folder 