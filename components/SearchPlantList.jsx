import SearchPlantCard from '../components/SearchPlantCard'

const SearchPlantList = ({ plants }) => {
  return (
    <div className='none'>
      <ul>
      {plants.map(plant => (
          <SearchPlantCard 
            key={plant.id}
            id={plant.id}
            commonName={plant.common_name}
            sciName={plant.scientific_name}
            image={plant.image_url}
            moreInfo={plant.links.plant}
            />
      ))}
      </ul>
    </div>
  )
};

export default SearchPlantList