// INFRASTRUCTURE
// import './env.js'

import sequelize from './src/common/sequelize.js';
import app from './src/index.js';
// import './src/config/model.relationship.js';
// import './src/jobs/main.job.js';

const port = 9000;
(async () => {
    await sequelize.sync({alter: true}); // sync the model with the database
    console.log("database has been updated"); 
})();

// Start listening to the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
} );