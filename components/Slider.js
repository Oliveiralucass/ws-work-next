import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ProductCard from './productCard'
import styles from '../styles/slider.module.css'

export default function Slider() {
  return (
    <div className={styles.sliderContainer}>
        <BsChevronLeft size={72}/>
        <div className={styles.sliderContent}>
            <ProductCard product={{name: 'Teste', image:'/images/healthy-food1.webp', price: 1.99}}/>
            <ProductCard product={{name: 'Teste', image:'/images/healthy-food1.webp', price: 8.77}}/>
            <ProductCard product={{name: 'Teste', image:'/images/healthy-food1.webp', price: 3.74}}/>
            <ProductCard product={{name: 'Teste', image:'/images/healthy-food1.webp', price: 6.88}}/>
        </div>
        <BsChevronRight size={72}/>
    </div>
  )
}
