# Piotr Bakker Portfolio

A Jekyll-based portfolio website showcasing product design work.

**URL**: [piotrbakker.com](https://piotrbakker.com)

## Design System

This project uses a custom design system built with Sass, featuring design tokens optimized for both light and dark color schemes.

### Color System

#### Primitives
```scss
// Grayscale
$color-white: #FFFFFF;
$color-gray-50: #FCFCFC;
$color-gray-100: #F5F5F5;
$color-gray-200: #EAEAEA;
$color-gray-300: #CCCCCC;
$color-gray-400: #999999;
$color-gray-500: #808080;
$color-gray-600: #666666;
$color-gray-700: #333333;
$color-gray-800: #1F1F1F;
$color-gray-900: #111111;
$color-black: #000000;

// Brand Colors
$color-blue-500: #6666FF;
$color-magenta-500: #FF0099;
```
#### Semantic Tokens

```scss
// Backgrounds
$color-bg-primary-light: $color-gray-100;
$color-bg-primary-dark: $color-black;
$color-bg-secondary-light: $color-white;
$color-bg-secondary-dark: $color-gray-900;

// Borders
$color-border-subtle-light: $color-gray-200;
$color-border-subtle-dark: $color-gray-700;

// Text
$color-text-primary-light: $color-black;
$color-text-primary-dark: $color-gray-200;
$color-text-secondary-light: $color-gray-600;
$color-text-secondary-dark: $color-gray-500;
$color-text-link-light: $color-blue-500;
$color-text-link-dark: desaturate($color-blue-500, 40%);

// Code
$color-code-bg-light: $color-gray-200;
$color-code-bg-dark: $color-gray-700;
```

### Typography

#### Font Stacks
- **Sans Serif UI**: Outfit for interface elements
- **Sans Serif**: Sofia Pro for headings
- **Serif**: Freight Text Pro for body text
- **Monospace**: Inconsolata for code

### Responsive System

#### Breakpoints
```scss
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-xxl: 1400px;
```

#### Responsive Utilities
```html
<!-- Display utilities -->
<div class="d-dark-none">Hidden in dark mode</div>
<div class="d-light-none">Hidden in light mode</div>

<!-- Responsive border radius -->
<div class="rounded-3 border-radius-lg-1">Adaptive border radius (lg)</div>
<div class="rounded-3 border-radius-xl-1">Adaptive border radius (xl)</div>
```

Responsive border radius overrides follow the pattern `border-radius-{breakpoint}-{size}`, with options available for `lg` and `xl` breakpoints and sizes 1 through 5.

## License

&copy; 2016&ndash;2025 Piotr Bakker. All rights reserved.

The code structure and Jekyll setup are open source, but the content, design, and assets are proprietary.
