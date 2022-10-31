/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { imgPaths } from '../utils/imgPaths'
import styles from '../styles/iconscontainer.module.scss'

const IconsComponent = () => {
  return (
    <section className={styles.aboutSection}>
      <div>
        <h2 className={styles.heading}>Tech Stack</h2>
      </div>
      <div className={styles.iconContainer}>
        {Object.entries(imgPaths).map(item => {
          if (item[0] == 'dockerLogo') {
            return
          }
          return (
            <div className={styles.icons} key={item[0]}>
              <a rel="noopener noreferrer" target="_blank" href={`${item[1].website}`}>
                <span>{item[0]}</span>
                <img src={`${item[1].path}`} alt={`${item[0]}`} />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default IconsComponent
