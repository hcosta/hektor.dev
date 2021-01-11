import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Edv1 from "../../content/assets/edv_1.png"
import Edv2 from "../../content/assets/edv.gif"

import Mp1 from "../../content/assets/mp_1.png"
import Mp2 from "../../content/assets/mp.gif"

import Hp1 from "../../content/assets/hp_1.png"
import Hp2 from "../../content/assets/hp.gif"

import Sopa1 from "../../content/assets/sopa_1.png"
import Sopa2 from "../../content/assets/sopa.gif"

import Hex1 from "../../content/assets/hexagon.png"
import Hex2 from "../../content/assets/hexagon.gif"

import Brisca1 from "../../content/assets/brisca.png"
import Brisca2 from "../../content/assets/brisca.gif"

import Primi1 from "../../content/assets/primi.png"
import Primi2 from "../../content/assets/primi.gif"

import Eng3d1 from "../../content/assets/eng3d.png"
import Eng3d2 from "../../content/assets/eng3d.gif"

const PortafolioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="portafolio" />

      {/* PROYECTOS*/}

      <h2 style={{fontSize: '1.45em', fontWeight: '600', fontFamily:'Verdana'}}>PROYECTOS</h2>

      <div className="portfolio-el" role="presentation"
        onMouseEnter={e => e.currentTarget.children[0].children[0].src = Hp2} 
        onMouseLeave={e => e.currentTarget.children[0].children[0].src = Hp1}>
        <div className="portfolio-image">
          <img src={Hp1} alt="hp1" />
        </div>
        <div className="portfolio-content">
          <p className="title">Academia Hektor Profe</p>
          <p className="techs"><small><b>2018-?</b> · Nuxt, Django, Firebase</small></p>
          <p className="description">Creada como proyecto a largo plazo mi academia es el espacio donde actualmente comparto pequeños cursos gratuitos sobre programación en diferentes tecnologías basadas en Python y JavaScript. Con más de 5.000 usuarios registrados y 1 millón de visitas únicas en 2020, el proyecto se puede considerar todo un éxito pese a que apenas está empezando a despegar.</p>
          <p className="links">
            [<a href="https://www.hektorprofe.net/"
                target="_blank" rel="noreferrer">Página web</a>]
            [<a href="https://github.com/hektorprofe"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation"
        onMouseEnter={e => e.currentTarget.children[0].children[0].src = Edv2} 
        onMouseLeave={e => e.currentTarget.children[0].children[0].src = Edv1}>
        <div className="portfolio-image">
          <img src={Edv1} alt="edv1" />
        </div>
        <div className="portfolio-content">
          <p className="title">Escuela de videojuegos</p>
          <p className="techs"><small><b>2016-2017</b> · Unity, GameMaker: Studio</small></p>
          <p className="description">Con el objetivo de aprender más sobre desarrollo de videojuegos decidí compartir con el mundo mis nuevos conocimientos en un canal de Youtube. Una cosa llevó a otra y acabé publicando más de 300 vídeos entre tutoriales de Unity y GameMaker: Studio. Tengo el canal abandonado desde hace años pero ha seguido sumando seguidores hasta llegar a más de 80.000, una locura.</p>
          <p className="links">
            [<a href="https://docs.hektorprofe.net/escueladevideojuegos/"
                target="_blank" rel="noreferrer">Página web</a>]
                [<a href="https://www.youtube.com/c/HektorProfe"
                    target="_blank" rel="noreferrer">Canal de Youtube</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation"
        onMouseEnter={e => e.currentTarget.children[0].children[0].src = Sopa2} 
        onMouseLeave={e => e.currentTarget.children[0].children[0].src = Sopa1}>
        <div className="portfolio-image">
          <img src={Sopa1} alt="sopa1" />
        </div>
        <div className="portfolio-content">
          <p className="title">Word Search Puzzle Soupmania</p>
          <p className="techs"><small><b>2015</b> · GameMaker: Studio, Photoshop, Android</small></p>
          <p className="description">Mi primer videojuego profesional fue esta reinvención de la sopa de letras. Incluye tres modos de juego: "Zen" (modalidad con sonidos ambientales pensada para los que buscan paz y tranquilidad), "Clásico" (campaña con temas desbloqueables) y "Desafío" (cuatro retos para poner a prueba tu concentración). Perdí el código fuente y no pude seguir actualizándola, acumuló unas 20.000 descargas.</p>
          <p className="links">
            [<a href="https://apkpure.com/word-search-puzzle-soupmania/com.sopamania.game"
                target="_blank" rel="noreferrer">Web de respaldo</a>]
            [<a href="https://apkpure.com/es/word-search-puzzle-soupmania/com.sopamania.game/download?from=details"
                target="_blank" rel="noreferrer">Instalador APK 15,650 KB</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation"
        onMouseEnter={e => e.currentTarget.children[0].children[0].src = Mp2} 
        onMouseLeave={e => e.currentTarget.children[0].children[0].src = Mp1}>
        <div className="portfolio-image">
          <img src={Mp1} alt="mp1" />
        </div>
        <div className="portfolio-content">
          <p className="title">Manga Phoenix App</p>
          <p className="techs"><small><b>2014-2015</b> · Angularjs, Django, Apache Cordova, Android</small></p>
          <p className="description">Hace años desarrollé un prototipo para leer manga en mi tablet. Alentado por mis colegas, después de unas modificaciones lo publiqué en la Play Store y para mi sorpresa se hizo viral. La app scrapeaba en tiempo real de 13 webs diferentes y alcanzó en muy poco tiempo <a href="https://web.archive.org/web/20160406190801if_/http://mangaphoenixapp.com/img/top.jpg" target="_blank" rel="noreferrer">el Top 1</a> de la categoría Cómics en 6 paises. Nunca imaginé que conseguiría tanta repercusión y me dio un poco de miedito por la ética del proyecto, así que lo retiré. Sin embargo no olvidaré la experiencia que me otorgó en la gestión de una comunidad masiva.</p>
          {/* <p className="links">
            [<a href="https://web.archive.org/web/20160612194111/http://mangaphoenixapp.com/es"
                target="_blank" rel="noreferrer">Web en Wayback Machine</a>]
          </p> */}
        </div>
      </div>


      {/* CONCEPTOS */}


      <h2 style={{fontSize: '1.45em', fontWeight: '600', fontFamily:'Verdana'}}>CONCEPTOS</h2>

      <div className="portfolio-el" role="presentation" style={{minHeight: '150px'}}
        onMouseEnter={e => e.currentTarget.children[0].children[0].src = Eng3d2} 
        onMouseLeave={e => e.currentTarget.children[0].children[0].src = Eng3d1}>
        <div className="portfolio-image">
          <img src={Eng3d1} id="Eng3d" alt="Eng3d1" style={{minHeight: '117px', maxWidth: '200px'}} />
        </div>
        <div className="portfolio-content">
          <p className="title">Experimental 3d engine</p>
          <p className="techs"><small><b>2020</b> · C, SDL2</small></p>
          <p className="description" style={{marginTop:'-5px'}}>Motor de pruebas programado desde cero en C y SDL para estudiar como renderizar gráficos vectoriales en entornos tridimensionales.</p>
          <p className="links" style={{marginTop:'-5px'}}>
            [<a href="https://github.com/hcosta/3d-engine"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation" style={{minHeight: '150px'}}
        onMouseEnter={e => e.currentTarget.children[0].children[0].src = Hex2} 
        onMouseLeave={e => e.currentTarget.children[0].children[0].src = Hex1}>
        <div className="portfolio-image">
          <img src={Hex1} id="e3d" alt="e3d" />
        </div>
        <div className="portfolio-content">
          <p className="title">Hexagon Tribute</p>
          <p className="techs"><small><b>2015</b> · GameMaker: Studio, Android</small></p>
          <p className="description" style={{marginTop:'-4px'}}>Prototipo desarrollado en honor al videojuego Super Hexagon de Terry Cavanagh cuya jugabilidad siempre me ha maravillado.</p>
          <p className="links" style={{marginTop:'-4px'}}>
            [<a href="https://apkpure.com/es/hexagon-tribute/info.hcosta.hexagon.tribute"
                target="_blank" rel="noreferrer">Web de respaldo</a>]
            [<a href="https://apkpure.com/es/hexagon-tribute/info.hcosta.hexagon.tribute/download?from=details"
                target="_blank" rel="noreferrer">Instalador APK 9,410 KB</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation" style={{minHeight: '140px'}}
        onMouseEnter={e => e.currentTarget.children[0].children[0].src = Primi2} 
        onMouseLeave={e => e.currentTarget.children[0].children[0].src = Primi1}>
        <div className="portfolio-image">
          <img src={Primi1} id="brisca" alt="brisca1"/>
        </div>
        <div className="portfolio-content">
          <p className="title">Simulador Primitiva</p>
          <p className="techs"><small><b>2012</b> · Python, WxPython</small></p>
          <p className="description" style={{marginTop:'-5px'}}>Experimento para visualizar las posibilidades de conseguir un premio.</p>
          <p className="links" style={{marginTop:'-5px'}}>
            [<a href="https://github.com/hcosta/primitiva-python"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation" style={{minHeight: '150px'}}
        onMouseEnter={e => e.currentTarget.children[0].children[0].src = Brisca2} 
        onMouseLeave={e => e.currentTarget.children[0].children[0].src = Brisca1}>
        <div className="portfolio-image">
          <img src={Brisca1} id="brisca" alt="brisca1" />
        </div>
        <div className="portfolio-content">
          <p className="title">La Brisca</p>
          <p className="techs"><small><b>2011</b> · Java</small></p>
          <p className="description" style={{marginTop:'-1px'}}>Mi primer juego ever, programado en Java utilizando componentes de la interfaz gráfica en lugar de renderizado en la pantalla.</p>
          <p className="links" style={{marginTop:'-1px'}}>
            [<a href="https://github.com/hcosta/la-brisca"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
            [<a href="https://github.com/hcosta/la-brisca/raw/master/bin/LaBrisca.jar"
                target="_blank" rel="noreferrer">Ejecutable JAR 2,025 KB</a>]
          </p>
        </div>
      </div>


      {/* BIBLIOTECA */}


      <h2 style={{fontSize: '1.45em', fontWeight: '600', fontFamily:'Verdana'}}>BIBLIOTECA</h2>

      <div className="portfolio-el" role="presentation" style={{minHeight: '150px'}}>
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Django Async-fetch</p>
          <p className="techs"><small><b>2018</b> · Python, Django, JavaScript</small></p>
          <p className="description">App experimental pensada para generar llamadas asíncronas a las vistas de Django utilizando la API Fetch de JavaScript. Para lograrlo utilicé un sistema de peticiones a plantillas selectivas a través de un Mixin personalizado.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/django-async-fetch"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation" style={{minHeight: '100px'}}>
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Django Easy-registration</p>
          <p className="techs"><small><b>2013</b> · Python, Django, Twitter Bootstrap</small></p>
          <p className="description">App básica para gestionar el registro y la autenticación de usuarios de forma sencilla y rápida con una configuración mínima. El frontend utiliza Twitter Bootstrap.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/django-easyregistration"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation" style={{minHeight: '100px'}}>
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Migdc-CMS</p>
          <p className="techs"><small><b>2012</b> · PHP</small></p>
          <p className="description">Migdc son las siglas de MI Gestor De Contenidos, un script en PHP para generar sitios web dinámicos. Lo realicé como un proyecto de aprendizaje en 2012 y no está pensado para llevarlo a producción.</p>
          <p className="links">
            [<a href="https://github.com/hcosta/migdc-cms"
                target="_blank" rel="noreferrer">Repositorio Github</a>]
          </p>
        </div>
      </div>

      <div className="portfolio-el" role="presentation" style={{minHeight: '100px'}}>
        <div className="portfolio-content portfolio-content-no-image">
          <p className="title">Xml2Php-Form</p>
          <p className="techs"><small><b>2011</b> · PHP</small></p>
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