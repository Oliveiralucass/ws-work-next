import Image from 'next/image'
import React from 'react'
import styles from '../styles/banner.module.css'

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
        <Image className={styles.bannerImage} src={'/images/suplements.jpg'} width={500} height={200} alt="suplements"/>

        <div className={styles.bannerStats}>
            <h1>$ 9,99</h1>
            <p>super supplement for your health and well-being.
            natural and 100% functional, take advantage of this offer
            </p>
            <button>Buy</button>
        </div>
    </div>
  )
}
