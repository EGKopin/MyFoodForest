const db = require('./dbModel')

export default async function handler (req, res) {
  const { common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, isannual } = req.body; 

  try {
    const queryString = `
    INSERT INTO plants (user_id, common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, isannual)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING *
    `
    const params = [ 4, common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, isannual];

    const result = await db.query(queryString, params);
    console.log(result.rows)
    return res.status(200).json(result.rows)
  }
  catch (err) {
    res.status(400).json({
      message: {
        err: `Error in AddToPerennials handler,  ${err}`,
      },
    });
  }
}