import React from 'react'
import styles from '../styles/breakcomponent.module.scss'

interface Props {
  marginTop?: string
  marginBottom?: string
}

const BreakComponent = ({ marginTop, marginBottom }: Props) => {
  return (
    <div
      className={styles.dividerContainer}
      style={{
        marginTop: `${marginTop ?? 0}`,
        marginBottom: `${marginBottom ?? 0}`,
      }}
    >
      <DividerSVG />
    </div>
  )
}

const DividerSVG = () => {
  return (
    <svg className="m-auto my-10" width="400" viewBox="0 0 687 155" xmlns="http://www.w3.org/2000/svg" height="155">
      <path
        d="M50 77.0985675c57.682381 16.335764 106.029772 25.2364935 145.042173 26.7021875C253.560775 105.999297 303.046718 67.0985675 343.5 67.0985675c33.974876 0 38.068513 19.974258 75.003704 20.3507117 36.93519.3764536 47.062641-19.2199337 71.996296-20.3507117 36.75-1.6666667 55.082027 18.333215 73.5 20 18.417973 1.6667849 27.75-18.3333334 37-20 9.25-1.6666667 12.410953 18.331768 18.5 20 4.059364 1.1121546 10.059364-5.5545121 18-20"
        stroke="#fb6060"
        strokeWidth="11px"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
      ></path>
    </svg>
  )
}

export default BreakComponent
