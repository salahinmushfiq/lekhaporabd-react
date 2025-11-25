// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         'fade-in-up': {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         },
//         animation: {
//           'fade-in-up': 'fade-in-up 0.6s ease-out',
//         },
//     },
//   },
//   fontFamily: {
//   sans: ['Inter', 'sans-serif'],
// },
//   plugins: [],
// };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'fade-in-up': {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
      },
      
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-vert': 'slideUp 15s linear infinite',
        'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
  'h-[4px]',
  'bg-yellow-500',
  'z-[99999]',
  'origin-left',
],
};
