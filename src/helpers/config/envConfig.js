export const getBaseUrl = () => {
    const environment = process.env.NODE_ENV;

    switch (environment) {
        case 'development':
            return 'http://localhost:8000/api/v1'; // Replace with your development API URL
        case 'production':
            return process.env.BASE_URL;// Replace with your production API URL
        default:
            return ' http://localhost:8000/api/v1'; // Replace with a default API URL
    }
};