import React from "react";
import Head from "next/head";
//Head is used for custom meta tags and titles; great for SEO

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

//add Default props 
Meta.defaultProps = {
  title: 'Webdev news',
  keywords: 'keywords, here',
  description: 'describe'
}


export default Meta;