import Layout from '../components/layout'
import minhaFoto from '../src/img/gisele-ml.png'

import '../src/css/main.scss'
import '../src/css/index.scss'


const Sobre = () => (
        <Layout content="Está página contém um pouco da minha ambição à profissão de desenvolvedora de software."> 
           <div className="meu-titulo">
               <h1>Gisele Mara Leonardi</h1>
               <hr></hr>
               <h6>Software Developer</h6>
            </div>
           <div className="sobre-mim">
            <img src={minhaFoto} alt="gisele mara leonardi"/>
               <p>
                  Comecei a me interessar por programação estudando por conta própria com os inúmeros recursos online, 
                  sou muito curiosa para <strong>aprender novas tecnologias e ferramentas</strong>, e por isso estou sempre estudando 
                  e lendo artigos da área. 
                  <br></br>Procuro me aprimorar para escrever <strong>códigos limpos, com boas práticas e eficientes</strong>. 
                  Atualmente estou cursando <strong>Sistemas para Internet</strong>, e levo meus estudos muito a sério.
                  <br></br>Sei trabalhar bem em equipe e <strong>não tenho problemas em receber opiniões construtivas</strong>; 
                  Consigo reconhecer meus erros e buscar repará-los, para assim crescer como pessoa e também como profissional. 
                  Meu objetivo é ser uma <strong>excelente</strong> programadora, aprender todos os dias, estar sempre atualizada e 
                  construir coisas que serão úteis <strong>(e legais!)</strong> para as pessoas.
                  <br></br><strong>Quer ver meu currículo? :) <a href="https://docs.google.com/document/d/1auwWWODDXaMnHwWskNQCTd-gxYhBuQMiPQTKZ-f0lcA/edit?usp=sharing" target="_blank">Clique aqui!</a></strong>
               </p>
            </div>
        </Layout>
  )
  
export default Sobre