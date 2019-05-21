import Layout from '../components/layout'

import '../src/css/main.scss'

const Contato = () => (
        <Layout>
           <h1 className="titulo-pagina">Meus contatos</h1>
           <ul id="contatos">   
               <li><img src="https://4.bp.blogspot.com/-F-E0vK0Uty8/XNxx5mi_dyI/AAAAAAAAAsA/rZ7Vt9TDmx0-60RE3mB11_FgkpdfQpeRQCLcBGAs/s1600/gmail.icon.png" alt="logo gmail"/>
                  <h2>giselemaraleo@gmail.com</h2>
                </li>
               <li><img src="https://2.bp.blogspot.com/-ye8gfxMHM3k/XNxx5Nyel-I/AAAAAAAAAr8/tzLmszb8arcB2od8a6RPfghDGirKC1DoACLcBGAs/s1600/github-icon.png" alt="logo github"/>
                  <h2><a href="https://github.com/giseleml" target="_blank">Github</a></h2>
                </li>
               <li><img src="https://2.bp.blogspot.com/-7YjAuWPQfro/XNxx6opaztI/AAAAAAAAAsI/nerJLvZOJX8InfAxQro3pTyYkB9IITsrACLcBGAs/s1600/linkedin-ico.png" alt="logo linkedin"/>
                  <h2><a href="https://linkedin.com/in/gisele-leonardi-724245176/" target="_blank">Linkedin</a></h2>
                </li>
            </ul>
        </Layout>
  )
  
export default Contato