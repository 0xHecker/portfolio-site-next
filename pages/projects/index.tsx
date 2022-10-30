import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import styles from '../../styles/projects/index.module.scss'
import { imgPaths } from 'utils/imgPaths'
// Components
import { Page } from 'components/page'
import PageHeader from 'components/pageheader'

export const project = {
  name: 'Reddit Clone',
  descreption:
    'Lorem ipsum dolor sit amet consectetur dolor officia recnt tenetur similique porro adipisicing elit. Architecto quae enim sit quas',
  videoSrc: 'https://res.cloudinary.com/dhysgd2qs/video/upload/fl_lossy/v1665771689/screen-capture-2_koyesv.mkv',
  tagUrls: [
    imgPaths['Next.js'].path,
    imgPaths['Typescript'].path,
    imgPaths['GraphQL'].path,
    imgPaths['Apollo'].path,
    imgPaths['postgreSQL'].path,
    imgPaths['redis'].path,
    imgPaths['typeorm'].path,
    imgPaths['express'].path,
    imgPaths['docker'].path,
  ],
  links: ['https://github.com/0xHecker/beddit-web', 'https://beddit-lac.vercel.app/'],
}

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
        <div className={styles.projectsContainer}>
          <div className={styles.projectMain}>
            <div className={styles.title}>
              <h2>{project.name}</h2>
              <p>{project.descreption}</p>
            </div>
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

          <div className={styles.projectMain}>
            <div className={styles.title}>
              <h2>{project.name}</h2>
              <p>{project.descreption}</p>
            </div>
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
                      Repo&nbsp;
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
        </div>
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
