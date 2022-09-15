import Link from "next/link"
import Image from "next/image"
import { formatearFecha } from "../helpers"
import style from "../styles/Entradas.module.css"

const Entradas = ({entrada}) => {
    const {titulo,resumen,imagen,published_at,id,url} = entrada
  return (
    <article>
        <Image priority='true' layout="responsive" width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`} />
        <div className={style.contenido}>
            <h3>{titulo}</h3>
            <p className={style.fecha}>{formatearFecha(published_at)}</p>
            <p className={style.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                <a className={style.enlace}>
                    Leer Entrada
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Entradas
