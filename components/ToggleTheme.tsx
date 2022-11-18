import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, LayoutGroup } from 'framer-motion'
import styles from '../styles/toggletheme.module.scss'
import useSound from 'use-sound'

// import lightsOn from "/sounds/lights_on.mp3";

export const variants = ['light', 'dark']
{
  /* <audio id="play" controls src="/sounds/lights_on.mp3" />; */
}

const transition = {
  type: 'spring',
  stiffness: 200,
  damping: 10,
}

export const MoonIcon = () => {
  const variants = {
    initial: { scale: 0.6, rotate: 90 },
    animate: { scale: 1, rotate: 0, transition },
    whileTap: { scale: 0.95, rotate: 90 },
  }

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 50 50" key={'moon'}>
      <motion.path
        d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
        fill="currentColor"
        initial="initial"
        animate="animate"
        whileTap={'whileTap'}
        variants={variants}
      />
    </motion.svg>
  )
}

export const SunIcon = () => {
  const whileTap = { scale: 0.95, rotate: 15 }
  const raysVariants = {
    initial: { rotate: 45 },
    animate: { rotate: 90, transition },
  }
  const coreVariants = {
    initial: { scale: 0.6 },
    animate: { scale: 1, transition },
  }

  return (
    <motion.svg
      key={'sun'}
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      fill="none"
      whileTap={whileTap}
      // Centers the rotation anchor point vertically & horizontally
      style={{ originX: '50%', originY: '50%' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="11.9998"
        cy="11.9998"
        r="5.75375"
        fill="currentColor"
        initial="initial"
        animate="animate"
        variants={coreVariants}
      />
      <motion.g initial="initial" animate="animate" variants={raysVariants}>
        <circle cx="3.08982" cy="6.85502" r="1.71143" transform="rotate(-60 3.08982 6.85502)" fill="currentColor" />
        <circle cx="3.0903" cy="17.1436" r="1.71143" transform="rotate(-120 3.0903 17.1436)" fill="currentColor" />
        <circle cx="12" cy="22.2881" r="1.71143" fill="currentColor" />
        <circle cx="20.9101" cy="17.1436" r="1.71143" transform="rotate(-60 20.9101 17.1436)" fill="currentColor" />
        <circle cx="20.9101" cy="6.8555" r="1.71143" transform="rotate(-120 20.9101 6.8555)" fill="currentColor" />
        <circle cx="12" cy="1.71143" r="1.71143" fill="currentColor" />
      </motion.g>
    </motion.svg>
  )
}

const getIcon = (variant: string) => {
  if (variant === 'dark') {
    return MoonIcon()
  }
  if (variant === 'light') {
    return SunIcon()
  }
  return SunIcon()
}

const ToggleTheme = (): JSX.Element => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()
  const [play] = useSound('/sounds/lights_on.mp3')

  // When mounted on client, now we can show the UI
  useEffect(() => {
    if (theme !== 'light' && theme !== 'dark') {
      setTheme('system')
    }
    setMounted(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!mounted) return <div className={styles.wrapper} /> // skeleton on server

  return (
    <LayoutGroup id="a">
      <div
        className={styles.wrapper}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          play()
          {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }
        }}
      >
        <span className={styles.buttonLabel}>{getIcon(theme ?? 'light')}</span>
      </div>
    </LayoutGroup>
  )
}

export default ToggleTheme
