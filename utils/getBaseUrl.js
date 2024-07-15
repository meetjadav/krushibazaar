export const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        const { protocol, hostname, port } = window.location;
        return `${protocol}//${hostname}:${port}`;
    } else {
        // Fallback for server-side rendering or non-browser environments
        // You might want to customize this depending on your backend environment
        const defaultBaseUrl = 'http://localhost:3000';
        return defaultBaseUrl;
    }
};
