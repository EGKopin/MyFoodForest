const { Pool } = require('pg');

const PG_URI = 'postgres://qtavzeuq:w0kzh-svJYQLMCw1Rpki6mDVRiL43g1l@heffalump.db.elephantsql.com/qtavzeuq';

const pool = new Pool({
    connectionString: PG_URI
  });

module.exports = {
    query: (text, params, callback) => {
      console.log('Executed query:', text, params);
      return pool.query(text, params, callback);
    }
  };