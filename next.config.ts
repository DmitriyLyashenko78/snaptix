import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false, // отключает черный кружок с буквой N
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging-it-incubator.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
