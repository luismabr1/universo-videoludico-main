// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true, 
    swcMinify: true,
    compiler:{
        removeConsole: true,
    }
 }

module.exports = withContentlayer(nextConfig)


