// import { useRouter } from "next/router" 
import Image from 'next/image'
import {formatearFecha} from '../../helpers'
import Layout from '../../components/Layout'
import style from '../../styles/Entradas.module.css'
const EntradaId = ({entrada}) => {
    /* Hook que lee la url su parametro que puede llamarse como uno quiera
    const router = useRouter()
    console.log(router.query)*/
    const {titulo,contenido,imagen,published_at} = entrada
    console.log(entrada)
     const url = `${process.env.NEXT_PUBLIC_API_URL}`
    console.log(url)
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={style.entrada}>
          <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
        </article>
        <div className={style.contenido}>
          <p className={style.fecha}>{formatearFecha(published_at)}</p>
          <p className={style.texto}>{contenido}</p>
        </div>
      </main>
    </Layout>
  )
}
// MANERA MAS EFECTIVA DE HACERLO CUANDO ES ROUTING DINAMICO
export async function getStaticPaths(){
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradasArray = await respuesta.json()
  // Me va a retornar un nuevo arreglo
  const paths = entradasArray.map(entrada=>({
    params:{url:entrada.url}
    //params:{entrada:entrada.entrada.toString()} como es id y es numero en la url va string
  }))
  return {
    paths,
    fallback:false
  }
}
export async function getStaticProps ({params:{url}}){
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
  
  //const url = `${process.env.API_URL}/blogs/${id}`

  const respuesta = await fetch(urlBlog)
  const entrada = await respuesta.json()
  return {
    props:{
      entrada:entrada[0]
    }
  }
}
// SEGUNDA MANERA MENOS EFECTIVA DE ROUTING DINAMICO, MAS FACIL!!!!
/*export async function getServerSideProps({query:{id}}){
    const url = `${process.env.API_URL}/blogs/${id}`
    const url = `http://localhost:1337/blogs/${id}`
    console.log(url)
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()
    return {
        props:{
            entrada:entrada
        }
    }
}*/
export default EntradaId
