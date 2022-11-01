import { Page } from 'components/page'
import Link from 'next/link'
import styles from '../styles/404.module.scss'
import Image from 'next/image'

const Custom404 = () => {
  return (
    <main>
      <Page>
        <div className={styles.Container404}>
          <h2>404 - That page does not seems to exist..</h2>
          <div>
            <Image src={'/rickmorty_falling.webp'} alt={'falling'} width={'480px'} height={'270px'} />
          </div>
          <Link href={'/'}>
            <button className={styles.homeButton}>Go Home</button>
          </Link>
        </div>
      </Page>
    </main>
  )
}

export default Custom404
