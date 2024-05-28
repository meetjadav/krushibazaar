export const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        const port = window.location.port;
        return `http://localhost:${port}`;
    }
    // Return a default value or handle the server-side case appropriately
    return 'http://localhost:3000'; // default port for development
};
