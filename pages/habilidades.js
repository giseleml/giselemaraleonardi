import Layout from '../components/layout'
import '../src/css/main.scss'



const habilidades = ["JavaScript", "CSS", "HTML5", "SQL", "Design Responsivo", "Design de Cor", "Solução de Problemas", "Trabalho em Equipe"]

const tecnologias = ["ReactJS", "JQuery", "Bootstrap", "Sass", "Less", "Styled Components", "Materialize", "PostgreSQL", "MongoDB", 
"Git", "GitHub", "Ubuntu", "Windows", "Npm"]

const idiomas = ["Português Nativo", "Inglês Avançado", "Espanhol Intermediário", "Libras Básico"]

const Habilidades = () => (
        <Layout>
           <h1 className="titulo-pagina">Habilidades & Tecnologias</h1>
           <h3 className="subtitulo-pagina">Habilidades</h3>
               <ul id="habilidadesArr">
                  {
                     habilidades.map((item, id) => {
                        return <li key={id}>{item}</li>
                     })
                  }
               </ul>
            <h3 className="subtitulo-pagina">Tecnologias</h3>
               <ul id="tecnologiasArr">
                  {
                     tecnologias.map((item, id) => {
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
