declare var process: {
    env: {
        NODE_ENV: string
    }
}

export const API_URL = (process.env.NODE_ENV === 'development')
    ? "http://localhost/OAMS/api/"
    : "http://localhost/OAMS/api/"