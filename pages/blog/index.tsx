import { useState } from 'react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Search } from 'react-feather'

// Components
import { Page } from 'components/page'
import PageHeader from 'components/pageheader'
import Input from 'components/input'
import PostList from 'components/postlist'

// Utils
import { pick } from '@contentlayer/client'
import { allPosts, Post } from 'contentlayer/generated'

import styles from './index.module.scss'
import { MainTags } from 'components/tagsMain'

type BlogProps = {
  posts: Post[]
}

const Blog = ({ posts }: BlogProps): JSX.Element => {
  const [currentSearch, setCurrentSearch] = useState('')

  const seoTitle = 'Blog | Sai Shanmukh'
  const seoDesc = 'I write about WebDev, React, CSS, Typescript and more!'
  const filteredPosts = posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter(({ title, summary, tags }) => {
      const searchString: any = `${title.toLowerCase()} ${summary.toLowerCase()} ${tags?.join(' ')}`
      return searchString.includes(currentSearch.toLowerCase())
    })

  const handleInputChange = (e: { target: { value: any } }) => {
    const searchString = e.target.value
    return setCurrentSearch(searchString)
  }

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://shanmukh.xyz/blog/`,
          description: seoDesc,
          site_name: 'Sai Shanmukh',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <PageHeader title="Blog" description={seoDesc}>
        <>
          <div className={styles.inputWrapper}>
            <Input className={styles.input} value={currentSearch} onChange={handleInputChange} placeholder="Search posts…" type="search" />
            <Search className={styles.inputIcon} />
          </div>
          <MainTags posts={posts} />
        </>
      </PageHeader>

      <PostList posts={filteredPosts} />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(post => pick(post, ['slug', 'title', 'summary', 'publishedAt', 'image', 'readingTime', 'tags']))

  return {
    props: { posts },
  }
}

export default Blog
