const db = require('./dbModel')

export default async function handler (req, res) {

  try {
    const queryString = `
    SELECT * FROM "observations"
    `
    const result = await db.query(queryString);
    return res.status(200).json(result.rows)
  }
  catch (err) {
    res.status(400).json({
      message: {
        err: `Error in GetAllObserrvations handler,  ${err}`,
      },
    });
  }
}