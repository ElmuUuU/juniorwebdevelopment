/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GREETING: process.env.GREETING,
  },
};
