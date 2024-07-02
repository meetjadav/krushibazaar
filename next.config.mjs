
/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pages/homepage',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
