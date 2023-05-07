import winston, {format} from 'winston';
const {combine, timestamp, label, printf} = format;

const myFormat = printf(
    ({level, message, label, timestamp}) =>
        `${timestamp} [${label}] ${level}: ${message}`);

const logger = winston.createLogger(
    {
        //level: 'info', // info, warn, error
        //level: 'warn', // warn, error
        level: 'error', // error
        format: combine (
            label({label: 'booky-log'}),
            timestamp(),
            myFormat
          ),   
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'application.log' })
        ]
    });

export default logger;
