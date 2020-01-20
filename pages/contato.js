import Layout from '../components/layout'
import iconGmail from '../src/img/gmail-icon.png'
import iconGithub from '../src/img/github-icon.png'
import iconLinkedin from '../src/img/linkedin-icon.png'

import '../src/css/main.scss'

const Contato = () => (
        <Layout 
        title="| Contatos"
        content="Está página contém meus contatos de email, github e linkedin.">
           <h1 className="titulo-pagina">Meus contatos</h1>
           <ul id="contatos">   
               <li><img src={iconGmail} alt="logo gmail"/>
                  <h2>giselemaraleo@gmail.com</h2>
                </li>
               <li><img src={iconGithub} alt="logo github"/>
                  <h2><a href="https://github.com/giseleml" target="_blank" rel="noopener">Github</a></h2>
                </li>
               <li><img src={iconLinkedin} alt="logo linkedin"/>
                  <h2><a href="https://linkedin.com/in/gisele-leonardi-724245176/" target="_blank" rel="noopener">Linkedin</a></h2>
                </li>
            </ul>
        </Layout>
  )
  
export default Contato