import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <Layout
      pagina='Inicio'
    >
      <h1>Aprendiendo Next.js</h1>
      <Link href='/nosotros'>Ir a Nosotros</Link>
    </Layout
      
    >
  )
}
