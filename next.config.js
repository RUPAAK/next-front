/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgs.search.brave.com", "git-scm.com"],
  },
};

module.exports = nextConfig;
