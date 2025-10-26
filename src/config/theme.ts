// src/config/theme.ts

export interface ThemeColors {
  primary: string;        // Main DIC blue
  primaryDark: string;    // Darker shade for navbar/header
  primaryLight: string;   // Light blue for backgrounds/cards
  accentYellow: string;   // Highlight color (buttons, badges)
  accentBlue: string;     // Secondary highlight
  neutralWhite: string;   // Page background / text contrast
  neutralGray: string;    // Soft backgrounds / cards
  neutralText: string;    // Default body text
  neutralSoft: string;    // Subtext / muted text
  success: string;        // For success messages
  warning: string;        // For warnings / alerts
  error: string;          // For errors / alerts
}

export interface ThemeShadows {
  subtle: string;         // Small card shadows
  card: string;           // Medium shadow for cards/modals
  neumorphic: string;     // Soft 3D effect
}

export interface ThemeBorderRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface Theme {
  colors: ThemeColors;
  shadows: ThemeShadows;
  borderRadius: ThemeBorderRadius;
  fontFamily: string;
}

export const theme: Theme = {
  colors: {
    primary: '#0071DC',       // DIC brand blue
    primaryDark: '#004C9E',   // Darker shade for headers/navbars
    primaryLight: '#E6F0FF',  // Light blue for backgrounds
    accentYellow: '#FFC72C',  // Accent / highlights
    accentBlue: '#005BBF',    // Secondary accent
    neutralWhite: '#FFFFFF',
    neutralGray: '#F5F7FA',
    neutralText: '#2B2B2B',
    neutralSoft: '#7C8CA0',
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
  },
  shadows: {
    subtle: '0 2px 6px rgba(0,0,0,0.05)',
    card: '0 4px 12px rgba(0,0,0,0.08)',
    neumorphic: '5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.7)',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
  },
  fontFamily: 'Inter, Poppins, "Open Sans", sans-serif',
};
