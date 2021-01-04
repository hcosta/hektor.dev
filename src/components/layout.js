import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <h1 className="main-heading">
      <Link to="/">&nbsp;hektor<span className="dot">.</span>dev</Link>
    </h1>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <div className="menu" style={{marginTop: '-25px', textAlign: 'right', background: '#00C90F'}} >
          <div className="menu-content">
            <Link className="header-link-home" to="/">
              Blog
            </Link>&nbsp;&nbsp;&nbsp;
            {/* <a href="https://github.com/hcosta" target="_blank"  rel="noreferrer" className="header-link-home">Github</a>&nbsp;&nbsp; */}
            <Link className="header-link-home" to="/portafolio">
              Portafolio
            </Link>&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <small>©</small> {new Date().getFullYear()} · Powered by
          {` `}
          <a href="https://www.gatsbyjs.com" rel="noreferrer" target="_blank">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
