/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Adicione os domínios permitidos para imagens
  },
}

module.exports = nextConfig;
