import Image from "next/image"
import React from 'react'
import styles from '../styles/productCard.module.css'

export default function ProductCard({product}) {
  return (
    <div className={styles.productCard}>
        <Image
        src={product.image}
        width={160}
        height={80}
        alt={product.name}
        />
        <p>{`$${product.price}`}</p>
    </div>
  )
}
