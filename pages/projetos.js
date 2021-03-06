import '../src/css/main.scss'
import '../src/css/projetos.scss'

import LazyLoad from 'react-lazyload'
import Layout from '../components/layout'


const codepenData = [
   {
      titulo: "React Accordion",
      img: "https://screenshot.codepen.io/2565984.NoLMeq.small.cb7a0283-65f6-44ed-b94e-c24287efbc9e.png",
      url: "https://codepen.io/giseleml/pen/NoLMeq",
      alt: "Screenshot do projeto React Accordion"
   },
   {
      titulo: "Photograph.y Responsive Website",
      img: "https://screenshot.codepen.io/2565984.oNgmQjy.ffdfd7ec-6c34-4924-b956-57f40b058bbe.png",
      url: "https://codepen.io/giseleml/full/oNgmQjy",
      alt: "Screenshot do projeto Photography site responsivo"

   },
   {
      titulo: "React Calculadora",
      img: "https://screenshot.codepen.io/2565984.vbrJZw.small.fa7206bf-3729-4784-8bca-8ce204ad0d1b.png",
      url: "https://codepen.io/giseleml/pen/vbrJZw",
      alt: "Screnshot do projeto Calculadora React"
   },
   {
      titulo:"Edron Parallex Effect",
      img: "https://screenshot.codepen.io/2565984.BMOerL.small.6ed0b160-3411-414f-be51-46be44628437.png",
      url: "https://codepen.io/giseleml/pen/BMOerL",
      alt: "Screenshot do projeto Edron Parallex Effect"
   },
   {
      titulo: "Image Slider",
      img: "https://screenshot.codepen.io/2565984.gEvqvb.small.3fede1c1-b0fe-47a5-9906-2eb4dd19a003.png",
      url: "https://codepen.io/giseleml/pen/gEvqvb",
      alt: "Screenshot do projeto Image Slider"
   },
   {
      titulo: "To-Do List",
      img: "https://screenshot.codepen.io/2565984.xMJmRP.small.94ff405e-ec7b-4dd1-8e5e-b9765974518f.png",
      url: "https://codepen.io/giseleml/pen/xMJmRP",
      alt: "Screenshot do projeto To-Do List"
   },
   {
      titulo: "Random Quote Generator",
      img: "https://screenshot.codepen.io/2565984.daVxdV.small.cb8b1af7-ff68-459e-9fe9-09120cc2b19b.png",
      url: "https://codepen.io/giseleml/pen/daVxdV",
      alt: "Screenshot do projeto Random Quote Generator"
      
   },
   {
      titulo: "CSS Hello Kitty",
      img: "https://screenshot.codepen.io/2565984.pBpKyq.small.2ec84f7d-4282-4cb5-9fb3-240d39acb64d.png",
      url: "https://codepen.io/giseleml/pen/pBpKyq",
      alt: "Screenshot do projeto CSS Hello Kitty"
   },
   {
      titulo: "Bubble Sort",
      img: "https://screenshot.codepen.io/2565984.WBQjVY.b43640a8-1a5e-4127-af22-c80ad33da3a2.png",
      url: "https://codepen.io/giseleml/pen/WBQjVY",
      alt: "Screenshot do projeto Bubble Sort"
   }, 
   {
      titulo: "Conversor Fahrenheit",
      img: "https://screenshot.codepen.io/2565984.PgZNLw.0befb8e3-f60e-48d5-bd59-b906b787ed30.png",
      url: "https://codepen.io/giseleml/pen/PgZNLw",
      alt: "Screenshot do projeto conversor fahrenheit"
   },
   {
      titulo: "Drum Machine",
      img: "",
      url: "https://codepen.io/giseleml/pen/OdZbLj",
      alt: "Screenshot do projeto drum machine dos Simpsons"
   }, 
   {
      titulo: "CSS Vintage Card",
      img: "https://screenshot.codepen.io/2565984.pmpxJJ.b485b33e-4aa8-4db3-8f9e-7d539896a907.png",
      url: "https://codepen.io/giseleml/pen/pmpxJJ",
      alt: "Card estilo vintage feito em CSS"
   },
   {
      titulo: "My first landing page",
      url: "https://codepen.io/giseleml/full/oNXqbBZ",
      alt: "Screenshot do meu projeto Landing page"
   },
   {
      titulo: "Cat Facts",
      url: "https://codepen.io/giseleml/full/gObELBj",
      alt: "Screenshot do meu projeto Cat Facts"
   }
]

const CodepenProjects = () => (
   <div className="codepen-list">
      {
         codepenData.map((item, id) => {
            return <div className="codepen-list-projects" key={id}>
                     <h3 key={id} className="subtitulo-pagina">{item.titulo}</h3>
                     <LazyLoad 
                     height={300} 
                     once={true}
                     >
                        <img src={!item.img ? "https://www.betterteam.com/i/codepen-420x320-20181026.jpg" : item.img} alt={item.alt}></img>
                     </LazyLoad>
                     <h3><a href={item.url} target="_blank" rel="noopener">Acesse aqui</a></h3>
                  </div>
         })
      }
   </div>
)

const Projetos = () => (
        <Layout 
        title="| Projetos"
        content="Página com os projetos de programação."
        >
           <h1 className="titulo-pagina">Meus Projetos</h1>
            <CodepenProjects />
        </Layout>
  )
  
export default Projetos