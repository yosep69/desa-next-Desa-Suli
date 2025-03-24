/**
 * @type {import('next').NextConfig}
 */

/**
 * TODO: remove .babelrc and replace it with swc
 */
const isProd = process.env.NODE_ENV === 'production'

const REQUIRED_CONFIG = {
  reactStrictMode: true, // true | false
  env: {
    SITE_NAME: 'Sawala Boilerplate',
    BASE_URL: process.env.BASE_URL
  }
}

module.exports = REQUIRED_CONFIG
