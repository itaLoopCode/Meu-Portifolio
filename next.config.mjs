/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production'

const nextConfig = {
    basePath: isProd ? '/Meu-Portifolio': '',
};

export default nextConfig;
