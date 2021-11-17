require('dotenv').config({
    path: '.env'
  });
  
  module.exports = {
    apps: [
      {
        name: `${process.env.APP_NAME}-${process.env.APP_PORT}`,
        script: 'npx',
        args: `next start -p ${process.env.APP_PORT}`,
       }
    ],
  };
  
