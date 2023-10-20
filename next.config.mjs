/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-*',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    PROJECT_URL: process.env.PROJECT_URL,
    PROJECT_API_KEY: process.env.PROJECT_API_KEY,
  },
}

export default nextConfig
