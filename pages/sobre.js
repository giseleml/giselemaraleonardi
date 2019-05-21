import Layout from '../components/layout'
import '../src/css/main.scss'
import '../src/css/sobre.scss'

const Sobre = () => (
        <Layout>
           <div className="sobre-mim">
            <h1 className="titulo-pagina">Sobre mim</h1>
            <img src="http://sailormoonnews.com/wp-content/uploads/2014/07/sailor_moon_crystal_02_luna_and_usagi_at_the_computer.jpg"/>
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