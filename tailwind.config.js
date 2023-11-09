/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif']
      },
      colors: {
        'primary': 'rgba(231, 146, 49, 1)',
        'secondary': 'rgba(32, 31, 31, 1)',
        'background': 'rgba(242, 242, 242, 1)',
        'text-primary': 'rgba(255, 255, 255, 1)',
        'text-secondary': 'rgba(249, 246, 246, 0.5)',
      },
      spacing: {
        '480': '500px',
        '400': '400px',
        '235': '235px',
        '254': '254px',
        '150': '150px',
        '115': '115px',
      },
      textUnderlineOffset: {
        20: '20px',
      },
      backgroundImage: {
        'collab': "url('../assets/image/colabb.png')",
        'about': "url('../assets/image/about.png')",
        'career': "url('../assets/image/career.png')",
        'service': "url('../assets/image/service.png')",
      }
    },
  },
  plugins: [],
}

