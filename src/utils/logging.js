import winston from "winston";
import { NODE_ENV } from "../config/constants.js";

// export const logger = winston.createLogger({
//     level: "info",
//     format: winston.format.json(),
//     transports: [
//         new winston.transports.Console({})
//     ]
// });

const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        customFormat,
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

if (NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}