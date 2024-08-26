/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
    colors: {
      'primary': '#EA9A3F',
      'secondary': '#000000',
      'black': '#000000',
      'white': '#ffffff',
      'primary-1': '#cd7c2f1a',
      'primary-2': '#cd7c2f33',
      'primary-3': '#cd7c2f80',
      'primary-4': '#cd7c2f80',
      'primary-5': '#cd7c2f80',
      'primary-6': '#cd7c2f99',
      'primary-7': '#cd7c2fcc',
      'primary-8': '#cd7c2fe6',
      'primary-9': '#CD7C2F'
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

