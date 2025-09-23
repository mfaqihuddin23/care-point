/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'var(--font-satoshi)', 'system-ui', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        jakarta: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1280px',
        },
      },
      colors: {
        ink: '#1a1a1a',
        accent: '#3b82f6',
        mist: '#f8fafc',
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'xl2': '1rem',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom, #F6F6F6, #BECFD6)',
      }
    },
  },
  plugins: [],
}

