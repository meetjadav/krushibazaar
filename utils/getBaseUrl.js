export const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        const { protocol, hostname, port } = window.location;
        return `${protocol}//${hostname}:${port}`;
    } else {
        const defaultBaseUrl = 'https://krushibazaar-9gvjggfha-meet-jadavs-projects-4a095c0e.vercel.app';
        return defaultBaseUrl;
    }
};
