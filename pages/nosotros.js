/* import Link from 'next/link' */
import Image from 'next/image'
import style from '../styles/Nosotros.module.css'
import Layout from '../components/Layout'


const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={style.contenido}>
            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='iamgen de nosotros' />
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies scelerisque felis rutrum mattis. Etiam velit lorem, dignissim at euismod a, interdum eget metus. Ut tincidunt, massa eget gravida eleifend, nulla risus tempor dolor, quis sollicitudin tortor sapien in elit.</p>

                <p>Integer lacinia purus non diam venenatis mattis. Curabitur vel lectus eget eros hendrerit sodales ut vel dolor. Suspendisse ultricies, erat lobortis tempus maximus, quam enim luctus orci, in tempus nisl erat eu sem. Maecenas lacinia risus id purus sollicitudin accumsan. Suspendisse potenti. Praesent eu est cursus ante interdum porta. Proin tincidunt pulvinar magna efficitur luctus. .</p>
            </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
