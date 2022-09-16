import Entradas from "../components/Entradas"
import style from '../styles/Blog.module.css'

const ListadoBlog = ({resultado}) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
        <div className={style.blog}>
          {resultado.map(entrada=>( 
            <Entradas
              key={entrada.id}
              entrada={entrada}
            />
          ))}
        </div>
    </>
  )
}

export default ListadoBlog
