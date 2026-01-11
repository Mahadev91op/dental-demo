export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://citydental-demo.vercel.app/sitemap.xml', // Apna domain update karein
  };
}