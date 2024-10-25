// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { 
    swcMinify: false,
    compiler:{
        removeConsole: false,
    }
 }

module.exports = withContentlayer(nextConfig)


