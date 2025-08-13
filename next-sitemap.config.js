// next-sitemap.config.js
module.exports = {
  siteUrl: "https://entrometrix.ai",
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    { loc: "/" },
    { loc: "/about" },
    { loc: "/careers" },
    { loc: "/blog" },
    { loc: "blog-details" },
    { loc: "/blog-sidebar" },
    { loc: "/contact" },
    { loc: "/platform" },
    { loc: "/platform-terms" },
    { loc: "/policy" },
    { loc: "/terms" },
  ],
};
