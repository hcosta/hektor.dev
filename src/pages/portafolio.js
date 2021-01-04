import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Edv1 from "../../content/assets/edv_1.png"
import Mp1 from "../../content/assets/mp_1.png"
import Hp1 from "../../content/assets/hp_1.png"
import Sopa1 from "../../content/assets/sopa_1.png"
import Hex1 from "../../content/assets/hexagon.png"

const PortafolioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="portafolio" />

      {/* PROYECTOS*/}

      <h2 style={{fontSize: '1.45em', fontWeight: '600', fontFamily:'Verdana'}}>PROYECTOS</h2>

      <div class="portfolio-el">
        <div class="portfolio-image"><img src={Hp1} alt="hp1" /></div>
        <div class="portfolio-content">
          <p class="title">Academia Hektor Profe</p>
          <p class="techs"><small><b>2018-?</b> · Vue, Nuxt, Django, Firebase</small></p>
          <p class="description">Creada como proyecto a largo plazo mi academia es el espacio donde actualmente comparto pequeños cursos gratuitos sobre programación en diferentes tecnologías basadas en Python y JavaScript. Con más de 5000 usuarios registrados y 1 millón de visitas únicas en 2020, el proyecto se puede considerar todo un éxito pese a que apenas está empezando a despegar.</p>
          <p class="links">
            [<a href="https://www.hektorprofe.net/"
                target="_blank" rel="noreferrer">Página web</a>]
          </p>
        </div>
      </div>

      <div class="portfolio-el">
        <div class="portfolio-image"><img src={Edv1} alt="edv1" /></div>
        <div class="portfolio-content">
          <p class="title">Escuela de videojuegos</p>
          <p class="techs"><small><b>2015-2017</b> · Unity, GameMaker: Studio</small></p>
          <p class="description">Con el objetivo de aprender más sobre desarrollo de videojuegos decidí compartir con el mundo mis nuevos conocimientos en un canal de Youtube. Una cosa llevó a otra y acabé publicando más de 300 vídeos entre tutoriales de Unity y GameMaker: Studio. Tengo el canal abandonado desde hace años pero ha seguido sumando seguidores hasta llegar a más de 80.000, una locura.</p>
          <p class="links">
            [<a href="https://www.youtube.com/c/HektorProfe"
                target="_blank" rel="noreferrer">Canal de Youtube</a>]
            [<a href="https://docs.hektorprofe.net/escueladevideojuegos/"
                target="_blank" rel="noreferrer">Web de respaldo</a>]
          </p>
        </div>
      </div>

      <div class="portfolio-el">
        <div class="portfolio-image"><img src={Sopa1} alt="sopa1" /></div>
        <div class="portfolio-content">
          <p class="title">Sopamanía App</p>
          <p class="techs"><small><b>2015</b> · GameMaker: Studio, Photoshop, Android</small></p>
          <p class="description">Mi primer videojuego publicado, una reinvención de la sopa de letras. Incluye tres modos de juego: "Zen" (modalidad con sonidos ambientales pensada para los que buscan paz y tranquilidad), "Clásico" (campaña con temas desbloqueables) y "Desafío" (cuatro retos para poner a prueba la concentración). Lamentablemente perdí el código fuente y no pude seguir actualizándolo, una pena.</p>
          <p class="links">
            [<a href="https://apkpure.com/es/word-search-puzzle-soupmania/com.sopamania.game/download?from=details"
                target="_blank" rel="noreferrer">Instalador APK 15,650 KB</a>]
            [<a href="https://apkpure.com/es/word-search-puzzle-soupmania/com.sopamania.game"
                target="_blank" rel="noreferrer">Web de respaldo</a>]
          </p>
        </div>
      </div>

      <div class="portfolio-el">
        <div class="portfolio-image"><img src={Mp1} alt="mp1" /></div>
        <div class="portfolio-content">
          <p class="title">Manga Phoenix App</p>
          <p class="techs"><small><b>2014-2015</b> · Angularjs, Apache Cordova, Django, Android</small></p>
          <p class="description"></p>
          <p class="links">
            [<a href="https://web.archive.org/web/20160612194111/http://mangaphoenixapp.com/es"
                target="_blank" rel="noreferrer">Web de 2015 en Wayback Machine</a>]
          </p>
        </div>
      </div>


      {/* EXPERIMENTOS*/}


      <h2 style={{fontSize: '1.45em', fontWeight: '600', fontFamily:'Verdana'}}>EXPERIMENTOS</h2>

      <div class="portfolio-el" style={{minHeight: '150px'}}>
        <div class="portfolio-image"><img src={Hex1} alt="hex1" /></div>
        <div class="portfolio-content">
          <p class="title">Hexagon Tribute</p>
          <p class="techs"><small><b>2015</b> · GameMaker: Studio, Android</small></p>
          <p class="description">Concepto desarrollado en honor al videojuego Super Hexagon de Terry Cavanagh cuya jugabilidad siempre me cautivó.</p>
          <p class="links">
          [Instalador APK 9,410 KB]
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