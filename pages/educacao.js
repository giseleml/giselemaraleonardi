import Layout from '../components/layout'
import '../src/css/timeline.scss'

const educacaoData = [
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

const Timeline = () => (
   <div className="timeline">
      {
         educacaoData.map((data, id) => {
         return <ul className="timeline-item">
                  <li id={id}>{data.instituto}</li>
                  <li id={id}><strong>{data.ano}</strong></li>
                  <li id={id}>{data.formacao}</li>
                  {
                     data.certificado ? <a href={data.certificado} target="_blank" id={id}>Certificado</a> : ""
                  }
               </ul>
         })
      }
      </div>
)

const Educacao = () => (
   <Layout>
      <h1>Meus estudos</h1>
      <Timeline />
   </Layout>
)

export default Educacao