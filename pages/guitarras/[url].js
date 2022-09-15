import Layout from "../../components/Layout"
const Producto = ({guitarra}) => {
    console.log(guitarra)
    const {imagen,nombre,descripcion,precio} =guitarra[0]
  return (
    <Layout
        pagina={`Guitarra ${nombre}`}
    >
      <h1>{nombre}</h1>
    </Layout>
  )
}

export async function getServerSideProps({query:{url}}){
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    console.log(urlGuitarra)
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
    return {
        props: {
            guitarra
        }
    }
}

export default Producto
