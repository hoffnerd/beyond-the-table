/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [ { protocol: 'https', hostname: 'uploadthing.com', }, ],
    },
    async redirects() { return [ { source: '/information', destination: '/information/change-log', permanent: true }, ] }
}

module.exports = nextConfig
