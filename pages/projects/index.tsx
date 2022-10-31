import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import styles from '../../styles/projects/index.module.scss'
// Components
import { Page } from 'components/page'
import PageHeader from 'components/pageheader'
import { projects, ProjectType } from './projects'

const Projects = ({ projects }: { projects: ProjectType[] }): JSX.Element => {
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
        <div className={styles.projectsContainer}>
          {projects.map(project => {
            return (
              <div key={project.name} className={styles.projectMain}>
                <div className={styles.title}>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
                <ul>
                  {project?.points?.map(p => {
                    return <li key={p}>{p}</li>
                  })}
                </ul>
                {/* after heading */}
                <div className={styles.contentContainer}>
                  {/* Links Container */}
                  <div className={styles.linksContainer}>
                    <div className={styles.tags}>
                      <div className={styles.h3ele}>
                        <h3>Built with:</h3>
                      </div>

                      <div className={styles.tagElements}>
                        {project.tagUrls.map(t => (
                          <div key={t} className={styles.tag}>
                            <img src={t} alt={t} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Redirects */}
                    <div className={styles.links}>
                      <div className={styles.link}>
                        <a href={project.links[0] as string} rel="noreferrer" target={'_blank'}>
                          Repository&nbsp;
                          <span style={{ fontWeight: 'bolder' }}>↗︎</span>
                        </a>
                      </div>
                      <div className={styles.link}>
                        <a href={project.links[1] as string} rel="noreferrer" target={'_blank'}>
                          Live&nbsp;
                          <span style={{ fontWeight: 'bolder' }}>↗︎</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </PageHeader>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { projects },
  }
}

export default Projects
