import Layout from '../components/layout'

const habilidades = ["JavaScript", "CSS", "HTML5", "Design Responsivo", "Design de Cor", "SQL"]
const tecnologias = ["ReactJS", "JQuery", "Bootstrap", "Sass", "Less", "Styled Components", "Materialize", "PostgreSQL", "MongoDB", 
"Git", "GitHub", "Ubuntu", "Windows", "Npm"]

const Habilidades = () => (
        <Layout>
           <h1>Habilidades & Tecnologias</h1>
           <h3>Habilidades</h3>
            <ul id="habilidadesArr">
               {
                  habilidades.map((item, id) => {
                     return <li key={id}>{item}</li>
                  })
               }
            </ul>
            <h3>Tecnologias</h3>
            <ul id="tecnologiasArr">
               {
                  tecnologias.map((item, id) => {
                     return <li key={id}>{item}</li>
                  })
               }
            </ul>
        </Layout>
  )
  
export default Habilidades
