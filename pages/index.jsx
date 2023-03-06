import { server } from '../config'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList'
import SearchApi from '../components/SearchAPI'
import SearchPlantCard from '../components/SearchPlantCard'


export default function Home({ articles }) {
  return (
    <>
      <main className={styles.main}>    
        <SearchApi />           
        <SearchPlantCard plants={plants} />
        <ArticleList articles={articles} />
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
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

//for fetching on every request (slower)
//getServersideProps

//getStaticPaths  -to dynamically generate paths based on the data we are fetching