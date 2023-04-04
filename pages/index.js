import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import LeftContent from '../components/LeftContent'
import RightContent from '../components/RightContent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <hr />
      <Slider />
      
      <div className={styles.mainContent}>
        <LeftContent /> 
        <div className={styles.divisor}></div>
        <RightContent />
      </div>
    </div>
  )
}
