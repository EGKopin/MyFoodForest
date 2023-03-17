const db = require('./dbModel')

export default async function handler (req, res) {
  const { user_id, plant_id, observation_date, notes } = req.body; 

  try {
    const queryString = `
    INSERT INTO observations (user_id, plant_id, observation_date, notes)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `
    const params = [user_id, plant_id, observation_date, notes];

    const result = await db.query(queryString, params);
    console.log(result.rows)
    return res.status(200).json(result.rows)
  }
  catch (err) {
    res.status(400).json({
      message: {
        err: `Error in AddObservation handler, ${err} `,
      },
    });
  }
}