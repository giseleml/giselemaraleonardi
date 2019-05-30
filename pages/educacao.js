import Layout from '../components/layout'
import Timeline from '../components/timeline'
import '../src/css/main.scss'
import '../src/css/timeline.scss'

const Educacao = () => {
   const eduData = [
      {
         instituto: "Faculdades Metropolitanas Unidas (FMU)",
         ano: "2016-2018",
         formacao: "Psicologia"
      },
      {
         instituto: "FreeCodeCamp",
         ano: 2018,
         formacao: "Responsive Web Design",
         certificado: "https://www.freecodecamp.org/certification/giseleml/responsive-web-design"
      },
      {
         instituto: "CodeAcademy",
         ano: 2018,
         formacao: "JavaScript, React, JQuery, Sass, Color Design"
      },
      {
         instituto: "Udemy Academy",
         ano: 2018,
         formacao: "React, Web Development"
      }, 
      {
         instituto: "Udacity",
         ano: 2018,
         formacao: "Responsive Web Design Fundamentals by Google"
      },
      {
         instituto: "Stanford University",
         ano: 2019,
         formacao: "Computer Science 101",
         certificado: "https://prod-cert-bucket.s3.amazonaws.com/downloads/7473129e7a2247109abf5db12e30d47e/Statement.pdf"
      },
      {
         instituto: "FreeCodeCamp",
         ano: 2019,
         formacao: "Front End Libraries",
         certificado: "https://www.freecodecamp.org/certification/giseleml/front-end-libraries"
      },
      {
         instituto: "Unicesumar",
         ano: 2019,
         formacao: "Superior de Tecnologia em Sistemas para Internet"
      }
   
   ]
      return (
         <Layout 
         title="| Educação"
         content="Está página contém meus cursos concluídos.">       
            <h1 className="titulo-pagina">Meus estudos</h1>
            <h3 className="subtitulo-pagina">2016</h3>
            <Timeline Data={eduData}/>
         </Layout>
         )
}

export default Educacao