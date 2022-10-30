import React, { useEffect, useState } from 'react'

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
        <button
          style={{
            position: 'fixed',
            bottom: '10%',
            right: '10%',
            width: '50px',
            height: '50px',
          }}
          onClick={() => scrollUp()}
        >
          ^
        </button>
      )}
    </div>
  )
}

export default BackToTopButton
