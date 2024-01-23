/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-max-age=1, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig
