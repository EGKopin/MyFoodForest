//Purpose: To search for a plant in the trefle.io database when adding a new plant
  //Search by common_name and scientific_name
  //Api is limit of 120 requests per minute

export default async function handler (req, res) {
  const { string } = req.query;

  try {
    const response = await fetch(`https://api.floracodex.com/v1/plants?key=${process.env.FLORA_KEY}&q=${string}`)

//to see details of a plant with the known id
// https://api.floracodex.com/v1/plants/609e210aca233f0aecfa7112?key=Ak77fyJbXNXepMYo61sxhKbgaBDr8WUl6v5sBaBMy161-bfIfwPriDL83sOJW2Tv

    const json = await response.json();

    res.status(200).json(json)
  } catch (error) {
    
    res.status(404).json({message:`${error}`})
  }
}