import Head from 'next/head' //Head is used for custom meta tags and titles; great for SEO
import styles from '../styles/Layout.module.css'
import Meta from '../components/Meta' // to have different Meta data for the page...
import { Timeline } from '../components/Timeline';
import TimelineFilters from '../components/TimelineFilters';
import { useState } from 'react';


export default function TimelinePage() {
  const [ categories, setCategories ] = useState({
    pruning: [],
    budBreak: [],
    flowering: [],
    fruiting: [],
  });

  return (
    <>
    <Meta title='Timeline' /> 
      <Head>
        <title>Food Forest | Timeline</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="perennials, food forest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Timeline</h1>
        <TimelineFilters 
          setCategories={setCategories}    
        />
        <section>
          <Timeline
            categories={categories}  
          />
        </section>
      </main>
    </>
  )
}