const svg = require('@neodx/svg/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['reqres.in'],
    remotePatterns: [
      {
        hostname: '**',
        protocol: 'https',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'src/assets/icons',
          output: 'public/sprites',
          group: true,
          fileName: '{name}.{hash:8}.svg',
          resetColors: {
            replaceUnknown: 'currentColor',
            exclude: [/[\w-]*-colored\.svg$/],
          },
          metadata: {
            path: 'src/components/Icon/sprite.gen.ts',
            runtime: {
              size: true,
              viewBox: true,
            },
          },
        })
      )
    }
    return config
  },
}

module.exports = nextConfig
