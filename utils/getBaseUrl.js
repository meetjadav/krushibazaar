export const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        const { protocol, hostname, port } = window.location;
        const url = "https://krushibazaar.vercel.app"
        return `${url}`;
    }
};
