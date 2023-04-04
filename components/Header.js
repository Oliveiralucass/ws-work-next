import React from 'react'
import styles from '../styles/header.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header({ content }) {

  const route = useRouter();

  route.query

  return (
    <div className={styles.header}>
      <Image  src={'/images/logows.svg'} width={48} height={48} alt={"WS Logo"}/>
      <div className={styles.headerTextContainer}>
        <h1 className={styles.headerText}>{content}</h1>
      </div>
    </div>
  )
}
