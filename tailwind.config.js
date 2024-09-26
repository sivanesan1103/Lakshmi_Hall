/** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./src/**/*.{html,lakshmi}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

  module.exports = {
    content: ["./src/**/*.{html,lakshmi}"],
    theme: {
      extend: {
        animation: {
          'horizontal-spin': 'horizontal-spin 2s linear infinite',
        },
      },
    },
    plugins: [],
  }