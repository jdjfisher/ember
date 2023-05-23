/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.pravatar.cc'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA(nextConfig);
