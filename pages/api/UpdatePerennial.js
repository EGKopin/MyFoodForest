const db = require('./dbModel')

export default async function handler (req, res) {
  const { id, common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, isannual, prune_start, prune_end } = req.body; 

   try {
    const queryString = `
    UPDATE plants
    SET common_name='${common_name}',
    type='${type}',
    scientific_name='${scientific_name}',
    self_pollinating='${self_pollinating}',
    pruning_details='${pruning_details}',
    fruiting_wood='${fruiting_wood}',
    planted_date=${planted_date},
    notes='${notes}'
    WHERE id=${id}
    RETURNING *
    `
    // bud_break_date=${bud_break_date},
    // first_bloom_date=${first_bloom_date},
    // last_bloom_date=${last_bloom_date},
    // first_day_fruiting=${first_day_fruiting},
    // last_day_fruiting=${last_day_fruiting},
    // prune_start=${prune_start},
    // prune_end=${prune_end}

    const result = await db.query(queryString);
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