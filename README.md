# Periodic Table Website

## Project Overview

An interactive web application that displays the periodic table of elements with detailed information accessible through an intuitive modal interface. Built with React and Framer Motion, this project showcases modern web development practices, responsive design, and smooth animations.

## Key Features

### 1. **Interactive Periodic Table Grid**

- Complete periodic table layout with all elements properly positioned
- Color-coded elements by category (noble gases, alkali metals, halogens, etc.)
- Smooth hover and click animations using Framer Motion
- Each element tile displays:
  - Atomic number (desktop only)
  - Element symbol (always visible)
  - Element name (desktop only)

### 2. **Detailed Element Information Modal**

- Click any element to view comprehensive details
- Animated modal with smooth slide-in and spring effects
- Displays:
  - Element name and symbol
  - Atomic number and mass
  - Element category
  - Physical element images (when available)
  - Scientific summary and description
- Click outside modal or close button to dismiss

### 3. **Category Legend**

- Color-coded legend showing all element categories
- Horizontal scrolling layout for easy navigation
- Animated entries with stagger effect
- Interactive hover effects:
  - Scale animation on legend items
  - Rotating color boxes on hover

### 4. **Responsive Design**

- **Desktop**: Full periodic table visible without scrolling
- **Tablet/Mobile**:
  - Horizontal scrolling for periodic table (maintains readable size)
  - Simplified element tiles (symbol only)
  - All animations and interactions preserved
- Custom scrollbars for better aesthetics
- Smooth touch scrolling on mobile devices

### 5. **Smooth Animations**

- Staggered fade-in for element tiles on page load
- Scale and shadow effects on hover
- Tactile tap feedback on click
- Spring-based modal animations
- Legend item entrance animations

### Data Source

- **Bowserinator Periodic Table JSON** (GitHub)
  - Comprehensive element data
  - Physical element images from Wikimedia Commons
  - Scientific summaries and properties

## User Experience Features

1. **Visual Feedback**: Every interaction has visual response
2. **Accessibility**: Clear contrast, readable fonts, semantic HTML
3. **Performance**: Efficient animations, optimized rendering
4. **Intuitive Navigation**: Click to explore, scroll naturally
5. **Cross-Device Compatibility**: Works seamlessly on all screen sizes

## Future Enhancement Ideas

- Search and filter functionality
- Element comparison feature
- Periodic trends visualization
- Additional element properties (electron configuration, isotopes)
- Dark mode toggle
- Print-friendly layout
- Keyboard navigation support
- Accessibility improvements (ARIA labels, screen reader support)

## Setup and Installation

```bash
# Clone or create the project
npx create-react-app periodic-table-app

# Navigate to project
cd periodic-table-app

# Install dependencies
npm install framer-motion

# Start development server
npm start
```

## API Reference

**Data Source**: `https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json`

**Key Data Fields**:

- `number` - Atomic number
- `symbol` - Chemical symbol
- `name` - Element name
- `atomic_mass` - Atomic mass
- `category` - Element classification
- `xpos`, `ypos` - Grid position
- `image.url` - Element photograph
- `summary` - Scientific description

---

## Credits

- **Element Data**: Bowserinator's Periodic Table JSON (GitHub)
- **Element Images**: Wikimedia Commons
- **Framework**: React by Meta
- **Animations**: Framer Motion by Framer
