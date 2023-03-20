const db = require('./dbModel')

export default async function handler (req, res) {
  const { common_name, type, scientific_name, days_to_germ, seed_depth, seed_start_date, soil_block, weeks_to_transplant, seed_start_date_outside, favorite, notes, isannual } = req.body; 

  try {
    const queryString = `
    INSERT INTO plants (user_id, common_name, type, scientific_name, days_to_germ, seed_depth, seed_start_date, soil_block, weeks_to_transplant, seed_start_date_outside, favorite, notes, isannual )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *
    `
    const params = [ 4, common_name, type, scientific_name, days_to_germ, seed_depth, seed_start_date, soil_block, weeks_to_transplant, seed_start_date_outside, favorite, notes, isannual ];

    const result = await db.query(queryString, params);
    console.log(result.rows)
    return res.status(200).json(result.rows)
  }
  catch (err) {
    res.status(400).json({
      message: {
        err: `Error in AddToAnnuals handler, ${err} `,
      },
    });
  }
}