import Layout from '../components/layout'
import '../src/css/projetos.scss'

const codepenData = [
   {
      titulo: "React Accordion",
      img: "https://screenshot.codepen.io/2565984.NoLMeq.small.cb7a0283-65f6-44ed-b94e-c24287efbc9e.png",
      url: "https://codepen.io/giseleml/pen/NoLMeq"
   },
   {
      titulo: "React Calculadora",
      img: "https://screenshot.codepen.io/2565984.vbrJZw.small.fa7206bf-3729-4784-8bca-8ce204ad0d1b.png",
      url: "https://codepen.io/giseleml/pen/vbrJZw"
   },
   {
      titulo:"Edron Parallex Effect",
      img: "https://screenshot.codepen.io/2565984.BMOerL.small.6ed0b160-3411-414f-be51-46be44628437.png",
      url: "https://codepen.io/giseleml/pen/BMOerL"
   },
   {
      titulo: "Image Slider",
      img: "https://screenshot.codepen.io/2565984.gEvqvb.small.3fede1c1-b0fe-47a5-9906-2eb4dd19a003.png",
      url: "https://codepen.io/giseleml/pen/gEvqvb"
   },
   {
   titulo: "To-Do List",
   img: "https://screenshot.codepen.io/2565984.xMJmRP.small.94ff405e-ec7b-4dd1-8e5e-b9765974518f.png",
   url: "https://codepen.io/giseleml/pen/xMJmRP"
   },
   {
      titulo: "Random Quote Generator",
      img: "https://screenshot.codepen.io/2565984.daVxdV.small.cb8b1af7-ff68-459e-9fe9-09120cc2b19b.png",
      url: "https://codepen.io/giseleml/pen/daVxdV"
   },
   {
      titulo: "CSS Hello Kitty",
      img: "https://screenshot.codepen.io/2565984.pBpKyq.small.2ec84f7d-4282-4cb5-9fb3-240d39acb64d.png",
      url: "https://codepen.io/giseleml/pen/pBpKyq"
   }

]

const CodepenProjects = () => (
   <div className="codepen-list">
      {
         codepenData.map((item, id) => {
            return <div className="codepen-list-projects" key={id}>
                     <h2 key={id}>{item.titulo}</h2>
                     <img src={item.img}></img>
                     <p><a href={item.url} target="_blank">Acesse aqui</a></p>
                  </div>
         })
      }
   </div>
)

const Projetos = () => (
        <Layout>
           <h1>Meus Projetos</h1>
            <CodepenProjects />
        </Layout>
  )
  
export default Projetos