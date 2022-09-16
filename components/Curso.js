import style from "../styles/Curso.module.css"
const Curso = ({curso}) => {
    const {Titulo,Contenido,Imagen} = curso
    console.log(curso.Contenido)

  return (
    <section>
      <div className={`contenedor ${style.grid}`}>
        
        <div className={style.contenido}>
            <h2 className="heading">{Titulo}</h2>
            <p className={style.texto}>{Contenido}</p>

            <a href="#" className={style.enlace}>Más Información</a>
        </div>
      </div>
      <style jsx>{`
        section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(to right,rgb(0 0 0 / .65),rgb(0 0 0 / .7)), url(${Imagen.url});
            background-size: cover;
            background-position: 50%;
        }
      
      `}</style>
    </section>
  )
}

export default Curso
