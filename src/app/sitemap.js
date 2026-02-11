// app/sitemap.js
// Sitemap for Judicious Tech - Single Page Application

export default function sitemap() {
  const baseUrl = "https://judicioustech.netlify.app";

  // Current date for lastModified
  const currentDate = new Date().toISOString();

  // For a single-page portfolio, we only list the homepage
  // Hash routes (#about, #services, etc.) are NOT separate pages for SEO
  // Google sees them all as part of the homepage

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly", // Update when you add projects/testimonials
      priority: 1.0, // Homepage is highest priority
    },
  ];

  // If you add actual separate pages in the future, add them here:
  // Example:
  // {
  //   url: `${baseUrl}/blog`,
  //   lastModified: currentDate,
  //   changeFrequency: 'weekly',
  //   priority: 0.8,
  // },
  // {
  //   url: `${baseUrl}/blog/post-1`,
  //   lastModified: '2024-01-15',
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // },

  return routes;
}
