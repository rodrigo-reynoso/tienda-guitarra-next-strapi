import Layout from "../components/Layout"
import Entradas from "../components/Entradas"
import style from '../styles/Blog.module.css'

const Blog = ({resultado}) => {
  return (
    <Layout
        pagina='Blog'
    > 
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={style.blog}>
          {resultado.map(entrada=>( 
            <Entradas
              key={entrada.id}
              entrada={entrada}
            />
          ))}
        </div>
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
