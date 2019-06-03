import Layout from '../components/layout'

import '../src/css/main.scss'
import '../src/css/index.scss'
import minhaFoto from '../src/img/gisele-ml.png'

const Sobre = () => (
        <Layout content="Está página contém um pouco da minha ambição à profissão de desenvolvedora de software."> 
           <h1 id="meu-titulo">Gisele Mara Leonardi
            <hr></hr>
            <h6>Software Developer Jr.</h6>
           </h1>
           <div className="sobre-mim">
           <img src={minhaFoto} alt="Imagem da Sailon Moon no computador"/>
            <p>
               Comecei na área de programação estudando por conta própria com os inúmeros recursos online, 
               sou muito curiosa para <strong>aprender novas tecnologias e ferramentas</strong>, e por isso estou sempre estudando 
               e lendo novos artigos. 
               <br></br>Procuro me aprimorar para escrever <strong>códigos limpos, com boas práticas e eficientes</strong>. 
               Hoje em dia estou cursando <strong>Sistemas para Internet</strong>, e levo meus estudos muito a sério.
               <br></br>Sei trabalhar bem em equipe e <strong>não tenho problemas em receber opiniões construtivas</strong>; 
               Consigo reconhecer meus erros e buscar repará-los, para assim crescer como pessoa e também como profissional. 
               Meu objetivo é ser uma <strong>excelente</strong> programadora, aprender todos os dias, estar sempre atualizada e 
               construir coisas que serão úteis <strong>(e legais!)</strong> para as pessoas.
            </p>
            </div>
        </Layout>
  )
  
export default Sobre