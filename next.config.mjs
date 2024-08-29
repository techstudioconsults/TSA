/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost:3000", //e.g cloudinary
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
