const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  secretkey: process.env.uri,
};
