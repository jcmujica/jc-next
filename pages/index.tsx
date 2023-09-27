import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from 'components/Footer/Footer'
import { Navbar } from 'components/Navbar/Navbar'
import { Hero } from 'components/Sections/Hero/Hero'
import { About } from 'components/About/About'
import { Skills } from 'components/Skills/Skills'
import { Projects } from 'components/Projects/Projects'
import { Experience } from 'components/Experience/Experience'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JC Mujica - Front end developer</title>
        <meta name="description" content="JC Mujica: Experienced Frontend Developer & React.js Specialist | 5+ Years of Expertise | Skilled in Node.js Backend Development | Explore My Portfolio for Stunning Web Apps and Interfaces." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default Home
