import '../src/css/main.scss'

import Layout from '../components/layout'

import cssLogo from '../src/img/logo-css3.png'
import jsLogo from '../src/img/logo-javascript.png'
import dbLogo from '../src/img/logo-database.png'

const css = ['CSS', 'Less', 'Sass', 'Bootstrap', 'Materialize', 'Styled-Components']
const js = ['JavaScript', 'ReactJS', 'Redux', 'React-Router', 'NextJS', 'JQuery']
const db = ['Node.js', 'SQL', 'PostgreSQL', 'MongoDB']

const Habilidades = () => (
        <Layout 
        title="| Habilidades"
        content="Está página contém uma listagem das habilidades e tecnologias que eu conheço e uso, além de idiomas que falo.">
           <h1 className="titulo-pagina">Habilidades & Tecnologias</h1>
           <div id="skill-list">
                  <ul id="cssArr">
                  <img src={cssLogo}
                  alt="Logo CSS3"/>
                     {
                        css.map((item, id) => {
                           return <li key={id}>{item}</li>
                        })
                     }
                  </ul>
   
                  <ul id="jsArr">
                  <img src={jsLogo}
                  alt="Logo JavaScritp"/>
                     {
                        js.map((item, id) => {
                           return <li key={id}>{item}</li>
                        })
                     }
                  </ul>
                  
                  <ul id="dbArr">
                  <img src={dbLogo}
                  alt="Logo Database"/>
                     {
                        db.map((item, id) => {
                           return <li key={id}>{item}</li>
                        })
                     }
                  </ul>
               </div>
        </Layout>
  )
  
export default Habilidades
