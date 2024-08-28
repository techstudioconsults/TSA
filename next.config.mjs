/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "", //e.g cloudinary
        port: "",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
