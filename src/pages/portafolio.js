import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortafolioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="portafolio" />

      {/* EDUCACIÓN*/}

      <h2 className="portfolio-h2">EDUCACIÓN</h2>

      <div className="portfolio-el" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Academia Hektor Profe</p>
          <p className="techs"><small>Nuxt, Django, Nginx</small></p>
          <p className="description">Creada como proyecto a largo plazo mi academia es el espacio donde actualmente comparto pequeños cursos gratuitos sobre programación en diferentes tecnologías basadas en Python y JavaScript. Con más de 1 millón de visitas en 2020, el proyecto se puede considerar un éxito.</p>
          <p className="links">
            [<a href="https://www.hektorprofe.net/"
                target="_blank" rel="noreferrer">Página web</a>]
            [<a href="https://github.com/hektorprofe"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el last" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Escuela de videojuegos</p>
          <p className="techs"><small>Unity, GameMaker: Studio</small></p>
          <p className="description">Con el objetivo de aprender más sobre desarrollo de videojuegos decidí compartir con el mundo mis nuevos conocimientos en un canal de Youtube. Una cosa llevó a otra y acabé publicando más de 300 vídeos entre tutoriales de Unity y GameMaker: Studio. Por razones personales me vi obligado a aparcar el proyecto.</p>
          <p className="links">
            [<a href="https://www.youtube.com/channel/UCtjAOyZmqDXO-Oz87cZnWgw"
                target="_blank" rel="noreferrer">Canal de Youtube</a>]
            [<a href="https://docs.hektorprofe.net/escueladevideojuegos/"
                target="_blank" rel="noreferrer">Web de respaldo</a>]
          </p>
        </div>
      </div>


      {/* VIDEOJUEGOS */}


      <h2 className="portfolio-h2">VIDEOJUEGOS</h2>

      <div className="portfolio-el" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Sopamanía</p>
          <p className="techs"><small>GameMaker: Studio, Photoshop, Android</small></p>
          <p className="description">Mi primer videojuego en serio fue esta reinvención de la sopa de letras. Incluye tres modos de juego: "Zen" (modalidad con sonidos ambientales pensada para los que buscan paz y tranquilidad), "Clásico" (campaña con temas desbloqueables) y "Desafío" (cuatro retos para poner a prueba tu concentración). Perdí el código fuente y no pude seguir actualizándola, acumuló 20.000 descargas.</p>
          <p className="links">
            [<a href="https://apkpure.com/word-search-puzzle-soupmania/com.sopamania.game"
                target="_blank" rel="noreferrer">Web de respaldo</a>]
            [<a href="https://apkpure.com/es/word-search-puzzle-soupmania/com.sopamania.game/download?from=details"
                target="_blank" rel="noreferrer">Instalador APK 15,650 KB</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Hexagon Tribute</p>
          <p className="techs"><small>GameMaker: Studio, Android</small></p>
          <p className="description">Prototipo creado en honor al videojuego Super Hexagon de Terry Cavanagh cuya jugabilidad siempre me ha maravillado. Lo desarrollé aplicando ingeniería inversa para comprender cómo funciona todo el proceso de animación geométrica del juego original.</p>
          <p className="links">
            [<a href="https://www.youtube.com/watch?v=ZAMUXEGryWs"
                target="_blank" rel="noreferrer">Tráiler</a>]
            [<a href="https://apkpure.com/es/hexagon-tribute/info.hcosta.hexagon.tribute"
                target="_blank" rel="noreferrer">Web de respaldo</a>]
            [<a href="https://apkpure.com/es/hexagon-tribute/info.hcosta.hexagon.tribute/download?from=details"
                target="_blank" rel="noreferrer">Instalador APK 9,410 KB</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el last" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">La Brisca</p>
          <p className="techs"><small>Java</small></p>
          <p className="description">Juego programado en Java cuando aún no conocía ninguna librería para renderizar, por lo que está desarrollado usando componentes básicos de la interfaz gráfica.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/la-brisca"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
            [<a href="https://github.com/hcosta/la-brisca/raw/master/bin/LaBrisca.jar"
                target="_blank" rel="noreferrer">Ejecutable JAR 2,025 KB</a>]
          </p>
        </div>
      </div>


      {/* APLICACIONES */}


      <h2 className="portfolio-h2">APLICACIONES</h2>

      <div className="portfolio-el" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Prototipo Motor 3D</p>
          <p className="techs"><small>C, SDL2</small></p>
          <p className="description">Programado desde cero en C y SDL para estudiar cómo renderizar gráficos vectoriales en entornos tridimensionales. Gracias a él he podido comprender como se lleva a cabo el "pipeline", desde el buffer de color, vectores, matrices, proyecciones, transformaciones, interpolaciones, clipping, etc.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/3d-engine"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Manga Phoenix</p>
          <p className="techs"><small>Angularjs, Django, Apache Cordova, Android</small></p>
          <p className="description">Hace años desarrollé un prototipo para leer manga en mi tablet. Alentado por mis colegas, después de unas modificaciones lo publiqué en la Play Store y para mi sorpresa se hizo viral. La app scrapeaba en tiempo real de 13 webs diferentes y alcanzó en muy poco tiempo top 1 de la categoría Cómics en 6 paises. Nunca imaginé que conseguiría tanta repercusión y me dio un poco de miedito por la ética del proyecto, así que lo retiré. Sin embargo no olvidaré la experiencia que me otorgó en la gestión de una comunidad masiva.</p>
          <p className="links">
            [<a href="https://web.archive.org/web/20160406190801if_/http://mangaphoenixapp.com/img/top.jpg"
                  target="_blank" rel="noreferrer">Top PNG 353 KB</a>]
            [<a href="https://web.archive.org/web/20160709151959im_/http://mangaphoenixapp.com/img/es/app3.png"
                target="_blank" rel="noreferrer">Promo PNG 162 KB</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el last" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Simulador Primitiva</p>
          <p className="techs"><small>Python, WxPython</small></p>
          <p className="description">Un pequeño experimento del 2012 escrito en Python con una interfaz en WxPython para visualizar las posibilidades de conseguir un premio de cada categoría en base a un número de intentos.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/primitiva-python"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>


      {/* BIBLIOTECA */}


      <h2 className="portfolio-h2">BIBLIOTECA</h2>

      <div className="portfolio-el" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Django Async-fetch</p>
          <p className="techs"><small>Python, Django, JavaScript</small></p>
          <p className="description">App experimental pensada para generar llamadas asíncronas a las vistas de Django utilizando la API Fetch de JavaScript. Para lograrlo utilicé un sistema de peticiones a plantillas selectivas a través de un Mixin personalizado.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/django-async-fetch"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Django Easy-registration</p>
          <p className="techs"><small>Python, Django, Twitter Bootstrap</small></p>
          <p className="description">App básica para gestionar el registro y la autenticación de usuarios de forma sencilla y rápida con una configuración mínima. El frontend utiliza Twitter Bootstrap.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/django-easyregistration"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Migdc-CMS</p>
          <p className="techs"><small>PHP</small></p>
          <p className="description">Migdc son las siglas de MI Gestor De Contenidos, un script en PHP para generar sitios web dinámicos. Lo realicé como un proyecto de aprendizaje en 2012 y no está pensado para llevarlo a producción.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/migdc-cms"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el last" role="presentation">
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Xml2Php-Form</p>
          <p className="techs"><small>PHP</small></p>
          <p className="description">Clase creada con el objetivo de transformar documentos XML en formularios para editarlos fácilmente a través del navegador web a partir de un campo identificador.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/xml2php-form"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <br/>
      <br/>

      <hr />
      <footer>
        <Bio />
      </footer>
    </Layout>
  )
}

export default PortafolioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`