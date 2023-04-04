import Image from 'next/image'
import React from 'react'
import styles from '../styles/leftContent.module.css'

export default function LeftContent() {
  return (
    <div className={styles.leftContent}>
      <div className={styles.leftContentInfoContainer}>
        <Image 
          src={'/images/apple.jpg'}
          width={160}
          height={160}
          alt={"Apple"}
        />
        <div className={styles.leftContentInfo}>
            <h2>Only $0.22</h2>
            <p>Healthy power pills</p>
            <p>Most Healthy for u</p>
            <span>cheap and powerful remedy for long term healing</span>
        </div>
      </div>

      <button>BUY NOW</button>
    </div>
  )
}
