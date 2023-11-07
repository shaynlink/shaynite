const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/gh',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
}

module.exports = nextConfig
