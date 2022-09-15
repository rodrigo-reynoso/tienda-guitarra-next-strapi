import Link from "next/link"
import style from '../styles/NoEncontrado.module.css'
const PaginaNoEncontrada = () => {
  return (
        <div className={style.no_encotrado}>
            <h1 className="heading">Página no encontrada</h1>             
            <Link href='/'>Volver a Inicio</Link>  
        </div>
  )
}

export default PaginaNoEncontrada
