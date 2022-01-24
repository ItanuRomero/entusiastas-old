import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'



export default function Home() {
  return (
    <Layout home>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Entenda sobre o projeto {' '}
          <Link href="/blog/sobre">
            <a>Clicando aqui</a>
          </Link>
        </p>
      </section>
      <footer>
        
          <p>
            Created by <a href="https://github.com/ItanuRomero">Itanu Romero</a>
          </p>
        
      </footer>
    </Layout>   
  )
}

const Logo = () => {
  <Image
    src="/images/logo.jpg"
    height={144}
    width={144}
    alt="Your Name"
  />
}
