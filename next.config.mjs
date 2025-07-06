/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/internship/assignment-1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
