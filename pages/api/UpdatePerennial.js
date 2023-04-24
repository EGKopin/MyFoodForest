const db = require('./dbModel')

export default async function handler (req, res) {
  const { id, common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, isannual, prune_start, prune_end } = req.body; 

  if (!id) return res.status(200).json({err: 'No plant ID provided'})

  try {
    const queryString = `
    UPDATE plants
    SET (common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, isannual, prune_start, prune_end) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
    WHERE id=${id}
    RETURNING *
    `
    const params = [common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, isannual, prune_start, prune_end];


    const result = await db.query(queryString, params);
    return res.status(200).json(result.rows)
  }
  catch (err) {
    res.status(400).json({
      message: {
        err: `Error in UpdatePerennial handler,  ${err}`,
      },
    });
  }
}