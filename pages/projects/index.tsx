import { useState } from 'react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import styles from './index.module.scss'
// Components
import { Page } from 'components/page'
import PageHeader from 'components/pageheader'

const Projects = (): JSX.Element => {
  const seoTitle = 'Projects | Sai Shanmukh'
  const seoDesc = 'I am a fullstack js developer and has a keen eye on design'

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://shanmukh.xyz/projects/`,
          description: seoDesc,
          site_name: 'Sai Shanmukh',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <PageHeader title="Projects" description={seoDesc}>
        <>
          <div className={styles.projectsContainer}>
            <div className={styles.project}>
              <div className={styles.title}>
                <h2>Project 1</h2>
              </div>

              <div className={styles.description}>
                <h3>Description</h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate nobis ab incidunt vitae exercitationem
                  officiis, totam doloribus ad, quia harum blanditiis nulla. Suscipit molestias et ut numquam quibusdam beatae. Libero sit
                  omnis ea tempore, laudantium error nemo dignissimos! Odio labore at eaque nemo eveniet voluptates possimus ipsa.
                  Distinctio labore repudiandae sequi voluptatum optio totam necessitatibus magni nisi fugit perferendis?
                </div>
              </div>

              <div className={styles.builtWith}></div>

              <div className={styles.links}></div>
            </div>

            <div className={styles.project}>
              <div className={styles.title}></div>

              <div className={styles.description}></div>

              <div className={styles.builtWith}></div>

              <div className={styles.links}></div>
            </div>
          </div>
        </>
      </PageHeader>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = ['posts']
  return {
    props: { posts },
  }
}

export default Projects
