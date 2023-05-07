import fs from 'fs';
import path from 'path';
import morgan from 'morgan';

const logFilePath = path.join(path.resolve(), 'access.log');

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(logFilePath, { flags: 'a' })

// setup the logger
export default morgan('combined', { stream: accessLogStream })