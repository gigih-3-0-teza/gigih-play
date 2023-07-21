import dotenv from 'dotenv';

dotenv.config();

export const {
    APP_PORT,
    NODE_ENV,
    MONGO_URI,
} = process.env;