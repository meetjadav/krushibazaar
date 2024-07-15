export const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        const { protocol, hostname, port } = window.location;
        return `${protocol}//${hostname}:${port}`;
    } else {
        const defaultBaseUrl = 'https://krushibazaar.vercel.app';
        return defaultBaseUrl;
    }
};
