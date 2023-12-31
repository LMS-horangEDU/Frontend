/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["@nivo"], experimental: { esmExternals: "loose", },

   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
   
    async redirects() {
    return [
      {
        source: '/',
        destination: '/mypage/home',
        permanent: true,
      },
    ]
  },

}

module.exports = nextConfig
