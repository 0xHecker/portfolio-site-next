import React, { useEffect, useState } from 'react'
import { GoChevronUp } from 'react-icons/go'
import styles from '../styles/page.module.scss'

const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBackToTop(true)
        return
      }
      setBackToTop(false)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 200) {
          setBackToTop(true)
          return
        }
        setBackToTop(false)
      })
    }
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {backToTop && (
        <div className={styles.scrollToTop} onClick={() => scrollUp()}>
          <span>
            <GoChevronUp />
          </span>
        </div>
      )}
    </div>
  )
}

export default BackToTopButton
