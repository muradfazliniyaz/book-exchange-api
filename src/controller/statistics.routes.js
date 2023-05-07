// VIEW
import express from 'express';
const router = express.Router();

import logger from '../config/winston.config.js';

import { sendDailyStatistics } from '../service/daily.statistics.js';

// ReST API Definition - Endpoints
router.post('/statistics', async (request, response) => {
    logger.info("The statistics are requested")
    await sendDailyStatistics();
    logger.info("The statistics are sent");
    response.send(200).json();
});