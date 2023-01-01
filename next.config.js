/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: "/todos/:id",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
