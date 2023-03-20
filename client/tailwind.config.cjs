module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c0e0c',
        secondary: '#d8323c',
        lightgrey: '#eaebea',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200x',
      xl: '1700x',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
