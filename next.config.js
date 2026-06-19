/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { remotePatterns: [{ protocol: 'https', hostname: 'places.googleapis.com' }, { protocol: 'https', hostname: 'lh3.googleusercontent.com' }, { protocol: 'https', hostname: 'maps.googleapis.com' }] },
};

module.exports = nextConfig;
