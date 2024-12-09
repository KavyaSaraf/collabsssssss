/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
  eslint: {
    // Disable linting during the build process
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable type-checking during the build process
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
