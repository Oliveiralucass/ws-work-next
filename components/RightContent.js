import Image from 'next/image'
import React from 'react'
import styles from '../styles/rightContent.module.css'

export default function RightContent() {
  return (
    <div className={styles.rightContent}>
        <div className={styles.rightContentInfoContainer}>
            <Image src={'/images/water-jar.jpg'} width={160} height={160} alt='Water Jar'/>

            <div className={styles.rightContentInfo}>
                <h2>Best drink</h2>
                <button>FOR FREE</button>
                <p>Long term health</p>
            </div>
        </div>
        
        <p className={styles.rightContentClickHere}>click here and join us with these magical benefits</p>
    </div>
  )
}
