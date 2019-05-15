import Layout from '../components/layout'

import '../src/css/main.scss'

const Contato = () => (
        <Layout>
           <h1 className="titulo-pagina">Meus contatos</h1>
           <ul id="contatos">   
               <li><img src="https://img.icons8.com/color/96/000000/gmail.png" alt="logo gmail"/>
                  <h2>giselemaraleo@gmail.com</h2>
                </li>
               <li><img src="https://img.icons8.com/color/96/000000/github-2.png" alt="logo github"/>
                  <h2><a href="https://github.com/giseleml" target="_blank">Github</a></h2>
                </li>
               <li><img src="https://img.icons8.com/color/96/000000/linkedin.png" alt="logo linkedin"/>
                  <h2><a href="https://linkedin.com/in/gisele-leonardi-724245176/" target="_blank">Linkedin</a></h2>
                </li>
            </ul>
        </Layout>
  )
  
export default Contato