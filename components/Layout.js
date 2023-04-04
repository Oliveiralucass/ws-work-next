import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {

  

  return (
    <div className={styles.layout}>
        <Head>
        <link rel="shortcut icon" href="/images/logows.svg" />
        <title>{'WS Work Sistemas'}</title>
        </Head>

        <Header content={"My Products"}/>

        <div className={styles.container}>
            <Aside />
            <main>
                { children }
            </main>
        </div>
        <Footer />
    </div>
  )
}
