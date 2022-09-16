import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'


export default function Home({guitarras,curso, lasTresEntradas: resultado}) {
  console.log(curso)
  return (
    <Layout
      pagina='Inicio'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Coleccion</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>
      <Curso
        guitarras={guitarras}
        curso={curso}
      />
      <section className='contenedor'>
        <ListadoBlog
          resultado={resultado}
        />
      </section>
    </Layout>
  )
}
export async function getServerSideProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCurso = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createAt:desc`

  const [resGuitarras,resCurso,resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlog)
  ])
  const [guitarras,curso,lasTresEntradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlogs.json()
  ])
  return {
    props:{
      guitarras,
      curso,
      lasTresEntradas
    }
  }
}