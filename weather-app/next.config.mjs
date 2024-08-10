/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.weatherapi.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
