import React from "react";
import Image from "next/image";
import { server } from '../../config'


const SearchPlantCard = ({ id, commonName, sciName, image, moreInfo }) => {
  if (!image) image = 'https://inaturalist-open-data.s3.amazonaws.com/photos/116782/original.JPG' //need to replace this with an image of not avaiable
  const getDetails = async (id) => {
      const res = await fetch(`${server}/api/GetFloraDetails/?id=${id}`);
      const results = await res.json()
      console.log(results.data)
  }

  return (
    <li>
      <h2>{commonName}</h2>
      <h3>{sciName}</h3>
      <div style={{height:'auto'}}>
        <div style={{width:'128px', position:'relative', objectFit:'contain', objectPosition:'left 50%'}}>
          <Image 
            src={image}
            alt={commonName ? commonName : sciName}
            fill
          />
        </div>
        <button onClick={()=>getDetails(id)}>Details</button>
        <button>Add to Collection</button>
      </div>
    </li>
    
  )
}

export default SearchPlantCard;