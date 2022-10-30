import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdNorthEast } from 'react-icons/md'
import styles from '../styles/mainheader.module.scss'

export function SocialIcons({ scrollFunction }: any) {
  return (
    <>
      <div className={styles.socialIconsContainer}>
        <div className={styles.header__socialIcons}>
          <div>
            <FaGithub />
            <a target="_blank" href="https://github.com/0xHecker" rel="noopener noreferrer" className={styles.iconNames}>
              Github
            </a>
            <MdNorthEast />
          </div>
          <div>
            <FaTwitter />
            <a target="_blank" href="https://twitter.com/msshanmukh" rel="noopener noreferrer" className={styles.iconNames}>
              Twitter
            </a>
            <MdNorthEast />
          </div>
          <div>
            <FaLinkedin />
            <a target="_blank" href="https://linkedin.in/saishanmukhm" rel="noopener noreferrer" className={styles.iconNames}>
              LinkedIn
            </a>
            <MdNorthEast />
          </div>
        </div>
      </div>
      <div className={styles.divSayHi}>
        <a onClick={() => scrollFunction()} className={styles.sayHi}>
          Say Hi 👋
        </a>
      </div>
    </>
  )
}
