// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { 
    swcMinify: false,
    compiler:{
        removeConsole: false,
    }
 }
     const withMDX = require('@next/mdx')({
        extension: /\.mdx?$/,
    });

    module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    });

module.exports = withContentlayer(nextConfig)


