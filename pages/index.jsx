import { useContext, useEffect } from 'react';
import { server } from '../config';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import ArticleList from '../components/ArticleList';
import { Context } from '../components/Context';



// export default function Home({ articles }) {
  
export default function Home () {
  const { allPlants, setAllPlants } = useContext(Context)

  const getPlants = () => {
    fetch(`${server}/api/GetAllPlants`)
    .then(res => res.json())
    .then(allPlants => { 
      setAllPlants(allPlants);
      })
    .catch ((err) => console.log('error in getPlants', err))
  }

  useEffect(() => {
    getPlants();
  }, [])

  return (
    <>
      <main className={styles.main}>    

        {/* <ArticleList articles={articles} /> */}
      </main>
    </>
  )
}

//for data fetching; 3 methods

//For fetching at build time
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

//call to API; requires absolute URL
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

//for fetching on every request (slower)
//getServersideProps

//getStaticPaths  -to dynamically generate paths based on the data we are fetching