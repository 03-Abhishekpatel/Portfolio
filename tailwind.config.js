/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ Dark mode toggle
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-in-delay-1': 'fadeIn 0.7s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fadeIn 0.7s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fadeIn 0.7s ease-out 0.6s forwards',
        'fade-in-delay-4': 'fadeIn 0.7s ease-out 0.8s forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'meteor': 'meteor 5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'meteor': {
          '0%': { transform: 'rotate(215deg) translateY(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateY(100vh)', opacity: '0' },
        },
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
      },
    },
  },
  plugins: [],
}
