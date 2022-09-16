import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"

const Blog = ({resultado}) => {
  return (
    <Layout
        pagina='Blog'
    > 
      <main className="contenedor">
        <ListadoBlog
          resultado={resultado}
        />
      </main>
    </Layout>
  )
}
// Manera de utilizar serverSideProps
export async function getServerSideProps() {
  const url =`${process.env.API_URL}/blogs?_sort=createdAt:desc`
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()

  console.log(resultado)
  return {
    props:{
      resultado:resultado

    }
  }
}

export default Blog
