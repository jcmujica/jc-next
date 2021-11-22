import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from 'components/Footer/Footer'
import { Navbar } from 'components/Navbar/Navbar'
import { Hero } from 'components/Sections/Hero/Hero'
import { About } from 'components/About/About'
import { Skills } from 'components/Skills/Skills'
import styles from 'styles/Home.module.css'
import { Contact } from 'components/Contact/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
