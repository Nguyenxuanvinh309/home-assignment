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
      'primary-9': '#CD7C2F',
      'gray-100': '#f7fafc',
      'gray-200': '#edf2f7',
      'gray-300': '#e2e8f0',
      'gray-400': '#cbd5e0',
      'gray-500': '#a0aec0',
      'gray-600': '#718096',
      'gray-700': '#4a5568',
      'gray-800': '#2d3748',
      'gray-900': '#1a202c',
      'red-100': '#fff5f5',
      'red-200': '#fed7d7',
      'red-300': '#feb2b2',
      'red-400': '#fc8181',
      'red-500': '#f56565',
      'red-600': '#e53e3e',
      'red-700': '#c53030',
      'red-800': '#9b2c2c',
      'red-900': '#742a2a',
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

