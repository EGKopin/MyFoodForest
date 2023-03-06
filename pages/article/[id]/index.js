import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { server } from '../../../config'
import Meta from '../../../components/Meta'

const Article = ({article}) => {
  // const router = useRouter();
  // const { id } = router.query
  
  return  (
  <div>
    <Meta title={article.title} description={article.excerpt} />
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    {/*link to go back to article listing */}
    <Link href='/'>Go back</Link>
  </div>
  )
};

//fetch data at time of request with serverside props. This makes a request each time a page is used. Separately can use getstaticprops & paths to generate the data
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   //context allows us to get all the info in the url

//   const article = await res.json() //this will give us the article

//   return {
//     props:{
//       article //this is passed in on line 4 to the Article
//     }
//   };
// }

//Can also use getstaticprops & paths to generate the data fetched at build time. this is much faster than serverside. Can be used in a static website
export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  //context allows us to get all the info in the url

  const article = await res.json() //this will give us the article

  return {
    props:{
      article //this is passed in on line 4 to the Article
    }
  };
}


//a static website can be created with all that info from the api
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  //context allows us to get all the info in the url
  const articles = await res.json() 

  const ids = articles.map(article => article.id)

  const paths = ids.map(id => ({params:{id:id.toString()}}))

  return {
    /*This is the final format we need the paths in
    paths: {
      params:{id: '1', id:'2'}
    }
    */
    paths,
    fallback:false //if we go to something that doesn't exist, return 404
  }
}

//fetch from API instead! but not working for some reason
      // export const getStaticProps = async (context) => {
      //   const res = await fetch(`${server}/api/articles/${context.params.id}`)

      //   const article = await res.json() 

      //   return {
      //     props:{
      //       article 
      //     }
      //   };
      // }

      // export const getStaticPaths = async () => {
      //   const res = await fetch(`${server}/api/articles`)

      //   const articles = await res.json() 

      //   const ids = articles.map(article => article.id)

      //   const paths = ids.map(id => ({params:{id:id.toString()}}))

      //   return {
      //     paths,
      //     fallback:false
      //   }
      // }


export default Article