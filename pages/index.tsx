import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
        <div className={styles.grid}>
          
          <Button link="https://nextjs.org/learn" className= {styles.card}>
        <h2>Encontre o erro </h2>
        <p >
        Existe um erro neste arquivo. Veja que este bloco aparece diferente na tela.
        </p>
          </Button>

          <Button link="https://nextjs.org/docs" className= {styles.card}>
            <h2>Crie um repositório &rarr;</h2>
            <p>Após concluir o trabalho suba o código no github do grupo</p>
          </Button>

          <Button link="https://github.com/vercel/next.js/tree/canary/examples" className= {styles.card}>
            <h2>Evite componentes demais &rarr;</h2>
            <p>Crie somente componentes essenciais.</p>
          </Button>

          <Button link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className= {styles.card}>
            <h2>Trabalho em grupo &rarr;</h2>
            <p>
              Ajude para que todos do grupo participe, envolva-se.
            </p>
          </Button>
          </div>
          <Footer/>
      </main>

      
    </div>
  )
}

export default Home
