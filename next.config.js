/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GAME_ID: process.env.CONTENTFUL_SPACE_ID,
  },
};
