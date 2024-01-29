declare namespace NodeJS {
    export interface ProcessEnv {
        APP_NAME: string;
        NEXTAUTH_URL: string;
        GITHUB_CLIENT_ID: string;
        GITHUB_CLIENT_SECRET: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        RESEND_API_KEY: string;
        RESEND_EMAIL_DOMAIN: string;
    }
}