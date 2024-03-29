import Head from 'next/head' //Head is used for custom meta tags and titles; great for SEO
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Meta from '../components/Meta' // to have different Meta data for the page...
import AnnualContainer from '../containers/AnnualContainer'
import AnnualDetails from '../components/PlantComponents/AnnualDetails'
import { useState } from 'react'


export default function AHome() {
  const [currentID, setCurrentID] = useState(null)
  const [ updateModal, setUpdateModal ] = useState(false);

  return (
    <>
    <Meta title='about' /> 
    {/* this will overwrite the default */}
      <Head>
        <title>My Food Forest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="annuals, food forest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
           <h1>Annuals</h1>
           <div className='mainPlantPage'>
            <AnnualContainer 
              setID={setCurrentID}
              setUpdateModal={setUpdateModal}
              />
            <AnnualDetails 
              currentID={currentID}
              setUpdateModal={setUpdateModal}
              updateModal={updateModal}
            />
           </div>
      </main>
    </>
  )
}