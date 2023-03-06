//Purpose: To search for a plant in the trefle.io database when adding a new plant
  //Search by common_name and scientific_name
  //Api is limit of 120 requests per minute

export default async function handler (req, res) {
  console.log(req)
  const { id } = req.query;

  try {
    const response = await fetch(`https://api.floracodex.com/v1/plants/${id}?key=${process.env.FLORA_KEY}`)

    const json = await response.json();
    res.status(200).json(json)
  } catch (error) {
    res.status(404).json({message:`${error}`})
  }
}