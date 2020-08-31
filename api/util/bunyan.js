const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'hengda-harold-api',
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'error',
      path: './hengda-harold-api-error.log',
    },
  ],
});

module.exports = logger;
