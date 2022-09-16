import Image from "next/image"
import Layout from "../../components/Layout"
import style from "../../styles/Guitarra.module.css"
const Producto = ({guitarra}) => {
    console.log(guitarra[0])// me doy cuenta que getServer me devuelve un array siempre
    const {imagen,nombre,descripcion,precio} =guitarra[0]
  return (
    <Layout
        pagina={`Guitarra ${nombre}`}
    >
      <div className={style.guitarras}>
      <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Imagen ${nombre}`} />
      <div className={style.contenido}>
        <h3>{nombre}</h3>
        <p className={style.descripcion}>{descripcion}</p>
        <p className={style.precio}>${precio}</p>
        <form className={style.formulario}>
          <label>Cantidad: </label>
          <select>
            <option value=''>-- Seleccione --</option>
            <option value=''>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
          <input 
            type='submit'
            value='Agregar al Carrito'  
          />
        </form>
      </div>
    </div>
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
