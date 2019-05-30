import Layout from '../components/layout'
import '../src/css/main.scss'

const habilidades = ["Design Responsivo", "Design de Cor", "Solução de Problemas", "Trabalho em Equipe", "Responsabilidade", "Organização"]
const frontEndStack = ["Javascript", "CSS", "HTML5", "Less", "React", "Sass", "Redux", "Bootstrap", "React-Router", "Materialize", "NextJS", "StyledComponents", "JQuery"]
const backEndStack = ["NodeJS", "SQL", "Express", "PostgreSQL", "Webpack", "MongoDB"]
const ferramentas = ["Git", "Windows", "GitHub", "Ubuntu", "Npm"]
const idiomas = ["Português Nativo", "Espanhol Intermediário","Inglês Avançado", "Libras Básico"]

const Habilidades = () => (
        <Layout 
        title="| Habilidades"
        content="Está página contém uma listagem das habilidades e tecnologias que eu conheço e uso, além de idiomas que falo.">
           <h1 className="titulo-pagina">Habilidades & Tecnologias</h1>
           <h3 className="subtitulo-pagina">Habilidades</h3>
               <ul id="habilidadesArr">
                  {
                     habilidades.map((item, id) => {
                        return <li key={id}>{item}</li>
                     })
                  }
               </ul>
            <h3 className="subtitulo-pagina">Front-End</h3>
               <ul className="tecnologiasArr">
                  {
                     frontEndStack.map((item, id) => {
                        return <li key={id}>{item}</li>
                     })
                  }
               </ul>
               <h3 className="subtitulo-pagina">Back-End</h3>
               <ul className="tecnologiasArr">
                  {
                     backEndStack.map((item, id) => {
                        return <li key={id}>{item}</li>
                     })
                  }
               </ul>
               <h3 className="subtitulo-pagina">Ferramentas</h3>
               <ul className="tecnologiasArr">
                  {
                     ferramentas.map((item, id) => {
                        return <li key={id}>{item}</li>
                     })
                  }
               </ul>
            <h3 className="subtitulo-pagina">Idiomas</h3>
               <ul id="idiomasArr">
                  {
                     idiomas.map((item, id) => {
                        return <li key={id}>{item}</li>
                     })
                  }
               </ul>
        </Layout>
  )
  
export default Habilidades
