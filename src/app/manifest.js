export default function manifest() {
  return {
    name: 'City Dental Clinic',
    short_name: 'CityDental',
    description: 'Advanced Dental Care in Mumbai',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d9488', // Teal-600 color
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}