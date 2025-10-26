// tailwind.config.js
import { theme } from './src/config/theme.ts';

const tailwindConfig = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        primaryDark: theme.colors.primaryDark,
        primaryLight: theme.colors.primaryLight,
        accentYellow: theme.colors.accentYellow,
        accentBlue: theme.colors.accentBlue,
        neutralWhite: theme.colors.neutralWhite,
        neutralGray: theme.colors.neutralGray,
        neutralText: theme.colors.neutralText,
        neutralSoft: theme.colors.neutralSoft,
        success: theme.colors.success,
        warning: theme.colors.warning,
        error: theme.colors.error,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        subtle: theme.shadows.subtle,
        card: theme.shadows.card,
        neumorphic: theme.shadows.neumorphic,
      },
      borderRadius: {
        sm: theme.borderRadius.sm,
        md: theme.borderRadius.md,
        lg: theme.borderRadius.lg,
        xl: theme.borderRadius.xl,
        '2xl': theme.borderRadius['2xl'],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
